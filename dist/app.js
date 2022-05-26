var scripts = [
  "https://fastly.jsdelivr.net/gh/wanguo18/gpan/dist/js/app.da7f5f3f.js",
  "https://fastly.jsdelivr.net/gh/wanguo18/gpan/dist/js/chunk-vendors.3c185c97.js",
];
var cdnjs = [
  "https://unpkg.zhimg.com/vue@2.6.11/dist/vue.min.js",
  "https://unpkg.zhimg.com/vue-i18n@8.17.3/dist/vue-i18n.min.js",
  "https://unpkg.zhimg.com/vue-router@3.1.6/dist/vue-router.min.js",
  "https://unpkg.zhimg.com/vuex@3.4.0/dist/vuex.js",
  "https://unpkg.zhimg.com/axios@0.19.2/dist/axios.min.js",
  "https://unpkg.zhimg.com/element-ui@2.13.1/lib/index.js",
  "https://unpkg.zhimg.com/lodash@4.17.15/lodash.min.js",
  "https://fastly.jsdelivr.net/npm/js-cookie@2.2.1/src/js.cookie.min.js",
  "https://fastly.jsdelivr.net/npm/lowdb@1.0.0/dist/low.min.js",
  "https://fastly.jsdelivr.net/npm/lowdb@1.0.0/dist/LocalStorage.min.js",
  "https://at.alicdn.com/t/font_1760192_8add3xcxs4u.js",
];
cdnjs.forEach((item) => {
  document.write('<script src="' + item + '"></script>');
});
scripts.forEach((item) => {
  document.write('<script src="' + item + '"></script>');
});
