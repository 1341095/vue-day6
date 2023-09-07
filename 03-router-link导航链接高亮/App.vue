<!-- 声明式导航-导航链接：router-link -->
<template>
  <div>
    <div class="footer_wrap">
      <!-- 实现更简单的导航高亮效果，vue-router提供了一个全局组件router-link来取代a标签 -->
      <!-- to属性必须指定，to可省略#，本质还是a标签 -->
      <!-- router-link会自动填加高亮类名，可以直接设置高亮样式 -->
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/friend">朋友</router-link>
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

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
/* 高亮颜色 */
.footer_wrap a.router-link-active {
  background-color: purple;  
}

.footer_wrap a:hover {
  background-color: #555;
}
</style>