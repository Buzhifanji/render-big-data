
export interface ScrollState {
  totalHeight: number;
  scrollTop: number;
  startIndex: number;
  endIndex: number;
}


export interface VirtualListProp {
  renderNum?: number; //  总共渲染多少条数据，默认为 15
  assumedHeight?: number, // 预定预定高度（单位为px）, 默认为 100px
  direction?: 'vertical' | 'horizontal', // 滚动方向
}


export interface Height {
  isRecord: boolean; // 是否被记录过
  value: number; // 高度
}