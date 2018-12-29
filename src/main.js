// 入口文件
import Vue from 'vue'

// 1.1 导入路由的包
import VueRouter from 'vue-router'

// 1.2 安装路由
Vue.use(VueRouter)

// 1.3 导入自己的路由模块
import router from './router.js'

// 1.4 导入初始化css
import './lib/css/base.css'

// 1.5 导入初始化js
import './lib/js/base.js'

// 1.6 按需导入 Mint-UI 中的组件
import { Radio,Loadmore,Spinner  } from 'mint-ui';

Vue.component(Radio.name, Radio);
Vue.component(Loadmore .name, Loadmore);
Vue.component(Spinner.name, Spinner);

// 1.7 导入 axios 数据加载模块
import axios from 'axios'
Vue.prototype.$http = axios

// 1.8 导入 vuex 插件
import Vuex from 'vuex'

Vue.use(Vuex)

// 1.9 导入字体css
import './lib/font/font.css'

// 2.0 导入自己的mint-ui css
import './lib/css/my-mint.css'

// 2.1 导入全局config配置文件

import config from './common/config.js'
Vue.prototype.localConfig = config;

// 2.2 导入公用js方法

import common from './common/common.js'
Vue.prototype.common = common;

// 2.3 导入微信js-sdk
// import wx from 'weixin-js-sdk'

// 2.4 导入全局微信分享js

// import wxshare from './common/wxshare.js';
// Vue.prototype.$wxshare = wxshare;

// 2.5 导入 vconsole 插件
// import Vconsole from 'vconsole';
// let vConsole = new Vconsole();

// 2.6 导入 App 根组件
import app from './App.vue'

var store = new Vuex.Store({
    state: {
        id:null,
        title:'',
        desc:''
    },
    mutations: {
        setInfo(state,msg){
            state.id = msg;
        },
        setShareInfo(state,obj){
            state.title = obj.title;
            state.desc = obj.desc;
        }
    }
})

var vm = new Vue({
    el:'#app',
    render: c => c(app),
    created(){

    // 微信授权
    // this.$http.post(this.localConfig.getUser).then(res => {
    //     // 通过 res.body 拿到服务器返回的成功的数据
    //     this.common.check(res);
    // }).catch(error => {  
    // })

    // 微信分享
    // router.afterEach(( to, from ) => {

    //       let obj = { title: '默认分享文案', desc: '默认分享文案' }
    //       this.$wxshare(obj);

    // })

    },
    methods:{
    },
    router, // 1.3 导入自己的路由模块
    store
})