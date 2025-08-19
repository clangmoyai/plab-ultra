<!--
@component
Renders pagination
-->

<script lang="ts">
  import { data } from "./utils/data.svelte";

  const parser = new DOMParser();

  const translations: Record<string, string> = {
    Страница: "Page",
    Страницы: "Pages",
    из: "of",
    "Пред.": "Prev",
    "След.": "Next",
  };

  const regex = /Страница|Страницы|из|Пред\.|След\./g;

  let content = $derived.by(() => {
    if (!data.pagination?.innerHTML) return "";

    const doc = parser.parseFromString(data.pagination.innerHTML, "text/html");
    const pageSelect = doc.querySelector("a.menu-root");
    if (pageSelect) {
      pageSelect.replaceWith(doc.createTextNode("Pages"));
    }

    return doc.body.innerHTML
      .replace(regex, (match) => translations[match] ?? match)
      .replace(/Pages\s+:/, "Pages:");
  });
</script>

{#if data?.pagination}
  <div id="ultra-pagination">
    {#if data.pagination}
      {@html content}
    {/if}
  </div>
{/if}

<style>
  #ultra-pagination {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: var(--content-margin);
  }

  :global(#ultra-pagination a) {
    text-decoration: none !important;
  }
</style>
