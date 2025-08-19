<!--
@component
Renders action buttons in `Settings.svelte`
-->

<script lang="ts">
  import {
    exportSettings,
    getSettings,
    restoreDefaultSettings,
    syncSettings,
  } from "./handleSettings";
  import { addPerformerLink } from "./handleLinks";
  import Checkmark from "../Checkmark.svelte";

  let parseTitle = $derived(getSettings("parseTitle"));
  let performerLinks = $derived(getSettings("performerLinks"));
</script>

<!-- buttons -->
<div class="container">
  <Checkmark
    onclick={addPerformerLink}
    title="Add performer link"
    disabled={!parseTitle || !performerLinks}
  >
    Add link
  </Checkmark>

  <div class="align-right">
    <Checkmark onclick={syncSettings} title="Sync settings to other tabs">
      Sync
    </Checkmark>

    <Checkmark
      onclick={restoreDefaultSettings}
      title="Restore all settings to default"
    >
      Restore
    </Checkmark>

    <Checkmark onclick={exportSettings} title="Export settings as text file">
      Export
    </Checkmark>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  .align-right {
    display: flex;
    gap: 0.5rem;
  }
</style>
