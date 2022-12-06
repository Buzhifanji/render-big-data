<svelte:options tag="virtual-list" />

<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import type { ScrollState } from "./interface";
  import { getELmentHeight, getELmentIndex } from "./util";
  import { scrollState as _scrollState } from "./store";
  import { updateHeight, watchScroll } from "./scroll";

  let scrollState: ScrollState;
  const unsubscribe = _scrollState.subscribe((value) => (scrollState = value));

  let container: HTMLElement;
  let content: HTMLElement;

  function onScroll(event: Event) {
    const target = event.target as HTMLElement;
    watchScroll(target.scrollTop);
  }

  // 当 container 尺寸发生变化的时候，更新高度
  const resizeObserver = new ResizeObserver(() => {
    requestAnimationFrame(() => {
      [...content.children].forEach((node: HTMLElement) => {
        const index = getELmentIndex(node);
        const height = getELmentHeight(node);
        updateHeight(index, height);
      });
    });
  });

  onMount(() => {
    resizeObserver?.observe(container);
  });

  onDestroy(() => {
    resizeObserver?.disconnect();
    unsubscribe();
  });
</script>

<div class="virtual-list-container" on:scroll={onScroll} bind:this={container}>
  <div
    class="virtual-list-phantom"
    style="height: {scrollState.totalHeight}px"
  />
  <div
    class="virtual-list-content"
    style="transform: translate3d(0px, {scrollState.scrollTop}px, 0px)"
    bind:this={content}
  >
    <slot>
      <em>no content was provided</em>
    </slot>
  </div>
</div>

<style>
  .virtual-list-container {
    overflow: auto;
    position: relative;
    height: 100%;
    width: 100%;
  }

  .virtual-list-phantom,
  .virtual-list-content {
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .virtual-list-phantom {
    z-index: -1;
  }
</style>
