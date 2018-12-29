import VueRouter from 'vue-router'

// 导入对应的路由组件
import home from './components/home.vue'
import question from './components/question.vue'
import rankingList from './components/rankingList.vue'
import result from './components/result.vue'
import share from './components/share.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [ // 配置路由规则
    { 
      path: '/',
      redirect: '/home'
    },
    { 
      path: '/home', 
      name: 'home',
      component: home
    }, 
    { 
      path: '/question', 
      name: 'question',
      component: question
    },  
    { 
      path: '/rankingList', 
      name: 'rankingList',
      component: rankingList
    },  
    { 
      path: '/result', 
      name: 'result',
      component: result
    },
    { 
      path: '/share', 
      name: 'share',
      component: share
    }
  ]
})

// 把路由对象暴露出去
export default router