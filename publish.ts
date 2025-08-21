#!/usr/bin/env node

import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

const rl = createInterface({ input: stdin, output: stdout });

/**
 * Main
 */
async function main(): Promise<void> {
  try {
    let packageJson: { version: string; [key: string]: unknown };

    try {
      packageJson = JSON.parse(readFileSync("package.json", "utf8"));
    } catch (error) {
      console.error("❌ Failed to read package.json:", error.message);
      process.exit(1);
    }

    const currentVersion = packageJson.version;
    if (!currentVersion) {
      console.error("❌ Package version not found in package.json");
      process.exit(1);
    }

    const input = await rl.question(
      `Enter new version (empty to keep ${currentVersion}): `
    );

    const newVersion = input.trim() || currentVersion;

    if (newVersion && newVersion !== currentVersion) {
      writeVersion(newVersion, packageJson);
    } else {
      console.log("\n✅ Keeping current version");
    }

    pnpmVersion();
    pnpxSvCheck();
    pnpmLint();
    pnpmKnip();
    pnpmUp();
    pnpmBuild();

    console.log("\n🎉 Process completed\n");
    console.log(
      "• Push any remaining changes and `plab-ultra.user.js` to GitHub"
    );
    console.log(
      "• Create a new GitHub release to trigger the Sleazy Fork webhook"
    );
  } catch (error) {
    console.error("\n❌ An error occurred:", error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

main();

/**
 * Updates version in `package.json` and `userscript.json`
 */
function writeVersion(
  version: string,
  packageJson: { version: string; [key: string]: unknown }
): void {
  try {
    // Update package.json
    packageJson.version = version;
    writeFileSync("package.json", JSON.stringify(packageJson, null, 2) + "\n");
    console.log(`\n✅ Updated package.json`);

    // Update userscript.json
    const userscriptJson = JSON.parse(readFileSync("userscript.json", "utf8"));
    userscriptJson.version = version;
    writeFileSync(
      "userscript.json",
      JSON.stringify(userscriptJson, null, 2) + "\n"
    );
    console.log(`✅ Updated userscript.json`);
  } catch (error) {
    console.error("❌ Failed to update version files:", error.message);
    process.exit(1);
  }
}

/**
 * pnpm --version
 */
function pnpmVersion(): void {
  try {
    execSync("pnpm --version", { stdio: "pipe" });
  } catch {
    console.error("\n❌ pnpm not found\n");
    process.exit(1);
  }
}

/**
 * pnpx sv check
 */
function pnpxSvCheck(): void {
  console.log("\n🔍 Running svelte-check...");
  try {
    execSync("pnpx sv check", { stdio: "inherit" });
  } catch (error) {
    console.error("\n❌ Svelte check failed:", error);
    process.exit(1);
  }
}

/**
 * pnpm lint
 */
function pnpmLint(): void {
  console.log("\n🔍 Running lint...");
  try {
    execSync("pnpm lint", { stdio: "inherit" });
  } catch (error) {
    console.error("❌ Linting failed:", error);
    process.exit(1);
  }
}

/**
 * pnpm knip
 */
function pnpmKnip(): void {
  console.log("🔍 Running knip...");
  try {
    execSync("pnpm knip", { stdio: "inherit" });
  } catch (error) {
    console.error("\n❌ Knip found issues:", error);
    process.exit(1);
  }
}

/**
 * pnpm up
 */
function pnpmUp(): void {
  console.log("\n🔄 Updating dependencies...\n");
  try {
    execSync("pnpm up", { stdio: "inherit" });
  } catch (error) {
    console.error("\n❌ Failed to update dependencies:", error.message);
    process.exit(1);
  }
}

/**
 * pnpm build
 */
function pnpmBuild(): void {
  console.log("\n🔧 Building project...");
  try {
    execSync("pnpm build", { stdio: "inherit" });
  } catch (error) {
    console.error("\n❌ Build failed:", error);
    process.exit(1);
  }
}
