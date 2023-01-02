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
    // 合并配置
    updateConfig(options)

    // 更新渲染条数
    updateRenderNum(get(config).renderNum)

  } else {
    updateRenderNum(14)
  }

  // 初始化假定的高度
  initHeight(arr.length);
}

export { visiableData }