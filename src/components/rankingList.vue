<template>
    <div id="ranking-page">
        <div class="title">排行榜</div>
        <div class="ranking-list">
        <div class="list-tag">
            <span class="item">排名</span>
            <span class="item userinfo">头像昵称</span>
            <span class="item">积分</span>
        </div>
        <div class="list-con" ref="wrapper">
            <mt-spinner class="refresh" type="double-bounce" color="rgb(38, 162, 255)" v-show="refresh"></mt-spinner>
            <mt-loadmore :top-method="loadTop" topPullText="下拉更新排行" topLoadingText="" :bottom-method="loadBottom" bottomPullText="上拉加载更多..." bottomLoadingText="" :bottom-all-loaded="allLoaded"  :auto-fill="false" ref="loadmore">
                <ul>
                    <li v-for="(item,key) in rankingData" :class="{active:item.uuid == uuid}">
                        <span class="top-num item first" v-if="key < 1" v-text="key + 1"></span>
                        <span class="top-num item second" v-else-if="key < 2" v-text="key + 1"></span>
                        <span class="top-num item third" v-else-if="key < 3" v-text="key + 1"></span>
                        <span class="top-num item" v-else v-text="key + 1"></span>
                        <img class="head item" :src="item.head" alt="">
                        <span class="name item" v-text="item.name"> </span>
                        <span class="score item"><i v-text="item.score"></i></span>    
                    </li>
                </ul>
            </mt-loadmore>
            <mt-spinner class="loading" type="double-bounce" color="rgb(38, 162, 255)" v-show="loading"></mt-spinner>
        </div>
        
        <div class="my-score" v-if="myScore.ishave">
            <span class="top-num item">{{myScore.rank}}</span>
            <img class="head item" :src="myScore.head" alt="">
            <span class="name item">{{myScore.name}}</span>
            <span class="score item"><i>{{myScore.score}}</i></span>    
        </div>

        <div class="try" v-if="!myScore.ishave" @click="tryIt"></div>

        <div class="renew" v-if="myScore.ishave" @click="renew"></div>

        </div>
    </div>
</template>

<script>

  export default {
    name: 'ranking',  
    data () {
      return {
          rankingData:[],
          totalGetCount:null,
          myScore:[],
          uuid:null,
          pageNum:null,
          loading:false,
          refresh:false,
          allLoaded:false
      }
    },
    created(){
        this.getData();
    },
    methods: {    
      getData(){
        // 获取答题结果
        this.$http({
            method:'get',
            url:this.localConfig.ranking
        }).then((res)=> {
                this.uuid = res.data.results.uuid;
                this.rankingData = this.rankingData.concat(res.data.results.list);
                this.totalGetCount = res.data.results.page;
                this.myScore = res.data.results.my;
            }).catch((error)=> {
              console.log(error);
            });
      },    
      sortFunc (keyName) {
        return (a,b) => {
          let value1 = a[keyName];
          let value2 = b[keyName];
          return value2 - value1;
        }
      },
      loadTop() {
          // 加载更多数据
            this.refresh = true;
          setTimeout(() => {
            this.rankingData = [];
            this.getData();
            this.refresh = false;
            this.allLoaded = false;
          }, 1500);
          this.$refs.loadmore.onTopLoaded();
      },
      loadBottom(){
            // 获取答题结果
                this.allLoaded = true;
                this.loading = true;
                setTimeout(()=>{
                this.pageNum += 1;
                this.getData();
                this.loading = false;
                if (this.pageNum == this.totalGetCount) {
                    this.allLoaded = true;
                }else{
                    this.allLoaded = false;
                }

                },1500)  

                this.$refs.loadmore.onBottomLoaded();
                
      },
      tryIt(){
          window.location.href = this.localConfig.url+"#/home";
      },
      renew(){
          window.location.href = this.localConfig.url+"#/home";
      }
    }
  }
</script>

<style lang="less" scoped>
    #ranking-page{
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
            padding: 0.42rem 0;
            text-align: center;
            font: 24px 'PingFangSC-Semibold';
            color: #fff600;
        }
        .ranking-list{
            width: 88%;
            margin: 0 auto;
            .list-tag{    
                width: 100%;
                display: flex;
                background-color: #d2e5fb;
                .item{
                font: 15px 'PingFangSC-Regular';
                color: #1b6fce;
                line-height: 0.56rem;    
                display: inline-block;
                text-align: center;
                width: 1.33rem;
                }
                .userinfo{
                    flex: 1; 
                    text-align: left;   
                    margin-left: 0.32rem;
                }
            }

            .list-con{    
                width: 100%;
                height: 8.38rem;
                overflow: scroll;
                background-color: #fff;
                .refresh{
                    display: flex;
                    justify-content: center;    
                    padding: 0.3rem 0px;
                }
                    ul{
                        li{
                            display: flex;
                            align-items: center;
                            height: 1.2rem;
                            line-height: 1.2rem;
                            border-bottom: 1px solid #d2e5fb;
                            box-shadow: 0px 1px 10px rgba(27, 108, 200, 0.46);
                            &.active{
                                background-color: #d2e5fb;
                            } 
                        .item{
                            width: 1.133rem;
                            text-align: center;
                            color: #1b6fce;
                            &.first{
                                color: #fb3c3c;
                            }
                            &.second{
                                color: #ff7e00;
                            }
                            &.third{
                                color: #ffb400;
                            }
                        }
                        .top-num{
                            font: 20px 'PingFangSC-Semibold';
                            margin-right: 0.25rem;
                        }
                        .name{
                            flex-grow:2;
                            padding: 0 0.5rem;
                            text-align: left;
                        }
                        .head{
                            width: 0.62rem;
                            height: 0.62rem;
                        }
                        .score{
                            font: 20px 'number';
                        }
                        }
                    }
                    .loading{
                        display: flex;
                        justify-content: center;    
                        padding: 0.3rem 0px;
                    }
                } 
            }

            .my-score{
                display: flex;
                height: 1.2rem;
                line-height: 1.2rem;
                align-items: center;
                margin: 0.6rem 0;
                background-color: #fff;
                        .item{
                            width: 1.133rem;
                            text-align: center;
                            color: #1b6fce;
                            &.first{
                                color: #fb3c3c;
                            }
                            &.second{
                                color: #ff7e00;
                            }
                            &.third{
                                color: #ffb400;
                            }
                        }
                        .top-num{
                            font: 20px 'PingFangSC-Semibold';
                            margin-right: 0.25rem;
                        }
                        .name{
                            flex-grow:2;
                            padding: 0 0.5rem;
                            text-align: left;
                        }
                        .head{
                            width: 0.62rem;
                            height: 0.62rem;
                        }
                        .score{
                            font: 20px 'number';
                        }
            }

            .try{
                width: 3.5rem;
                height: 1.34rem;
                margin: 0.58rem auto;
                background: url('../lib/images/result/tryit.png') 100% 100% no-repeat;
                background-size: cover;
            }

            .renew{
                width: 3.5rem;
                height: 1.34rem;
                margin: 0.58rem auto;
                background: url('../lib/images/result/Button_l.png') 100% 100% no-repeat;
                background-size: cover;
            }
        }
</style>
