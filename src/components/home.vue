<template>
    <div class="index-page">
      <div class="top cfix">
        <div class="title"></div>
        <div class="rank" @click="rank"></div>
      </div>
      <div class="content">
        <p>这是一个不平凡的时代</p>
        <p>回首即将过去的2018</p>
        <p>总有些故事感动着你</p>
        <p>总有些瞬间难以忘怀</p>
        <p>也总有着遗憾和告别</p>
        <p>跟随北青网</p>
        <p>穿越时空</p>
        <p>回望我们的2018</p>
        <p>用记忆，敬过往，敬明天</p>
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
    height: auto;
    background: url('../lib/images/home/background.png') center top no-repeat;
    background-size: cover;
    .top{
      .title{
        width: 6.6rem;
        height: 4.3rem;
        background: url('../lib/images/home/dabiaoti.png') 100% 100% no-repeat;
        background-size: cover;
        margin: 0 auto;
      }
      .rank{
          width: 2.02rem;
          height: 0.63rem;
          background: url('../lib/images/result/rankingList.png') 100% 100% no-repeat;
          background-size: cover;
          float: right;    
          margin: 0.2rem 0.45rem;
      }
    }
    .content{
      width: 6.6rem;
      height: auto;
      margin: 0 auto;
      padding: 0.34rem 0 2.3rem;
      border-radius: 25px;
      background-color: #fff;
      -webkit-box-shadow: 0px 0px 20px #ccc;
      box-shadow: 0px 0px 20px #ccc;
      text-align: center;
      p{
        font: 18px 'PingFangSC-Regular';
        color: #1b6fce;
        line-height: 20px;
        padding: 0.2rem 0.2rem;
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
    .footer{
      width: 100%;
      height: 1.34rem;
      background: url('../lib/images/home/dibuzs.png') 100% 100% no-repeat;
      background-size: cover;
      position: fixed;
      left: 0;
      bottom: 0;
    }
  }
</style>