<template>
  <div class="fangyiwuzi">
    <router-link to="/">
          <div class="backButton">返回疫情地图</div>
    </router-link>
    <img
      style="display: block"
      src="../../assets/images/fangyiwuzizhinan.png"
      width="100%"
      alt
    />
    <div class="wrapper">
      <van-tabs v-model="active" animated>
        <van-tab v-for="item in imgArr" :key="item.title" :title="item.title">
          <img width="100%" :src="item.img" alt="" />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import img1 from "../../assets/images/jiujing-1.png";
import img2 from "../../assets/images/mask.png";
import img3 from "../../assets/images/xishouye.png";
export default {
  name: "FangyiWuzi",
  data() {
    return {
      active: 0,
      imgArr: [
        {
          img: img1,
          title: "消毒剂",
        },
        {
          img: img2,
          title: "口罩",
        },
        {
          img: img3,
          title: "洗手液",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.fangyiwuzi {
  // background: #3343ff;
  .backButton {
    position: absolute;
    top: 0.12rem;
    left: 0.16rem;
    width: 1.9rem;
    height: 0.54rem;
    font-size: 0.11rem;
    line-height: 0.55rem;
    text-align: center;
    background: rgba(19, 15, 133, 0.5);
    border-radius: 0.24rem;
    color: #fff;
  }
  .wrapper {
    padding: 0 0.3rem;
    background-color: #3343ff;
    .van-tabs__wrap {
      margin-bottom: 0.2rem;
    }
    .van-tab {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>