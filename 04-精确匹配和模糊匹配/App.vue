<!-- router-link自动给当前导航添加了两个高亮类名，一个是模糊匹配：可以匹配到以某某开头的，一个是精确匹配：只能匹配完全一致的 -->
<template>
  <div>
    <div class="footer_wrap">
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
/* 
  router-link-active 模糊匹配(使用更多)
  to="/find"  =>  地址栏 /find   /find/one   /find/two  ...

  router-link-exact-active 精确匹配
  to="/find"  =>  地址栏 /find  
*/
.footer_wrap a.router-link-active {
  background-color: purple;
}
.footer_wrap a:hover {
  background-color: #555;
}
</style>