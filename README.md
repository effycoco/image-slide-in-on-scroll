# Slide In on Scroll

A project from [JavaScript 30 - 13](https://github.com/wesbos/JavaScript30)

This project is to learn how to build a slide in on scroll, that is, when you slide down, the images will slide themselves in from the left or from the right, and you can do whatever other animations you like to do.

If you want these images to slide in only in the first scroll, and never slide out or hidden anymore, you only need make following change:

如果想改成仅在第一次滚动页面时图片有滑进效果，此后图片固定，只需将

```js
if (isHalfShown && isNotScrolledPast) {
  image.classList.add("active");
} else {
  image.classList.remove("active");
}
```

改为

```js
if (isHalfShown) image.classList.add("active");
```
