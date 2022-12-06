import { get } from "svelte/store";
import type { VirtualListProp } from "./interface";
import { initHeight } from "./scroll";
import { config, renderData, scrollState, visiableData } from "./store";

function updateRenderNum(num: number) {
  scrollState.update(state => {
    state.endIndex = num
    return state
  })
}

function updateConfig(options: VirtualListProp) {
  const defaultConifg = get(config)
  config.update(() => {
    Object.assign(defaultConifg, options)
    return defaultConifg
  })
}

export function initRenderData(arr: any[], options?: VirtualListProp) {
  renderData.set(arr);

  if (options) {
    updateConfig(options)

    updateRenderNum(get(config).renderNum)

  } else {
    updateRenderNum(14)
  }

  initHeight(arr.length);
}

export { visiableData }