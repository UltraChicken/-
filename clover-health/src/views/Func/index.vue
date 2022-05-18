<template>
  <div class="func">
    <div class="child-func">
      <img src="../../assets/images/watchDocter.png" />
      <p>看医生</p>
    </div>
    <div class="child-func">
      <router-link to="/fangyiwuzi">
        <img src="../../assets/images/fangyiwuzi.png" alt="" />
        <p>防疫物资</p>
      </router-link>
    </div>
    <div class="child-func">
      <router-link to="/acidtest">
        <img src="../../assets/images/Cov19check.png" alt="" />
        <p>核酸检测</p>
      </router-link>
    </div>
    <div class="child-func" @click="jumpPolice">
      <img src="../../assets/images/driveadvice.png" alt="" />
      <p>出行政策</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Func",
  methods:{
    jumpPolice(){
      this.$router.push({
        name:'VaccinationPolicy'
      })
    }
  }
};
</script>

<style lang="less" scoped>
.func {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0.2rem 0;
  .child-func {
    display: flex;
    flex-direction: column;
    // width: 1.25rem;
    align-items: center;
    justify-content: center;
    p {
      line-height: 0.3rem;
    }
    img {
      width: 1rem;
      height: 100%;
    }
  }
}
</style>