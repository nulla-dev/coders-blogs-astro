---
title: Show pictures in blogs
description: A guide on how to display remote and local images in your blog posts, including customization and layout options.
date: 2024-12-21
tags: ["images-markdown-use"]
category: how-to-use-images
---

### Display remote links

```md
![](https://picsum.photos/200)
```

![](https://picsum.photos/200)

### Show Local Pictures

```md
![](/avatar.png)
```

![](/avatar.png)

### Customize Local Images

Use html, set`style="width: 200px;"`

```html
<img src="/infinite-spinner.svg" data-src="/avatar.png" style="width:200px;">
```

<img src="/infinite-spinner.svg" data-src="/avatar.png" style="width:200px;">

### One row, two columns.

```html

<div class="image-cols-2">
  <img src="https://picsum.photos/seed/picsum/200/300">
  <img src="/infinite-spinner.svg" data-src="https://picsum.photos/200/300">
</div>
```

<div class="image-cols-2">
  <img src="https://picsum.photos/seed/picsum/200/300">
  <img src="/infinite-spinner.svg" data-src="https://picsum.photos/200/300" >
</div>


For lazy loading: we need to enter `/infinite-spinner.svg` in `src`, and the real address of the image in `data-stc`. If you don't want to use this feature, just enter the image's real address in `src`.

### One row, three columns

```html

<div class="image-cols-3">
  <img src="/infinite-spinner.svg" data-src="https://picsum.photos/seed/picsum/200/300">
  <img src="/infinite-spinner.svg" data-src="https://picsum.photos/200/300">
  <img src="/infinite-spinner.svg" data-src="https://picsum.photos/200">
</div>
```

<div class="image-cols-3">
  <img src="/infinite-spinner.svg" data-src="https://picsum.photos/seed/picsum/200/300">
  <img src="/infinite-spinner.svg" data-src="https://picsum.photos/200/300" >
  <img src="/infinite-spinner.svg" data-src="https://picsum.photos/200" >
</div>

### One row, four columns

```html

<div class="image-cols-4">
  <img src="/infinite-spinner.svg" data-src="https://picsum.photos/seed/picsum/200/300">
  <img src="/infinite-spinner.svg" data-src="https://picsum.photos/200/300">
  <img src="/infinite-spinner.svg" data-src="https://picsum.photos/200">
  <img src="/infinite-spinner.svg" data-src="https://picsum.photos/seed/picsum/200/300">
</div>
```

<div class="image-cols-4">
  <img class="object-fill" src="/infinite-spinner.svg" data-src="https://picsum.photos/seed/picsum/200/300">
  <img class="object-fill" src="/infinite-spinner.svg" data-src="https://picsum.photos/200/300" >
  <img class="object-fill" src="/infinite-spinner.svg" data-src="https://picsum.photos/200" >
  <img src="/infinite-spinner.svg" data-src="https://picsum.photos/seed/picsum/200/300">
</div>

### Actually, it's all right.

You can actually display it however you want, you just need to know a little bit about TailwindCss.

```html
<div class="image-cols-2">
  <img src="/infinite-spinner.svg" data-src="https://picsum.photos/seed/picsum/200/300">
  <img class="row-span-2" src="/infinite-spinner.svg" data-src="https://share.cirry.cn/images/astro-yi/pexels-jeffer-berrire-9027257.jpg">
  <img src="/infinite-spinner.svg" data-src="https://picsum.photos/200/300">
</div>
```

<div class="image-cols-2">
<img src="/infinite-spinner.svg" class="object-fill" data-src="https://picsum.photos/seed/picsum/200/300">
<img class="row-span-2 object-fill" src="/infinite-spinner.svg" data-src="https://share.cirry.cn/images/astro-yi/pexels-photo-8907866.jpeg">
<img src="/infinite-spinner.svg" class="object-fill" data-src="https://picsum.photos/200">
</div>

### Remember

The theme provides three simple style classes that you can use directly.

+ One row and two columns: `class="image-cols-2"`.
+ one row and three columns: `class="image-cols-3"`.
+ one row and four columns: `class="image-cols-4"`.

If you want a more complex display, check out TailwindCss.