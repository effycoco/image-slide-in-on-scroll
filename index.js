// wihout debounce function checkSlide will be invoked all the time we scroll
// effect of debounce function: still run debounce all the time we scroll,
// but actually only run the function checkSlide once every 20 milliseconds
// so it will give you a better performance
// debounce函数的作用是缓冲，不加该函数会在滚动的过程中唤起checkSlide无数次，加了之后会有一个停顿，每20毫秒才唤起一次
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
const sliderImages = document.querySelectorAll(".slide-in");
function checkSlide(e) {
  // console.count(e);
  // console.log(window.scrollY);
  // 图片高度露出一半时让图片滑进
  sliderImages.forEach((image) => {
    // window.scrollY 文档在垂直方向已滚动的像素值
    // window.innerHeight 视窗高度
    // 相加表示网页露出部分最底部的位置
    const currentBottom = window.scrollY + window.innerHeight;
    // image.offsetTop表示图片顶部到文档顶部的距离
    // imageBottom表示图片底部到文档顶部的距离
    const imageBottom = image.offsetTop + image.height;
    const isHalfShown = currentBottom > image.offsetTop + image.height / 2; // 判断图片是否已露出一半
    const isNotScrolledPast = window.scrollY < imageBottom; // 当为否时，图片在视窗上面，应隐藏
    if (isHalfShown && isNotScrolledPast) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", debounce(checkSlide));
