---
title: 关于Responsive / 自适应以及适配
date: 2023-01-12 15:36:00
permalink: /pages/fa885f/
categories:
  - 页面
  - CSS
tags:
  -
---

# 关于 Responsive / 自适应以及适配

适配问题一直是让开发人员头疼的问题，这里按照自己的想法和理解同时参考了网上的文章来写一写关于如何适配的思路和方法（不全）。有些概念描述会比较简洁，不明白的同学可以自行百度。

## 相关概念

- 像素：像素是构成图像的最小单位

- 分辨率：分辨率简单分为屏幕分辨率和图像分辨率。相同尺寸的屏幕或者图像，能够显示的像素越多，代表分辨率越高

- PPI：每英寸包括的像素数（像素密度单位）

- 设备物理像素（物理分辨率）：设备的真实分辨率

- 设备独立像素（逻辑分辨率）：打开控制台，移动设备调试中显示的像素，以下代码可以获取设备独立像素的宽高

- ```js
  document.documentElement.clientWidth //iphone6 => 320
  document.documentElement.clientHeight //iphone6 => 667
  ```

## 自适应的方法

### Media Query （媒体查询）

一些常用的媒体查询公式

```css
@media screen and (min-width: 640px) {
  //手机屏幕
}
```

```css
@media screen and (min-width: 768px) {
  //ipad屏幕直向
}
```

```css
@media screen and (min-width: 1024px) {
  //电脑屏幕或ipad横向
}
```

```css
@media screen and (min-width: 1280px) {
  //电脑屏幕
}
```

```css
@media (orientation: landscape) {
  //横屏
}
```

```css
@media (orientation: portrait) {
  //竖屏 -默认
}
```

```css
@media (min-resolution: 2dppx) {
  /* dpr>2 */
}
```

### Meta Viewport

Meta Viewport 是一个写在 HTML`<head>`标签内的`<meta>`标签，它的主要作用是为了告诉手机浏览器，网页的宽度应该等于手机屏幕宽度，这样才能更好的显示移动端屏幕中的内容。下面是使用最多的写法。

```html
<meta
  name="viewport"
  content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
/>
```

### Resolution（分辨率）

自从 IPhone4 推出了 Retina 屏后，如今市场上手机屏幕的分辨率都要比手机逻辑分辨率要大至少一倍。所以为了更好的适应手机的清晰度，我们需要在不同`dpr`手机屏幕中显示不同分辨率的图片。而最简单的做法就是根据屏幕`dpr`的值将图片尺寸放大一定的倍数，如`dpr`为 2 的屏幕，图片显示的大小为 300\*300，这时图片的实际尺寸需要 600\*600。这里可以使用`picture`标签让浏览器根据`dpr`来选择应该呈现的倍数图，使用如下

```html
<picture>
  <!-- srcset属性可以根据dpr来指定要显示的图片 -->
  <source srcset="http://via.placeholder.com/600 2x, http://via.placeholder.com/900 3x" />
  <img src="http://via.placeholder.com/300" alt="DPR" />
</picture>
```

`srcset`=\<imgUrl 1x>，图片 URL 后面跟的是像素密度描述符，格式为像素密度倍数 + 字母`x`，另外 1x 可以省略。

`Tips`：这种方式只能解决应用在`img`标签中的问题，如果是元素的背景图片的话就需要用到媒体查询了。

## Web 端适配

### 原因

目前大部分的显示屏都是 1920\*1080，但是笔记本的显示器却要小的多。比如 macbook air 的尺寸是 13.3 英寸，分辨率是 1440\*900。

根据我的了解目前分辨率最小的笔记本分辨率为 1366\*768，而在实际适配 web 页面中还要考虑浏览器非全屏下的状态栏以及系统的任务栏，所以在项目为一屏的情况下，用 vw 或 rem 适配 Web 端的话会样式错乱。

### 解决

#### 1.版心布局

- 当屏幕大于版心宽度时，版心居中显示。
- 当屏幕小于版心宽度时，屏幕出现一个横向的滚动条。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>版心布局</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html,
      body {
        height: 100%;
        background-color: #ccc;
      }
      main {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        font-size: 40px;
        background-color: pink;
      }
      header {
        height: 80px;
        background-color: aqua;
      }
    </style>
  </head>

  <body>
    <main>
      <header>版心</header>
      <section>
        <div class="animate__animated animate__bounce t1">重生之我叫陈签giaogiaogiao</div>
        <div class="animate__animated animate__bounce t1">重生之我叫陈签giaogiaogiao</div>
        <div class="animate__animated animate__bounce t1">重生之我叫陈签giaogiaogiao</div>
      </section>
    </main>
  </body>
</html>
```

<p align="center"><img src="https://cdn.jsdelivr.net/gh/caococos/resource-set@master/project/myblog/版心布局.png" width="400" style="cursor: zoom-in;"></p>

## 1px 问题

### 原因

1px 问题指的就是设计稿上的 1px 在移动端设备上的显示不尽人意，出现这个问题的本质有有两个主要原因：

- 手机高倍屏的出现，导致不同手机的 DPR(设备像素比)的不同，需要用小于 1px 的像素适应设计稿上的尺寸。

- 不同浏览器对于小于 1px 的处理方式不同。比如火狐对于小于 1px 的都当做 0.5px 处理，谷歌对于小于 1px 都是 1px。

### 解决办法

#### 1.transform

通过`transform`中的`scale`属性

```css
.setBorderAll {
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    transform: scale(0.5);
    transform-origin: left top;
    box-sizing: border-box;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
  }
}
```

通过给每一个需要 1px 边框的的元素加上此类名，达到高清屏下的 1px 效果。同时还可以根据项目的需求更改 border，实现不同方向的边框。

#### 2.动态 viewport+rem

根据`window.devicePixelRatio = 物理像素 / css像素`公式可以知道当 dpr（设备像素比）变大时，viewport（物理像素）的宽度会变小，反之亦然。

故这里通过检测屏幕的手机市场上流行的 dpr 来缩放整个页面，代码如下：

```js
function dprToScale() {
  var viewport = document.querySelector('meta[name=viewport]')
  //下面是根据设备像素设置viewport
  if (window.devicePixelRatio == 1) {
    viewport.setAttribute(
      'content',
      'width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
    )
  }
  if (window.devicePixelRatio == 2) {
    viewport.setAttribute(
      'content',
      'width=device-width,initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no'
    )
  }
  if (window.devicePixelRatio == 3) {
    viewport.setAttribute(
      'content',
      'width=device-width,initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no'
    )
  }
  var docEl = document.documentElement
  var fontsize = 10 * (docEl.clientWidth / 320) + 'px'
  docEl.style.fontSize = fontsize
}
```

> 引用出处：
>
> [**移动端适配及 1px 问题探究**](https://jelly.jd.com/article/60dc262a78b202017b299257)
>
> [**响应式图像教程**](https://www.ruanyifeng.com/blog/2019/06/responsive-images.html)
