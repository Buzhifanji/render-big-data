import { derived, get, writable } from 'svelte/store';
import type { ScrollState, VirtualListProp } from './interface';

export const scrollState = writable<ScrollState>({
  totalHeight: 0, // 滚动条总高度
  scrollTop: 0, // 距离顶部的偏移量
  startIndex: 0, // 开始索引dd
  endIndex: 0, // 结束索引
})

export const updateScrollState = (value: Partial<ScrollState>) => {
  scrollState.update(state => {
    for (const key in value) {
      state[key] = value[key]
    }

    return state
  })
}

export const renderData = writable([])

export const visiableData = derived(scrollState, state => {
  const list = get(renderData)
  return list.slice(state.startIndex, state.endIndex)
})

export const config = writable<VirtualListProp>({
  renderNum: 15,
  assumedHeight: 100,
})