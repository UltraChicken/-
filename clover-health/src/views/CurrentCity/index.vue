<template>
  <router-link to="/changecity">
    <div class="outer">
      <!-- 当前城市： -->
      <div class="inner" v-if="showFirst">{{ getCurrentCity }}</div>
      <div class="inner" v-if="showMore">{{ getSelectedCity}}</div>
      <img src="../../assets/images/more.png" alt="">
    </div>
  </router-link>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CurrentCity",
  data() {
    return {
      showFirst:true,
      showMore:true
    }
  },
  watch:{

  },
  computed: {
    ...mapGetters(["getCurrentCity"]),
    getSelectedCity(){
      if(this.$route.query.text !== undefined){
        this.showFirst = false;
        
        return this.$route.query.text;
      }
    }
  },
 
};
</script>

<style lang="less" scoped>
.outer {
  display: flex;
  position: absolute;
  height: 0.5rem;
  background-color: rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;
  padding: 0 0.2rem 0 0.4rem;
  border-radius: 0.3rem;
  font-size: 0.25rem;
  color: #fff;
  top: 0.35rem;
  right: 0.3rem;
  .inner {
    flex-grow: 0;
    font-size: 0.3rem;
  }
  img{
    width: .3rem;
    margin-left: 0.1rem;
  }
}
</style>