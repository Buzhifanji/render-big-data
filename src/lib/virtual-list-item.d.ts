export class VirtualListItem extends HTMLDivElement {
  /**
 * 设置索引
 */
  index: number
}

declare global {
  interface HTMLElementTagNameMap {
    "virtuall-list-item": VirtualListItem;
  }
}