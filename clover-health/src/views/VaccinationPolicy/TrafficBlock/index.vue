<template>
  <div class="traffic_block">
    <!-- 出行小贴士 -->
    <div class="title">
      <img src="../../../assets/images/shield.png" alt />
      <span>出行小贴士</span>
    </div>
    <!-- 按钮 -->
    <div class="buttons">
      <ul class="button-ul">
        <li
          v-for="(item, index) in vehicle"
          :key="index"
          :class="{ active: index === initial }"
          @click="initial = index"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <!-- 小建议 -->
    <div class="tips">
        <!-- 火车 -->
        <div class="train" v-show="initial === 0">
            <div class="content_title first">1. 准备好出行物品</div>包里准备好消毒湿巾、酒精喷雾、酒精棉片、免洗洗手液、一次性手套。出门前戴好口罩，并在包里准备 2～3 个备用口罩。保证及时更换的同时，不要用手触摸口罩外部，以免病菌转移到手部。
            <div class="content_title">2. 选择靠近车厢两端的位置</div>车厢两端和回风口气流比较大，可以优先选择，回风口通常位于车厢有厕所的一端。
            <div class="content_title">3. 注意车上多人触摸的地方，别乱摸，勤洗手</div>如触摸了，不要揉眼睛、摸鼻子等，请及时洗手。
            <div class="content_title">4. 从车厢编号对应站台位置上车</div>从车厢编号对应站台位置上车，能避免上车后在车厢内长距离行走、与他人近距离接触。在月台上排队时，还应注意与他人保持间隔。
            <div class="content_title">5. 别在月台抽烟</div>抽烟需摘口罩，会增加感染风险。另外，即使没有疫情，也勿在月台抽烟。部分火车可以开窗通风，但请先和车上工作人员沟通。
            <div class="content_title">6. 卧铺尽量选上铺</div>气流整体从上往下吹，因此，上铺相对来说更不易被传染。但需要注意，在上铺若要打喷嚏、咳嗽，务必遮掩口鼻，防止飞沫向下传播。睡觉时也勿摘口罩。
        </div>
        <!-- 飞机 -->
        <div class="plane" v-show="initial === 1">
            <div class="content_title first">1. 准备好出行物品</div>为了保障航空安全，多种消毒液（包括含酒精的免洗洗手液）是不能随身携带上飞机。因此，可以用消毒湿巾等替代。出门前戴好口罩，并在包里准备 2～3 个备用口罩，及时更换。
            <div class="content_title">2. 间隔而坐</div>飞机内如果有人打喷嚏，飞沫也会在同一排内打转后排出，但不容易向前后多排的乘客扩散。 因此，如果有条件的话，挑选人少的航班，并且间隔而坐。
            <div class="content_title">3. 靠窗而坐，并且少走动</div>推荐大家选靠窗位置并且少走动，可以降低感染几率。
            <div class="content_title">4. 不吃或错峰吃飞机餐</div>空中餐食和机供品进行了调整，只提供一次性包装的餐食和机供品。 飞机上的餐食一般是同一时段内统一发放。这可能会导致：机舱内大部分人同时摘下口罩。 四叶草健康建议在飞机上不吃飞机餐，以避免摘除口罩。若航程较长，可以等临近座位的乘客用餐完后错峰用餐。
        </div>
        <!-- 客车 -->
        <div class="bus" v-show="initial === 2">
            <div class="content_title first">1. 准备好出行物品</div>包里准备好消毒湿巾、酒精喷雾、酒精棉片、免洗洗手液、一次性手套。出门前戴好口罩，并在包里准备 2～3 个备用口罩。保证及时更换的同时，不要用手触摸口罩外部，以免病菌转移到手部。
            <div class="content_title">2. 对周围物品进行消毒</div>用消毒纸巾对可能触碰到的位置进行擦拭消毒。避免用手接触口、鼻、眼，咳嗽或者打喷嚏时用纸巾或者手臂遮挡抠鼻。尽量避免和周围人过多交谈。乘车过程中，尽量不要摘口罩，如果需要过夜的汽车，睡觉时也不建议摘掉口罩。
            <div class="content_title">3. 不吃或错峰吃饭</div>如果是短途汽车，尽量不用餐。如果是长途汽车，可以等临近座位的乘客用餐完后错峰用餐。用餐前做好手消毒。
            <div class="content_title">4. 外面温度适合的话，尽量开窗通风</div>对于南方一些地区，比较温暖，可以选择开窗通风。对于北方的地区，可以在休息区的适合，开窗通风，增加车内空气流动。
            <div class="content_title">5. 如果有条件，尽量间隔而坐</div>高、中、低风险地区客座率分别不超过 50％、70％、90％。如果有条件，可以选择和周围人隔一个座位。
        </div>
        <!-- 自驾 -->
        <div class="selfDriving" v-show="initial === 3">
            <div class="content_title first">1. 准备好出行物品</div>包里准备好消毒湿巾、酒精喷雾、酒精棉片、免洗洗手液、一次性手套。出门前戴好口罩，并在包里准备 2～3 个备用口罩。保证及时更换的同时，不要用手触摸口罩外部，以免病菌转移到手部。
            <div class="content_title">2. 注意通风</div>如果天气允许且不堵车，建议自驾过程中保持打开车窗通风。如果天气较冷无法开窗，可以打开车内空调的「通风」或「空气循环」功能。
            <div class="content_title">3. 尽量不到服务站</div>服务站是高速路上的人流聚集点，选择自驾时，如无必要，尽量不到服务站。出行之前，可以先上洗手间、准备好需要的食物和水等。
            <div class="content_title">4. 车上有其他人时，少聊天、戴好口罩</div>如果车上有其他人时，尤其是打车、拼车等情况，车上同行者为陌生人时，最好少聊天，并且记得佩戴口罩。
            <div class="content_title">5. 在人群密集的地方，尽量少开窗</div>在人群密集的地方，尽量少开窗，尽量避免随意下车走动。
            <div class="content_title">6. 做好行程规划，错峰返乡</div>返乡之前，根据各地道路封闭情况，做好行程规划安排，错峰返乡返岗。
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrafficBlock",
  data() {
    return {
      vehicle: ["火车", "飞机", "客运汽车", "自驾"],
      initial: 0,
    };
  },
//   methods:{
//       changeInitial(){

//       }
//   }
};
</script>

<style lang='less' scoped>
.traffic_block {
  margin: 0.2rem 0.36rem 0.2rem;
  padding: 0.25rem 0.3rem;
  border-radius: 0.1rem;
  border: 0.005rem solid #ebebeb;
  background-color: #fff;
  .title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img {
      width: 0.4rem;
    }
    span {
      margin-left: 0.1rem;
      font-size: 0.35rem;
      font-weight: 700;
      color: #444;
      line-height: 0.37rem;
    }
  }
  .buttons {
    margin-top: 0.3rem;
    .button-ul {
      display: flex;
      //   justify-content: space-between;
      align-items: center;
      li {
        flex-grow: 1;
        text-align: center;
        padding: 0.2rem 0;
        margin-right: 0.1rem;
        background-color: #f7f7f7;
        border-radius: 0.1rem;
        font-size: 0.2rem;
      }
      .active {
        color: #fff;
        font-weight: 700;
        background-color: #4169e2;
      }
    }
  }
  .tips {
    margin-top: 0.3rem;
    padding: 0.25rem;
    background-color: #f7f7f7;
    color: #4d4d4d;
    .train,.plane,.bus,.selfDriving{
        white-space: break-spaces;
        line-height: 1.5;
    }
    .content_title{
        font-size: .27rem;
        font-weight: bold;
        margin-top: .4rem;
        margin-bottom: .15rem;
    }
    .first{
        margin-top: 0;
    }
  }
  
}
</style>