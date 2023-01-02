## virtual-list

![NPM](https://img.shields.io/npm/l/render-big-data?style=for-the-badge)
![npm](https://img.shields.io/npm/v/render-big-data?style=for-the-badge)
![downloads](https://img.shields.io/npm/dm/render-big-data.svg?style=for-the-badge))
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/render-big-data?style=for-the-badge)

## Advantages

- Only 4 required props, simple and very easy to use.
- Big data list with high render performance and efficient.
- You don't have to care about item size, it will calculate automatic.
- There is no framework limitation, only one premise, the framework used supports web component
- 没有框架限制，只有一个前提，使用的框架支持 web component


## Simple usage

example by use `vue`.

```
npm i render-big-data --save
```

component:

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

  initRenderData(reslut);  // first:  prepare all data
}, 1000);


// second: subscribe data
const list = []
const unsubscribe = visiableData.subscribe((value) => (data = value));


// third: don't forget unsubscribe
onUnmounted(unsubscribe);
</script>

<template>
 <virtual-list>
    <virtual-list-item v-for="item in list" :index="index"> // index is important here, don't forget it
       <p class="content">{item.key}: {item.value}</p>
    </virtual-list-item>
  </virtual-list>
</template>
```

web component setting

if you use `vue`，you should read [using-custom-elements-in-vue](https://vuejs.org//guide/extras/web-components.html#using-custom-elements-in-vue).

if you use `react`, you should read [Using Web Components in React](https://reactjs.org/docs/web-components.html).

if you use `angular`, you should read [using-custom-elements-in-angular](https://angular.io/guide/elements).

if you use `svelte`, you don't need any settings.

and so on.
