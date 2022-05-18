<template>
  <div class="card">
      <img src="../../../assets/images/postion.png" alt="">
      <div class="tip">您还未选择出发地与目的地</div>
  </div>
</template>

<script>
export default {
    name:'NoSelectedCity',
}
</script>

<style lang='less' scoped>
    .card{
        margin: 0.2rem 0.36rem 0.2rem;
        padding: 2rem 0;
        background-color: #fff;
        border-radius: 0.1rem;
        text-align: center;
        img{
            width: 1.2rem;
        }
        .tip{
            color: #999;
            margin-top: .3rem;
            font-size: .3rem;
        }
    }
</style>