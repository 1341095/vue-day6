<!-- 声明式导航router-link-跳转传参：在点击导航链接跳转的同时把参数携带跳过去 -->
<!-- 两种语法：查询参数传参，动态路由传参 -->
<!-- 查询参数传参： 1. to="/path?参数名=值"  2.接受传来的值：$route.query.参数名 -->
<template>
  <div id="app">
    <div class="link">
      <router-link to="/home">首页</router-link>
      <router-link to="/search">搜索页</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.link {
  height: 50px;
  line-height: 50px;
  background-color: #495150;
  display: flex;
  margin: -8px -8px 0 -8px;
  margin-bottom: 50px;
}
.link a {
  display: block;
  text-decoration: none;
  background-color: #ad2a26;
  width: 100px;
  text-align: center;
  margin-right: 5px;
  color: #fff;
  border-radius: 5px;
}
</style>

