<template>
  <div>
    <h2>{{ cityname }}疫情详细信息</h2>
    <div id="main" style="width: 7.5rem; height: 9rem"></div>
  </div>
</template>

<script>
import api from "../../api";

export default {
  name: "Citys",
  props: ["cityname"],
  mounted() {
    api
      .getCity(this.cityname)
      .then((res) => {
        console.log("city-data", res.data.retdata.subList);
        // 获得所有城市信息
        let arr = res.data.retdata.subList;
        let newArr = [];

        arr.forEach((el) => {
          let obj = {};
          if (
            el.city.endsWith("区") ||el.city.endsWith("州") ||el.city.endsWith("盟") ||el.city.endsWith("旗")) {
              obj.name = el.city;
            } else {
              obj.name = el.city + "市";
            }
          // obj.name = el.city;

          obj.value = el.confirm; // 累计确诊
          newArr.push(obj);
        });
        console.log("城市处理完毕的数据", newArr);
        this.$myChart.cityMap("main", this.cityname, newArr);
      })
      .catch((error) => {
        console.log("请求失败", error.message);
      });
  },
};
</script>

<style lang="less" scoped>
</style>