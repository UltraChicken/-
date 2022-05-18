<template>
  <header class="header">
    <div class="up-title">四叶草健康</div>
    <h3 class="middle-title">新型冠状病毒肺炎</h3>
    <h1 class="bottom-title">疫情实时大数据报告</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang='less'>
.header {
  color: #fff;
  position: relative;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  padding: 0;
  // height: 2.5rem;
  background-color: #10aeb5;
  background-image: url("../../assets/images/yiqing-head.jpg");
  .up-title {
    position: absolute;
    top: 20px;
    left: 0;
    width: 100%;
    height: 28px;
  }
  .middle-title {
    display: inline-block;
    margin-top: 71px;
    margin-left: 17px;
    font-size: .3rem;
    color: #c4faff;
    letter-spacing: 0.01rem;
  }
  .bottom-title {
    position: relative;
    // margin-top: 2px;
    padding-left: 17px;
    font-size: 0.5rem;
    height: 1.5rem;
    max-width: 100%;
    line-height: 1rem;
    white-space: nowrap;
    font-weight: 700;
    color:  #fff;
    // -webkit-mask-image: -webkit-gradient(linear,0 0,0 bottom,from(rgba(0,0,0,0)),to(#afdade));
  }
}
</style>