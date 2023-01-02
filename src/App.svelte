<script lang="ts">
  import { onDestroy } from "svelte";
  import Mock from "mockjs";

  // import { initRenderData, visiableData } from "render-big-data";
  import {
    VirtualList,
    VirtualListItem,
    initRenderData,
    visiableData,
  } from "./lib/index";

  // import "emoji-picker-element";
  interface List {
    key: number;
    value: string;
  }

  let data: List[] = [];

  const unsubscribe = visiableData.subscribe((value) => (data = value));

  function getData() {
    setTimeout(() => {
      const reslut: { key: number; value: string }[] = [];
      for (let i = 0; i < 10000; i++) {
        reslut.push({
          key: i,
          value: Mock.mock({ content: "@cparagraph()" }).content,
        });
      }
      initRenderData(reslut);
    }, 1000);
  }

  getData();

  let selected = 0;

  onDestroy(() => {
    unsubscribe();
  });
</script>

<main>
  <h1>render big data</h1>
  <section>
    <!-- <div>
      <button on:click={() => (selected = 0)}>virtual list</button>
      <button on:click={() => (selected = 1)}>lazy loading</button>
    </div> -->
    <div class="card">
      {#if selected === 0}
        <VirtualList>
          {#each data as item, index}
            <VirtualListItem {index}>
              <p class="content">{item.key}: {item.value}</p>
            </VirtualListItem>
          {/each}
        </VirtualList>
      {:else if selected === 1}
        <div>lazy loading</div>
      {/if}
      <!-- {#if selected === 0}
        <virtual-list>
          {#each data as item, index}
            <virtual-list-item {index}>
              <p class="content">{item.key}: {item.value}</p>
            </virtual-list-item>
          {/each}
        </virtual-list>
      {:else if selected === 1}
        <div>lazy loading</div>
      {/if} -->
    </div>
  </section>
</main>

<style>
  main {
    margin: 0 auto;
    padding: 0 12em;
  }
  .card {
    width: 100%;
    height: 600px;
    cursor: pointer;
    border: 2px solid;
    border-radius: 3px;
    overflow-y: auto;
    border-color: #696969;
  }
  .content {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #bbb;
    margin: 20px;
  }
</style>
