## 虚拟列表

![NPM](https://img.shields.io/npm/l/render-big-data?style=for-the-badge)
![npm](https://img.shields.io/npm/v/render-big-data?style=for-the-badge)
![downloads](https://img.shields.io/npm/dm/render-big-data.svg?style=for-the-badge)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/render-big-data?style=for-the-badge)

[中文](https://github.com/Buzhifanji/render-big-data#README.zh_CN.md) | [English](https://github.com/Buzhifanji/render-big-data#readme)

## 特点

- 简单易用，只需4步。
- 具有高渲染性能和高效的大数据列表。
- 不必关心每项列表的高度，因为它会自动计算。
- 没有框架限制，唯一前提是使用的框架支持 web component

##  在线例子

[https://buzhifanji.github.io/render-big-data/](https://buzhifanji.github.io/render-big-data/)

## 使用示例

因为是 web component 组件库，不能的框架使用起来有差别，这里以 `vue` 框架来作为示例。

```
npm i render-big-data --save
```

组件：

```vue
<script>
import { initRenderData, visiableData } from "render-big-data";
import Mock from "mockjs";
import { onUnmounted } from "vue";

setTimeout(() => {
  const reslut: { key: number; value: string }[] = [];
  for (let i = 0; i < 10000; i++) {
    reslut.push({ key: i, value: Mock.mock({ content: "@cparagraph()" }).content });
  }

  initRenderData(reslut);  // 第一步：准备全部数据
}, 1000);


// 第二步：订阅数据
const list = []
const unsubscribe = visiableData.subscribe((value) => (data = value));


// 第三步：别忘记组件卸载的时候，取消数据订阅
onUnmounted(unsubscribe);
</script>

<template>
 <virtual-list>
    <virtual-list-item v-for="(item, index) in list" :index="index"> // index 是必传的参数，别忘记了。
       <p class="content">{item.key}: {item.value}</p>
    </virtual-list-item>
  </virtual-list>
</template>
```

web component 设置

不能框架使用web component,是有差别的，具体使用参考对应的官方文档。

如果你使用的是 `vue`，你应该看看 [using-custom-elements-in-vue](https://vuejs.org//guide/extras/web-components.html#using-custom-elements-in-vue)。

如果你使用的是 `react`, 你应该看看 [Using Web Components in React](https://reactjs.org/docs/web-components.html)。

如果你使用的是 `angular`, 你应该看看 [using-custom-elements-in-angular](https://angular.io/guide/elements)。

如果你使用的是 `svelte`, 你不需要任何设置，直接使用即可。

。。。。。。
