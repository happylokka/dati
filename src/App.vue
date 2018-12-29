<template>
  <div class="container">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


<style lang="less">
  .container{
    max-width: 7.68rem;
    background: #fff;
    margin: 0 auto;
  }
  .red-bg{
    background: #eb6464;
    box-shadow: 0 2px 2px 0 #d15050;
  }
  .yellow-bg{
    background: #faab00;
    box-shadow: 0 2px 2px 0 #c68d11;
  }
  .green-bg{
    background: #8dd817;
    box-shadow: 0 2px 2px 0 #6eac0c;
  }
</style>
