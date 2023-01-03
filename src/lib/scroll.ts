import { get } from "svelte/store";
import type { Height } from "./interface";
import { config, scrollState, updateScrollState } from "./store";
import { binarySearch } from "./util";

/**
 * 先给出一个假定的高度，当dom渲染完后，更新真实的高度
 */

let itemHeightCache: Height[] = []; // 每一项的高度
let itemScrollTopCache: number[] = [] // 每一项距离顶部的高度
let totalCount = 0; // 总条数

function sumOfNumbers(arr: Height[] = itemHeightCache) {
  return arr.reduce((prev, current) => prev + current.value, 0);
}

function initItemScrollTopCache(n: number, item: number) {
  const result: number[] = [0]
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] + item
  }
  return result
}

function updateItemScrollTopCache(arr1: number[], arr2: Height[]) {
  const result: number[] = [0];
  for (let i = 1; i < arr1.length; i++) {
    result[i] = arr1[i - 1] + arr2[i - 1].value;
  }

  return result
}

export function initHeight(len: number) {
  totalCount = len;
  const height = get(config).assumedHeight

  itemHeightCache = Array(len).fill({ isRecord: false, value: height })
  itemScrollTopCache = initItemScrollTopCache(len, height)
  const totalHeight = sumOfNumbers()

  updateScrollState({ totalHeight })
}

export function updateHeight(index: number, height: number) {
  // 加入缓存，减少重复的计算
  if (itemHeightCache[index] && !itemHeightCache[index].isRecord) {
    // dom 元素加载完，得到实际高度，重新赋值
    itemHeightCache[index] = { isRecord: true, value: height }
    // 重新确定虚拟列表的实际高度
    const totalHeight = sumOfNumbers()
    itemScrollTopCache = updateItemScrollTopCache(itemScrollTopCache, itemHeightCache);

    scrollState.update(state => {
      state.totalHeight = totalHeight;
      // 当 scroll 滚动的时候，itemScrollTopCache 并未及时更新，所以获取的数据还是旧数据，会导致scrollTop不正确。所以需要更新 scrollTop
      state.scrollTop = itemScrollTopCache[state.startIndex]
      return state
    })
  }
}

export function resetHeight() {
  itemHeightCache.forEach(item => item.isRecord = false)
}

// 获取渲染项开始索引
function getStartIndex(srollTop: number) {
  return binarySearch(itemScrollTopCache, srollTop);
}

function handleIndex(_startIndex: number): [number, number] {
  const renderNum = get(config).renderNum
  if (totalCount < renderNum) {
    return [0, totalCount]
  } else {
    // 如果是奇数，就取前一位偶数
    let startIndex = _startIndex % 2 !== 0 ? _startIndex - 1 : _startIndex;

    let endIndex = startIndex + renderNum
    if (startIndex + renderNum > totalCount) {
      startIndex = totalCount - renderNum;
      endIndex = totalCount
    }

    return [startIndex, endIndex]
  }
}

export function watchScroll(scrollTop: number) {
  const _startIndex = getStartIndex(scrollTop);
  const [startIndex, endIndex] = handleIndex(_startIndex)

  updateScrollState({ startIndex, endIndex, scrollTop: itemScrollTopCache[startIndex] || 0 })
}


/**
 * 水平滚动
 */
function scrollHorizontal() {

}


/**
 * 垂直滚动
 */
function scrollTopVertical() {

}