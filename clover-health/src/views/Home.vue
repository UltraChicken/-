<template>
  <div class="home"> 
    <Header />
    <CurrentCity/>
    <CovInfo :news="news"/>
    <Func />
    <MainInfo :covDesc="covDesc"/>
    <ChinaMap/>
    <WorldMap/>
    <!-- 轮播图 -->
    <VueSwiper />
  </div>
</template>

<script>

import CovInfo from "./CovInfo/CovInfo.vue";
import Func from './Func'
import api from '../api/index'
import CurrentCity from './CurrentCity'
import MainInfo from "../components/MainInfo"
import ChinaMap from './VueEcharts/ChinaMap.vue'
import WorldMap from './VueEcharts/WorldMap.vue'
import Header from './Header/Header.vue';
import VueSwiper from '../components/VueSwiper'
export default {
  name: "Home",
  data() {
      return {
          covDesc:{},
          news:[]
      }
  },
  components: { CovInfo ,Func, MainInfo,ChinaMap, Header,WorldMap,VueSwiper,CurrentCity},
  created() {
      // 请求病毒接口
      api.getCovInfo().then(res=>{
          let data = res.data.newslist[0].desc;
          // console.log(data);
          this.covDesc = data;
          this.news = res.data.newslist[0].news;
      })
  },
  mounted(){
      

    this.$store.dispatch('getCurrentCity');
    
  }
};
</script>
