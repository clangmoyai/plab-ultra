#!/usr/bin/env node

import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

let prevCommand: string | null = null;

/**
 * Main
 */
async function main(): Promise<void> {
  const readline = createInterface({ input: stdin, output: stdout });
  try {
    const packageJson = loadFile("package.json");

    const userscriptJson = loadFile("userscript.json");

    if (!packageJson.version) {
      handleError(
        "Version not found in package.json",
        new Error("Version missing"),
      );
    }

    if (!userscriptJson.version) {
      handleError(
        "Version not found in userscript.json",
        new Error("Version missing"),
      );
    }

    if (packageJson.version !== userscriptJson.version) {
      handleError(
        "Version mismatch between files",
        new Error(
          `package.json: ${packageJson.version}, userscript.json: ${userscriptJson.version}`,
        ),
      );
    }

    const userInput = await readline.question(
      `Enter new version (empty to keep ${packageJson.version}): `,
    );

    const newVersion = userInput.trim() || packageJson.version;

    if (newVersion && newVersion !== packageJson.version) {
      writeVersion(newVersion, packageJson, userscriptJson);
    } else {
      console.log("\n✅ Keeping current version");
    }

    run("pnpm --version");
    run("pnpm check", "🔍 Running check");
    run("pnpm lint", "🔍 Running lint");
    run("pnpm fallow dead-code", "🔍 Running fallow dead-code");
    run("pnpm fallow dupes", "🔍 Running fallow dupes");
    run("pnpm up", "🔄 Updating dependencies");
    run("pnpm build", "🔧 Building project");

    console.log("\n🎉 Process completed\n");
    console.log(
      "• Push any remaining changes and `plab-ultra.user.js` to GitHub",
    );
    console.log(
      "• Create a new GitHub release to trigger the Sleazy Fork webhook",
    );
  } catch (error) {
    handleError("An unexpected error occurred", error);
  } finally {
    readline.close();
  }
}

main();

/**
 * Updates version in `package.json` and `userscript.json`
 */
function writeVersion(
  version: string,
  packageJson: { version: string; [key: string]: unknown },
  userscriptJson: { version: string; [key: string]: unknown },
): void {
  try {
    // package.json
    packageJson.version = version;
    writeFileSync("package.json", JSON.stringify(packageJson, null, 2) + "\n");
    console.log("✅ Updated package.json");

    // userscript.json
    userscriptJson.version = version;
    writeFileSync(
      "userscript.json",
      JSON.stringify(userscriptJson, null, 2) + "\n",
    );
    console.log("✅ Updated userscript.json");

    // fix formatting
    run("pnpx prettier --write package.json userscript.json");
  } catch (error) {
    handleError("Failed to update version files", error);
  }
}

/**
 * Generic command runner
 */
function run(command: string, message?: string): void {
  try {
    const newLine = prevCommand === "pnpm lint" ? "" : "\n";
    if (message) console.log(`${newLine}${message}...`);
    execSync(command, { stdio: message ? "inherit" : "pipe" });
    prevCommand = command;
  } catch (error) {
    handleError("Failed to run command", error);
  }
}

/**
 * Load and parse JSON file
 */
function loadFile(filepath: string): {
  [key: string]: unknown;
  version: string;
} {
  try {
    return JSON.parse(readFileSync(filepath, "utf8"));
  } catch (error) {
    handleError(`Failed to read ${filepath}`, error);
  }
}

/**
 * Generic error handler
 */
function handleError(message: string, error: unknown): never {
  const errorMessage = error instanceof Error ? error.message : String(error);
  console.error(`\n❌ ${message}:`, errorMessage);
  process.exit(1);
}
