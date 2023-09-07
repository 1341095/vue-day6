<!-- 单页应用程序SPA(single page application)：所有功能在一个html页面上实现，切换也在一个页面上的不同内容 -->
<!-- 多页应用程序：切换就是换不同的页面 -->
<!-- 单页多页最大的区别：单页是按需更新，只加载需要的页面 -->
<!-- 要按需更新就得明确访问路径和组件的对应关系：路由 -->

<!-- 插件vuerouter：修改地址栏路径时，切换显示匹配的组件 -->
<!-- 在main.js中： 1.下载3.6.5  2.引入  3.安装注册  4.创建路由对象  5.将路由对象注入到new.vue中，建立关联 -->
<!-- 两步核心：1.创建需要的组件(views目录)，配置路由规则  2.配置导航，配置路由出口(路径匹配的组件显示的位置) -->
<template>
  <div>
    <!-- <div class="top">
      组件在上
      <router-view></router-view>
    </div> -->
    <div class="footer_wrap">
      <!-- 匹配路径 -->
      <a href="#/find">发现音乐</a>
      <a href="#/my">我的音乐</a>
      <a href="#/friend">朋友</a>
    </div>
    <div class="top">
      <!-- 路由出口 → 匹配的组件所展示的位置 -->
      <!-- router-view是专门的组件，放在哪匹配的组件就会显示在哪，例如导航在上要换的内容在下，就把router-view放在下面 -->
      <router-view></router-view>
    </div>
  </div>
</template>
<!-- 为什么路由相关的组件要放在views目录呢？ 组件分类更易维护：.vue文件分为两类：页面组件&复用组件 -->
<!-- 页面相关，配合路由使用的放在scr/views中 ， 复用相关，展示数据的放在src/components中 -->

<script>
export default {};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.footer_wrap {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}
</style>