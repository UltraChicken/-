<template>
  <div class="main">
    <div class="top"></div>
    <div class="backTag" @click="backHome">返回疫情动态</div>
    <div class="body_policy">
      <!-- 出行防疫政策查询 -->
      <div class="cityPicker">
        <div class="title">
          <span id="query">出行防疫政策查询</span>
          <span id="more">更多地区持续添加中</span>
        </div>
        <div class="picker" >
          <div id="from" @click="queryCity" :class="{ selected: isBlack[0] }">
            {{ cityFrom.name }}
            <img class="select" src="../../assets/images/selecticon.png" alt />
          </div>
          <img
            class="middle"
            src="../../assets/images/switch.png"
            alt
            @click="switchCity"
          />
          <div id="to" @click="queryCity" :class="{ selected: isBlack[1] }">
            {{ cityTo.name }}
            <img class="select" src="../../assets/images/selecticon.png" alt />
          </div>
        </div>
        <!-- 城市选择框 -->
      </div>
      <!-- 建议倡导 -->
      <!-- <div class="root"></div> -->
      <!-- 具体城市防疫政策卡片 -->
      <FirstEnterCard :cityFrom="cityFrom" :cityTo="cityTo" v-show="cityFrom.name !== '出发地'&&cityTo.name!=='目的地'"/>
      <NoSelectedCity v-if="cityFrom.name === '出发地' || cityTo.name ==='目的地'" />
      <TrafficBlock/>
    </div>
    <!-- 选择城市弹窗 -->
    <div class="pickPop" v-if="show">
      <div class="pickPopMask" @click="show = false"></div>
      <div class="pickPopup">
        <van-area
          class="area"
          :area-list="areaList"
          :columns-num="2"
          @cancel="show = false"
          @confirm="confirm"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import api from "../../api";
import { areaList } from "@vant/area-data";
import { arealist } from "../../assets/js/area";
import FirstEnterCard from "./FirstEnterCard";
import NoSelectedCity from './NoSelectedCity'
import TrafficBlock from './TrafficBlock'
export default {
  name: "VaccinationPolicy",
  components: { FirstEnterCard, NoSelectedCity,TrafficBlock},
  data() {
    return {
      arealist,
      areaList,
      show: false,
      isBlack:[false,false],
      city: [],
      cityFrom: { name: "出发地" },
      cityTo: { name: "目的地" },
      // 城市点击处理
      clicked: [false, true],
    };
  },
  created() {
    console.log(this.areaList);
    console.log(this.arealist);
  },
  methods: {
    travelSol(val) {
      let province = val[0].name;
      let city = val[1].name;
      for (let i of this.arealist.result) {
        if (i.province === province) {
          for (let j of i.citys) {
            if (j.city === city) {
              val[1].code = j.city_id;

              break;
            }
          }
        }
      }
    },
    backHome() {
      this.$router.push({
        name: "Home",
      });
    },
    queryCity(e) {
      if (e.target.id === "from") {
        this.clicked[0] = true;
      } else {
        this.clicked[1] = true;
      }
      this.show = true;
    },
    confirm(params) {
      this.show = false;
      // this.city.push(params);
      if (this.clicked[0] === true) {
        this.travelSol(params);
        this.cityFrom = params[1];
        this.clicked[0] = false;
        this.$set(this.isBlack,0,true)
      } else {
        this.cityTo = params[1];
        this.travelSol(params);
        this.clicked[1] = false;
        this.$set(this.isBlack,1,true)
      }
    },
    switchCity() {
      if (this.cityFrom.name === "出发地" || this.cityTo.name === "目的地")
        return;
     
      let temp = JSON.parse(JSON.stringify(this.cityTo));
      this.cityTo = JSON.parse(JSON.stringify(this.cityFrom));
      this.cityFrom = JSON.parse(JSON.stringify(temp));
      
    },
  },
};
</script>

<style lang='less' scoped>
.main {
  position: relative;
  background-color: #f7f7f7;
  .top {
    background: url(https://img1.dxycdn.com/2021/0803/383/7548936460855806943-22.png)
      no-repeat;
    width: 100%;
    height: 0;
    margin-bottom: -44%;
    padding-top: 74.7%;
    color: #fff;
    background-size: cover;
  }
  // 返回主页
  .backTag {
    position: absolute;
    top: 0.22rem;
    right: 0.42rem;
    padding: 0.1rem 0.22rem;
    color: #fff;
    font-weight: 400;
    font-size: 0.11rem;
    line-height: normal;
    background-color: rgba(19, 15, 133, 0.5);
    border-radius: 0.22rem;
  }
  .body_policy {
    position: relative;
    z-index: 1;
    // 城市
    .cityPicker {
      position: relative;
      margin: 0 0.36rem;
      padding: 0.25rem 0.3rem;
      color: #333;
      font-weight: 500;
      font-size: 0.16rem;
      line-height: 1.13;
      background-color: #fff;
      border: 0.005rem solid #ebebeb;
      border-radius: 0.1rem;
      box-shadow: 0 0.02rem 0.06rem 0 rgb(0 0 0 / 5%);
      .title {
        display: flex;
        margin-bottom: 0.2rem;
        align-items: center;
        #query {
          font-weight: 700;
          font-size: 17px;
          flex-grow: 1;
        }
        #more {
          float: right;
          color: #999;
          font-weight: 400;
          font-size: 0.12rem;
        }
      }
      .picker {
        display: flex;
        align-items: center;
        height: 1rem;
        background-color: #f7f7f7;
        border-radius: 0.06rem;
        font-size: 0.3rem;
        color: #999;
        font-weight: 500;

        .middle {
          width: 0.3rem;
          height: 0.3rem;
        }
        #from {
          position: relative;
          flex: 1;
          text-align: center;
        }
        #to {
          position: relative;
          flex: 1;
          text-align: center;
        }
        .select {
          width: 0.3rem;
          height: 0.3rem;
          // margin-left: .07rem;
        }
      }
      .selected {
        color: #333;
      }
    }
    // 具体政策
  }

  // 城市下拉框
  .pickPop {
    .pickPopMask {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 1000;
      transform: translateZ(1px);
    }
    .pickPopup {
      .area {
        position: fixed;
        z-index: 1000;
        bottom: 0;
        left: 0;
        right: 0;
        transform: translateZ(1px);
      }
    }
  }
}
</style>