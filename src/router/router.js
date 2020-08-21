import Vue from 'vue';  //引入vue必须要

/*引入路由并 Vue.use(VueRouter)*/
import VueRouter from 'vue-router';
Vue.use(VueRouter);

/*创建组件，引入组件*/
import Home from '../view/Home.vue';
import List from '../view/List.vue';
import Withdraw from '../view/Withdraw.vue';
import Wlist from '../view/Wlist.vue';
import Code from '../view/Code.vue';
import Pay from '../view/Pay.vue';

/*定义路由*/
 const routes = [
{ path: '/Home', component: Home },
{ path: '/List', component: List },
{ path: '/Withdraw', component: Withdraw },
{ path: '/Wlist', component: Wlist },
{ path: '/Code', component: Code },
{ path: '/Pay', component: Pay },
{ path:  '*' ,  component: Home }  //为空时默认跳转到首页
]

/*实例化 VueRouter*/
const router = new VueRouter({
//mode:'history',  //这种模式有可能会有问题
routes // short for `routes: routes`
})

export default router;  //暴露必须要