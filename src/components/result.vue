<template>
    <div class="result-page">
        <div class="title">
            答题结果
        </div>
        <div class="score">
            <p>答对：{{right}}题</p>
            <p>用时：{{time}}秒</p>
            <p>积分：{{integral}}</p>
            <p>排名：{{ranking}}</p>
        </div>      
        <div class="comment" v-html="comment">
        </div>
        <div class="btns">
            <div class="renew" @click="renew"></div>
            <div class="share" @click="share">
                <div class="shade" v-if="show"></div>
            </div>
        </div>
        <p class="prompt">分享答题结果，查看排行榜</p>
    </div>
</template>
<script>
    export default {
        name: 'result',
        data(){
          return {
              right:null,
              time:null,
              integral:null,
              ranking:null,
              comment:null,
              show:false
          }
        },
        created(){ 
        this.$http({
        method:'get',
        url:this.localConfig.result
        }).then((res)=> {
            this.right = res.data.results.right_count;
            this.time = res.data.results.time;
            this.integral = res.data.results.score;
            this.ranking = res.data.results.ranking;
            this.comment = res.data.results.comment;

            let obj = { title: '我答对了'+this.right+'道题，你也来试试看', link: this.localConfig.url+'?id='+this.$store.state.id+'#/share', desc: this.comment };
            this.$wxshare(obj);

        }).catch((error)=> {
          console.log(error);
        }); 

        },
        methods:{
            renew(){
                window.location.href = this.localConfig.url+"#/home"
            },
            share(){
                this.show = !this.show;
            }
        }
    }
</script>
<style lang="less" scoped>
  .result-page{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #386bd2;
    background-size: cover;    
    overflow-y: scroll;
    .title{    
        width: 100%;
        padding: 0.64rem 0;
        text-align: center;
        font: 24px 'PingFangSC-Semibold';
        color: #fff600;
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
    .btns{
        width: 94%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .renew{
            width: 3.5rem;
            height: 1.34rem;
            background: url('../lib/images/result/Button_l.png') 100% 100% no-repeat;
            background-size: cover;
        }
        .share{
            width: 3.5rem;
            height: 1.34rem;
            background: url('../lib/images/result/Button_r.png') 100% 100% no-repeat;
            background-size: cover;
            .shade{
                width: 100%;
                height: 100%;
                z-index: 99999;
                position: fixed;
                left: 0px;
                top: 0px;
                background: url('../lib/images/result/shareguide.png') right top / 3.12rem 2.68rem no-repeat rgba(0, 0, 0, 0.8);
            }
        }
    }
    .prompt{
        font: 18px 'PingFangSC-Regular';
        color: #fff600;
        text-align: center;    
        margin-bottom: 2.26rem;
    }
  }
</style>