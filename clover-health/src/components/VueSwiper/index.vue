<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item,index) in Arr" :key="index">
        <img
          :src="item.image"
          alt=""
          width="100%"
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <ul class="list">
      <li
        v-for="(item, index) in Arr"
        :key="item.title"
        :class="{ active: index === num }"
        @click="changeSwiper(index)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../../api'
export default {
  name: "VueSwiper",
  data() {
    let that = this;
    return {
     
      num: 0,
      // arr: [1, 2, 3, 4, 5],
      Arr:[],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: true,
        on:{
          slideChangeTransitionStart:function(){
            if(this.activeIndex === that.Arr.length+1){
              that.num = 0;
            }else{
              that.num = this.activeIndex-1;
            }
              
          }
        }
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false);
    api.getSwiperBanner().then(res=>{
      console.log('请求成功',res.data);
      let arr = res.data.result;
      arr.forEach((el)=>{
        let obj = {};
        obj.image = el.image;
        obj.title = el.title;
        this.Arr.push(obj);
      })
    }).catch(error=>{
      console.log('请求失败',error.message);
    })
  },
  methods: {
    changeSwiper(index) {
      this.num = index;
      this.swiper.slideTo(index+1,400,true);
    },
  },
};
</script>

<style lang='less' scoped>
.list {
  display: flex;
  li {
    flex: 1;
    padding: 0.1rem;
    font-size: 0.24rem;
    margin: 0.1rem;
    line-height: 0.32rem;
    background-color: #eee;
    color: #666;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  .active {
    background: rgb(80, 116, 173);
    color: #fff;
  }
}
</style>