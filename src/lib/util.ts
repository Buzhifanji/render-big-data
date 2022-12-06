
// 二分法查找
export function binarySearch(list: number[], value: number) {
  let result = -1;
  let left = 0;
  let right = list.length - 1;
  const getMid = () => Math.floor((left + right) / 2);
  let mid = getMid()

  while (right - left > 1) {
    const midVal = list[mid];
    if (value < midVal) {
      // 目标在左侧
      right = mid
      mid = getMid()
    } else if (value > midVal) {
      // 目标在右侧
      left = mid;
      mid = getMid()
    } else {
      result = mid
      return result
    }
  }
  result = left;
  return result
}

export function getELmentHeight(node: HTMLElement): number {
  return node.getBoundingClientRect().height
}

export function getELmentIndex(node: HTMLElement) {
  return +node.getAttribute("data-index");
}
