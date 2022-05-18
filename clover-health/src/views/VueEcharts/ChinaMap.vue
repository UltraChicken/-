<template>
  <div class="China">
    <div class="title">国内疫情地图</div>

    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <van-tabs v-model="active" animated @change="change">
      <van-tab title="现有确诊">
        <div id="nowMain" style="width: 7.5rem; height: 6.4rem"></div>
      </van-tab>
      <van-tab title="累计确诊">
        <div id="Main" style="width: 100%; height: 6.4rem"></div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// 引入中国地图数据
// import 'echarts/map/js/china.js'
import api from "../../api/index";
export default {
  name: "ChinaMap",
  data() {
    return {
      active: 0,
      arr: [],
    };
  },
  mounted() {
    api
      .getChinaData()
      .then((res) => {
        console.log(res.data);
        // 获取省份数据
        let citys = res.data.retdata;
        let arr = []; // 累计确诊
        let nowArr = []; // 现存确诊
        for (let i = 0; i < citys.length; i++) {
          let obj = {};
          obj.name = citys[i].xArea; // 地区
          obj.value = citys[i].confirm; // 确认病例
          let now = {};
          now.name = citys[i].xArea;
          now.value = citys[i].curConfirm; // 当前确诊
          arr.push(obj);
          nowArr.push(now);
        }
        this.arr = arr;
        this.$nextTick(() => {
          this.$myChart.chinaMap("nowMain", nowArr);
        });
      })
      .catch((error) => {
        console.log("请求失败", error.message);
      });
  },
  methods: {
    change(title) {
      if (title === 1) {
        this.$nextTick(() => {
          this.$myChart.chinaMap("Main", this.arr);
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  margin: 0.2rem;
  padding-top: 0.2rem;
  border-top: 1px solid #eee;
}
.title::before {
  content: "";
  display: inline-block;
  width: 0.08rem;
  height: 0.28rem;
  margin-right: 0.2rem;
  background-color: #4169e2;
  
}
#Main,
#nowMain {
  background: #f5f5f5;
}
</style>