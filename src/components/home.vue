<template>
    <div class="index-page">
      <div class="top cfix">
        <div class="rank" @click="rank"></div>
      </div>
      <router-link :to="{path: './question'}" tag="button" class="begin-btn"></router-link>
      <div class="footer"></div>
    </div>
</template>
<script>
    export default {
        name: 'home',
        data(){
          return {}
        },
        created(){
          
              // let obj = { title: '自定义分享文案', desc: '自定义分享文案' }
              // this.$wxshare(obj);
              
        },
        methods:{
          rank(){     
            this.$router.push('rankingList')
          }
        }
    }
</script>
<style lang="less" scoped>
  .index-page{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #386bd2;
    background-size: cover;
    .top{
      .rank{
          width: 2.02rem;
          height: 0.63rem;
          background: url('../lib/images/result/rankingList.png') 100% 100% no-repeat;
          background-size: cover;
          float: right;    
          margin: 0.2rem 0.45rem;
      }
    }
    .begin-btn{
      z-index: 1;
      width: 2.2rem;
      height: 2.3rem;
      background: url('../lib/images/home/anniu.png') 100% 100% no-repeat;
      background-size: cover;
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
    }
  }
</style>