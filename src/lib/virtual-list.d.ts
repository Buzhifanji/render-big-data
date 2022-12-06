export class VirtualList extends HTMLDivElement { }

declare global {
  interface HTMLElementTagNameMap {
    "virtuall-list": VirtualList;
  }
}