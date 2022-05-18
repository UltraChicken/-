<template>
  <div class="acidTest">
    <router-link to="/">
      <div class="backButton">返回疫情地图</div>
    </router-link>
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <div>地点：{{ item.name }}</div>
        <div>联系电话：{{ item.phone }}</div>
        <div>地址：{{ item.address }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../../api";
export default {
  name: "AcidTest",
  data() {
    return {
      data: [],
    };
  },
  created() {
    if (this.$emit.data) {
      let city_id = this.$emit.data.id;
      let params = {};
      params.city_id = city_id;
      api
        .getOrganization(params)
        .then((res) => {
          console.log("核酸检测机构请求成功，奥力给", res.data);
          this.data = res.data.result.data;
        })
        .catch((error) => {
          console.log("核酸检测机构请求失败", error.message);
        });
    }
  },
};
</script>

<style lang="less" scoped>
.acidTest {
  margin: 0.2rem 0.36rem 0.2rem;
  padding: 0.3rem;
  background-color: #fff;
  .backButton {
    position: fixed;
    top: 0.12rem;
    right: 0.16rem;
    width: 1.9rem;
    height: 0.54rem;
    font-size: 0.11rem;
    line-height: 0.55rem;
    text-align: center;
    background: rgba(19, 15, 133, 0.5);
    border-radius: 0.24rem;
    color: #fff;
  }
  ul {
    li {
      margin-bottom: 0.5rem;
      padding: 0.4rem;
      border-radius: 0.1rem;
      background-color: #f7f7f7;
      font-size: 0.33rem;
      line-height: 0.7rem;
    }
  }
}
</style>