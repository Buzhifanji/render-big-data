<svelte:options tag="virtual-list-item" />

<script lang="ts">
  import { afterUpdate, onDestroy } from "svelte";
  import { updateHeight } from "./scroll";
  import { getELmentHeight } from "./util";
  import { scrollState as _scrollState } from "./store";
  import type { ScrollState } from "./interface";

  export let index: number = 0;

  let node: HTMLElement;

  let scrollState: ScrollState;
  const unsubscribe = _scrollState.subscribe((value) => (scrollState = value));

  $: _index = scrollState.startIndex + index;

  afterUpdate(() => {
    if (node) {
      const height = getELmentHeight(node);
      updateHeight(_index, height);
    }
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div bind:this={node} data-index={_index.toString()}>
  <slot>
    <em>no content was provided</em>
  </slot>
</div>
