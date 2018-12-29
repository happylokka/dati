<template>
<div class="question-box">
   <div class="item-con">
      <div class="num">{{itemNum + 1}}<span>/</span>{{ problems.length}}</div>
      <div class="content">
            <div class="title">{{ problemTitle }}</div>
            <div class="question_list">
                <mt-radio
                  v-model="value"
                  :options=options>
                </mt-radio>
            </div>
      </div>
      <div class="time">
          倒计时：<span class="item">{{currentTime}}</span>
      </div>
      <div :class="['btns',btn]" @click="nextItem"></div>
   </div>
</div>
</template>

<script>
  import { Toast,MessageBox } from 'mint-ui';
  let timer;
export default {
  name: 'question',
  data(){
    return{
        problems:[],
        currentTime:null,
        subData:null,
        itemNum:0,
        value:null,
        questionId:null,
        problemTitle:null,
        options:[],
        btn:'xyt'
    }
  },
  created(){
    this.$http({
            method:'get',
            url:this.localConfig.question,
        }).then((res)=> {
      this.problems = res.data.results.list;
      this.$store.commit('setInfo',res.data.results.info.question_id);
      this.setData();
      this.getTime();
    }).catch((error)=> {
      console.log(error);
    });

  },
  methods:{
      setData(){
        this.subData = this.problems[this.itemNum];
        this.questionId = this.subData.id;
        this.problemTitle = this.subData.title;
        this.options = this.subData.answer;
      },
      getTime(){
        this.$http({
        method:'get',
        url:this.localConfig.time,
        }).then((res)=> {
            this.currentTime = res.data.results.time;
            
            timer = setInterval(() => {
              if(this.currentTime === 0){
                clearInterval(timer);
                MessageBox({
                    title:'温馨提示',
                    message:'本题答题时间到',
                    closeOnClickModal:false,
                    confirmButtonText:''
                }).then(action => {
                    this.value = '0';
                    this.nextItem();
                });
              }else{
                  this.currentTime--;
              }
            }, 1000)
        }).catch((error)=> {
          console.log(error);
        }); 
      },
      nextItem(){ 
            if(this.value){    
            clearInterval(timer);
            // 提交用户选项 ×××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
            //   this.$http({
            //       method: 'post',
            //       url: '',
            //     }).then((res)=> {
            //     }).catch((error)=> {
            //       console.log(error);
            //     });
            this.value = '';
            // 交卷
            if(this.itemNum === this.problems.length-1){
                clearInterval(timer);
                this.currentTime = "0";
                this.$router.push({path:'/result'});
            }else{
                this.itemNum += 1;
                this.setData();
                this.getTime(); 
            }

        
        if(this.itemNum < this.problems.length-1){
            return false;
        }else{
            this.btn = 'tj';
        }

        }else{
            Toast('请选择选项');
        }
      }
  }
}
</script>

<style lang="less" scoped>
.question-box{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #386bd2;
    background-size: cover;
    overflow-y: scroll;
    .item-con{
        .num{
            width: 100%;
            padding: 0.74rem 0;
            text-align: center;
            font: 24px 'PingFangSC-Semibold';
            color: #fff;
            span{
                font-size: 29px;
            }
        }
        .content{
            width: 88%;
            margin: 0 auto;
            .title{
                font: 20px 'PingFangSC-Semibold';
                color: #fff;
                margin-bottom: 0.58rem;
            }
        }
        .time{
            text-align: center;
            font: 15px 'PingFangSC-Regular';
            color: #fff;
            margin-top: 0.78rem;
        }
        .btns{
            width: 3.38rem;
            height: 1.18rem;    
            margin: 0.78rem auto;
            &.xyt{
                background: url('../lib/images/question/xyt_an.png') 100% 100% no-repeat;
                background-size: cover;
            }
            &.tj{
                background: url('../lib/images/question/tj_an.png') 100% 100% no-repeat;
                background-size: cover;
            }
        }
    }
}

</style>
