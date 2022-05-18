import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue"
// 异步方式加载
const Home = ()=>import('../views/Home.vue')
import AcidTest from '../views/AcidTest/index.vue'
import Header from "../views/Header/Header.vue"
import FangyiWuzi from '../views/FangyiWuzi'
const Citys = () =>import('../views/Citys')
const VaccinationPolicy = ()=>import('../views/VaccinationPolicy')
const ChangeCity = ()=>import('../views/CurrentCity/ChangeCity')
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'Home',
        component:Home,
        meta:{show:true},
    },
    // 核酸检测
    {
        path:'/acidtest',
        name:'AcidTest',
        component:AcidTest,
    },
    // 防疫物资
    {
        path:'/fangyiwuzi',
        name:'FangyiWuzi',
        component:FangyiWuzi
    },
    // 防疫政策
    {
        path:'/policy',
        name:'VaccinationPolicy',
        component:VaccinationPolicy
    },
    {
        path:'/header',
        name:'Header',
        component:Header,
        meta:{show:true},
    },
    {
        path:'/citys/:cityname',
        name:'Citys',
        component:Citys,
        props:true,
    },
    {
        path:'/changecity',
        name:'ChangeCity',
        component:ChangeCity
    },
    // 重定向
    {
        path:'*',
        redirect:'/home',
    }
    
    
]
export default new VueRouter({
    routes,
})