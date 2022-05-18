<template>
  <div class="info">
    <div class="title">
      <i></i>
      <img class="hot" src="../../assets/images/yiqinghot.png" alt="" />
      <p class="more">
        <span
          >查看更多
          <img src="../../assets/images/右箭头.png" alt />
        </span>
      </p>
    </div>
    <ul>
      <li v-for="item in news" :key="item.id">
        <div class="newest">最新</div>
        {{ item.title }}
        <div class="righthot">
          <img src="../../assets/images/hot-right.png" width='100%' />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CovInfo",
  props: ["news"],
};
</script>

<style lang='less' scoped>
.info {
  position: relative;
  padding: 0.2rem;
  margin-top: -0.2rem;
  border-radius: .3rem;
  background-color: #fff;
  .title {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    i {
      display: inline-block;
      width: 0.08rem;
      height: 0.28rem;
      margin-right: 0.2rem;
      background-color: #4169e2;
    }
    .hot {
      width: 1.5rem;
    }
    .more {
      display: flex;
      width: 100%;
      height: 0.47rem;
      align-content: center;
      justify-content: flex-end;
      color: #4169e2;
      font-size: 14px;
      span {
        line-height: 0.47rem;
        img {
          width: 0.2rem;
        }
      }
    }
  }
  ul {
    margin-top: 0.2rem;
    li {
      padding-bottom: 0.36rem;
      .newest {
        display: inline-block;
        margin-right: 0.05rem;
        padding: 0 0.02rem;
        background-color: #f74c31;
        color: #fff;
        border-radius: 0.08rem;
      }
      .righthot {
        //   display: inline-block;
        float: right;
          width: 0.2rem;
          height: 0.4rem;
        //   background-color: pink;
      }
    }
    li:last-child {
      border-bottom: 1px solid #f8f8f8;
    }
  }
}
</style>