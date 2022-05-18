<template>
  <div class="mainInfo">
    <div class="box">
      <p class="title">截至北京时间</p>
      <ul class="wrap">
        <li>
          <div class="createCount">
            较昨日
            <b>{{ ComparedYesterday(covDesc.currentConfirmedIncr) }}</b>
          </div>
          <strong>{{ covDesc.currentConfirmedCount }}</strong>
          <span>现存确诊</span>
        </li>
        <li>
          <div class="createCount">
            较昨日
            <b>{{ ComparedYesterday(covDesc.yesterdaySuspectedCountIncr) }}</b>
          </div>
          <strong>{{ covDesc.suspectedCount }}</strong>
          <span>境外输入</span>
        </li>
        <li>
          <div class="createCount">
            较昨日
            <b>{{ ComparedYesterday(covDesc.seriousIncr) }}</b>
          </div>
          <strong>{{ covDesc.seriousCount }}</strong>
          <span>现存无症状</span>
        </li>
        <li>
          <div class="createCount">
            较昨日
            <b>{{ ComparedYesterday(covDesc.confirmedIncr) }}</b>
          </div>
          <strong>{{ covDesc.confirmedCount }}</strong>
          <span>累计确诊</span>
        </li>
        <li>
          <div class="createCount">
            较昨日
            <b>{{ ComparedYesterday(covDesc.deadIncr) }}</b>
          </div>
          <strong>{{ covDesc.deadCount }}</strong>
          <span>累计死亡</span>
        </li>
        <li>
          <div class="createCount">
            较昨日
            <b>{{ ComparedYesterday(covDesc.curedIncr) }}</b>
          </div>
          <strong>{{ covDesc.curedCount }}</strong>
          <span>累计治愈</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainInfo",
  props: ["covDesc"],
  computed: {
    ComparedYesterday(value) {
      return (value) => {
        if(value>0){
          return '+'+value;
        }
        if(value === 0){
          return '+0';
        }
        return value;
      };
    },
  },
  mounted() {
    // setTimeout(()=>{

    // },50)
    console.log(this.date());
    // console.log(this.covDesc);
  },
  methods:{
    date(){
      let now = new Date();
      return now.toLocaleDateString().replace('/','-')
    }
  }
};
</script>

<style lang="less" scoped>
.mainInfo {
  background-color: #f7f7f7;
  padding-top: 0.2rem;
  .box {
    background-color: #fff;
    // height: 3rem;
    border-radius: 0.2rem;
    padding: 0.3rem;
    .title {
      color: #666;
      font-size: 12px;
      margin-bottom: 0.15rem;
    }
    // ul
    .wrap {
      display: flex;
      flex-wrap: wrap;
      border: 0.01rem solid #ebebeb;
      border-radius: 0.08rem;
      box-shadow: 0 0.04rem 0.12rem 0 rgb(0 0 0 / 5%);
      padding-top: 0.1rem;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 33.333%;
        .createCount {
          font-size: 12px;
          b {
            font-weight: 400;
          }
        }
        strong {
          font-size: 20px;
        }
        span {
          font-size: 12px;
          font-weight: 700;
        }
      }
      li:nth-child(n + 4) {
        margin-top: 0.3rem;
        margin-bottom: 0.2rem;
      }
    }
  }
}
// 给每个strong赋颜色
@colors: #f74c31, #f78207, #a25a4e, #ae212c, #5d7092, #28b7a3;
@len: length(@colors);
.Loop(@index) when(@index<@len+1) {
  .wrap li:nth-child(@{index}) strong,
  .wrap li:nth-child(@{index}) .createCount b {
    color: extract(@colors, @index);
  }
  .Loop(@index+1);
}
.Loop(0);
</style>