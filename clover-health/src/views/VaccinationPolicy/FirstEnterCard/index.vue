<template>
  <div class="card">
    <div class="card-city">
      <div class="left">
        <div class="line"></div>
      </div>
      <div class="right">
        <div class="right-header" :class="currentRiskLevelFrom">
          <div class="city-wrapper">
            <div class="cityName">出{{ cityFrom.name }}</div>
            <div class="cityRisk">{{ currentRisk[0] }}</div>
          </div>
          <span class="cityProvince">订阅变动</span>
        </div>
        <div class="policy-block">
          <div class="expendBox">
            <div class="description_all" v-show="!showMore[0]">
              {{ fromPolicyDesc }}
            </div>
            <div class="description" v-if="showMore[0]">
              {{ fromPolicyDesc }}
            </div>
            <div
              class="showAll"
              v-if="showMore[0]"
              @click="$set(showMore, 0, false)"
            >
              展开更多
              <img src="../../../assets/images/more.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card-city">
      <div class="left">
        <div class="line"></div>
      </div>
      <div class="right">
        <div class="right-header" :class="currentRiskLevelTo">
          <div class="city-wrapper">
            <div class="cityName">进{{ cityTo.name }}</div>
            <div class="cityRisk">{{ currentRisk[1] }}</div>
          </div>
          <span class="cityProvince">订阅变动</span>
        </div>
        <div class="policy-block">
          <div class="expendBox">
            <div class="description_all" v-show="!showMore[1]">
              {{ toPolicyDesc }}
            </div>
            <div class="description" v-if="showMore[1]">{{ toPolicyDesc }}</div>
            <div
              class="showAll"
              v-if="showMore[1]"
              @click="$set(showMore, 1, false)"
            >
              展开更多
              <img src="../../../assets/images/more.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="intro">
      数据整理自官方公布的消息，仅供参考。若前往某地街道社区或村镇，建议直接咨询当地防疫部门。如有更新或错漏，请以当地防疫部门最新政策为准。
    </div>
  </div>
</template>

<script>
import api from "../../../api";
export default {
  name: "FirstEnterCard",
  data() {
    return {
      showMore: [true, true],
      risk: {
        0: ["低风险", 0],
        1: ["低风险", 0],
        2: ["中风险", 1],
        3: ["高风险", 2],
        4: ["部分地区中风险", 1],
        5: ["部分地区高风险", 2],
        6: ["部分地区中、高风险", 2],
      },

      currentFromCityLevel: 0, // 当前所选城市等级
      currentToCityLevel: 0,
      data: {
        to_info: { high_in_desc: "", low_in_desc: "", out_desc: "" },
        from_info: { high_in_desc: "", low_in_desc: "", out_desc: "" },
      },
      // data:{}
    };
  },
  computed: {
    currentRisk() {
      let result = [];
      let fromResult = this.risk[this.currentFromCityLevel][0];
      let toResult = this.risk[this.currentToCityLevel][0];
      result.push(fromResult, toResult);
      return result;
    },
    currentRiskLevelFrom() {
      return {
        "l-risk": this.risk[this.currentFromCityLevel][1] === 0,
        "m-risk": this.risk[this.currentFromCityLevel][1] === 1,
        "h-risk": this.risk[this.currentFromCityLevel][1] === 2,
      };
    },
    currentRiskLevelTo() {
      return {
        "l-risk": this.risk[this.currentToCityLevel][1] === 0,
        "m-risk": this.risk[this.currentToCityLevel][1] === 1,
        "h-risk": this.risk[this.currentToCityLevel][1] === 2,
      };
    },
    toPolicyDesc() {
      return (
        this.data["to_info"]["high_in_desc"] +
        this.data["to_info"]["low_in_desc"] +
        this.data["to_info"]["out_desc"]
      );
    },
    fromPolicyDesc() {
      return (
        this.data["from_info"]["high_in_desc"] +
        this.data["from_info"]["low_in_desc"] +
        this.data["from_info"]["out_desc"]
      );
    },
  },

  props: ["cityFrom", "cityTo"],

  watch: {
    cityFrom: {
      deep: true,
      handler() {
        let params = {};
        params.from = this.cityFrom.code;
        params.to = this.cityTo.code;
        if ( this.cityTo.name !== "目的地") {
         api.getCityPolicy( params ).then(( res ) => {
            this.data = JSON.parse(JSON.stringify(res.data.result));
            this.currentFromCityLevel =res.data.result["from_info"]["risk_level"];
            this.currentToCityLevel = res.data.result["to_info"]["risk_level"];
            this.$set(this.showMore, 0, true);
          })
          .catch((error) => {
            console.log("fail", error.message);
          });
          
        }
      },
    },
    cityTo: {
      deep: true,
      handler() {
        let params = {};
        params.from = this.cityFrom.code;
        params.to = this.cityTo.code;
        if (this.cityFrom.name !== "出发地") {
          api.getCityPolicy( params ).then(( res ) => {
            this.data = JSON.parse(JSON.stringify(res.data.result));
            this.currentFromCityLevel =res.data.result["from_info"]["risk_level"];
            this.currentToCityLevel = res.data.result["to_info"]["risk_level"];
            this.$set(this.showMore, 1, true);
          })
          .catch((error) => {
            console.log("fail", error.message);
          });
        }

       
      },
    },
  },
};
</script>

<style lang='less' scoped>
.card {
  margin: 0.2rem 0.36rem 0.2rem;
  padding: 0.3rem 0.3rem 0.3rem 0;
  background-color: #fff;
  border-radius: 0.1rem;
  .card-city {
    display: flex;
    .left {
      display: flex;
      flex-shrink: 0;
      align-self: stretch;
      justify-content: center;
      width: 0.8rem;
      padding: 0.35rem 0;
      .line {
        width: 0.02rem;
        height: 100%;
        background-color: hsla(0, 0%, 92.2%, 0.4);
      }
    }
    .right {
      flex-grow: 1;
      .right-header {
        display: flex;
        position: relative;
        padding: 0 0.05rem 0 0.3rem;
        background-color: #40cca7;
        border-radius: 0.15rem;

        align-items: center;
        justify-content: space-between;
        height: 0.8rem;
        .city-wrapper {
          display: flex;
          flex-grow: 1;
          align-items: center;
          .cityName {
            color: #fff;
            font-weight: 700;
            font-size: 0.33rem;
          }
          .cityRisk {
            font-size: 0.24rem;
            padding: 0 0 0 0.18rem;
            color: #fff;
          }
        }
        .cityProvince {
          flex-grow: 0;
          box-sizing: border-box;
          width: 1.2rem;
          margin-left: 0.1rem;
          padding-top: 0.1rem;
          padding-bottom: 0.1rem;
          font-weight: 700;
          font-size: 0.2rem;
          line-height: 1;
          text-align: center;
          background-color: #fff;
          border-radius: 0.2rem;
          transform: scale(0.83);
          &:after {
            content: "";
            position: absolute;
            top: 50%;
            left: -5.7rem;
            display: block;
            width: 0.3rem;
            height: 0.3rem;
            background-image: url(../../../assets/images/pot.png);
            background-size: contain;
            transform: translate(-100%, -50%);
          }
        }
      }
    }
  }
  .policy-block {
    margin-top: 0.1rem;
    margin-bottom: 0.3rem;
    padding: 0.2rem;
    background-color: #f7f7f7;
    border-radius: 0.1rem;
    .expendBox {
      color: #4d4d4d;
      font-size: 0.25rem;
      line-height: 0.5rem;
      white-space: pre-wrap;
    }
    .description {
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 8;
      -webkit-box-orient: vertical;
    }
    .showAll {
      margin-top: 0.2rem;
      color: #808080;
      font-size: 0.2rem;
      line-height: 0.3rem;
      img {
        width: 0.2rem;
        height: 0.2rem;
      }
    }
  }
  .intro {
    padding-left: 1rem;
    color: #999;
    font-size: 0.2rem;
    line-height: 1.5;
  }
}
// 低风险
.l-risk {
  background-color: #40cca7 !important;

  .cityProvince {
    color: #40cca7;
    &:after {
      background-image: url(../../../assets/images/pot.png) !important;
    }
  }
}
// 中风险
.m-risk {
  background-color: #fbb046 !important;
  .cityProvince {
    color: #fbb046;
    &:after {
      background-image: url(../../../assets/images/pot-yellow.png) !important;
    }
  }
}
// 高风险
.h-risk {
  background-color: #f57676 !important;
  .cityProvince {
    color: #f57676;
    &:after {
      background-image: url(../../../assets/images/potred.png) !important;
    }
  }
}
</style>