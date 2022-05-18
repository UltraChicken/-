<template>
  <div>
    <div class="title">世界疫情地图</div>

    <div id="main" style="width: 7.5rem; height: 6rem"></div>
  </div>
</template>

<script>
import api from '../../api'
export default {
  name: "WorldMap",
  mounted(){
      api.getWorldData().then(res=>{
          let world = res.data.retdata;
          let arr = []; //累计
          for(let i = 0;i<world.length;i++){
              let obj = {};
              obj.name = world[i].xArea;
              obj.value = world[i].confirm;
              arr.push(obj);
          }
          this.$myChart.worldMap('main',arr);
      }).catch(error =>{
          console.log('世界地图请求失败',error.message);
      })
  }
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
#main{
    background: #f5f5f5;
}
</style>