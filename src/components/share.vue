<template>
    <div class="share-page">
        <div class="top cfix">
            <div class="rank" @click="rank"></div>
            <div class="title">答题结果</div>
        </div>
        <div class="score">
            <p>答对：{{right}}题</p>
            <p>用时：{{time}}秒</p>
            <p>积分：{{integral}}</p>
            <p>排名：{{ranking}}</p>
        </div>      
        <div class="comment" v-html="comment">
        </div>
        <div class="try" @click="tryIt"></div>
        <img src="../lib/images/result/Bottom-information.png" alt="" class="footer">
    </div>
</template>
<script>
    export default {
        name: 'share',
        data(){
          return {
              right:null,
              time:null,
              integral:null,
              ranking:null,
              comment:null
          }
        },
        methods:{
            tryIt(){
                window.location.href = this.localConfig.url+"#/home"
            },
            rank(){     
              window.location.href = this.localConfig.url+"#/rankingList"
            }
        },
        created(){
        let queationId = window.location.search.split("?id=")[1] || 0;
        this.$http.get(this.localConfig.share).then((res)=> {
            this.right = res.data.results.right_count;
            this.time = res.data.results.time;
            this.integral = res.data.results.score;
            this.ranking = res.data.results.ranking;
            this.comment = res.data.results.comment;

        }).catch((error)=> {
          console.log(error);
        }); 
        }
    }
</script>
<style lang="less" scoped>
  .share-page{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../lib/images/result/jg_bj.png') 100% 100% no-repeat;
    background-size: cover;
    overflow-y: scroll;
    .top{
        .rank{
            width: 2.02rem;
            height: 0.63rem;
            background: url('../lib/images/result/rankingList.png') 100% 100% no-repeat;
            background-size: cover;
            float: right;    
            margin: 0.5rem 0.45rem;
        }
        .title{        
            display: inline-block;
            width: 100%;
            padding-bottom: 0.64rem;
            text-align: center;
            font: 24px 'PingFangSC-Semibold';
            color: #fff600;
        }
    }
    .score{
        width: 68%;
        height: auto;
        margin: 0 auto;
        p{
            font: 18px 'PingFangSC-Regular';
            color: #fff;
            margin-bottom: 0.32rem;
        }
    }
    .comment{
        width: 76%;
        height: auto;
        margin: 0 auto;    
        padding: 0.16rem 0 0.16rem;
        font: 24px 'PingFangSC-Semibold';
        color: #fff600;
    }
    .try{
        width: 3.5rem;
        height: 1.34rem;
        margin: 0 auto;
        background: url('../lib/images/result/tryit.png') 100% 100% no-repeat;
        background-size: cover;    
        margin-bottom: 2.26rem;
    }
    .footer{
      width: 100%;
      height: 2.26rem;
      position: fixed;
      left:0;
      bottom: 0;
    }
  }
</style>