<template>
  <van-tree-select
    :items="items"
    :active-id.sync="activeId"
    :main-active-index.sync="activeIndex"
    @click-item="clickItem"
  />
</template>

<script>
import api from "../../../api";
export default {
  name: "ChangeCity",
  data() {
    return {
      items: [],
      activeIndex: 0,
      activeId: 0, // provinceId
    };
  },
  created(){
    api.getProvinceCities().then(res=>{
      console.log('success',res.data);
      res.data.result.forEach(item=>{
        let obj = {};
        obj.text = item.province;
        obj.children = item.citys.map(item=>{
            return ({text:item.city,id:item.city_id});
        })
        this.items.push(obj);
      })
    })
  },
  methods: {
    clickItem(data) {
      this.$emit.data = data;
      this.$router.push({
        name: "Home",
        query: data,
      });
      console.log(this.$emit.data);
    },
  },
};
</script>

<style lang="less" scoped>
</style>