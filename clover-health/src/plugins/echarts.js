/**
 * 开发vue插件使用 echarts
 */
import echarts from "echarts";
import '../utils/map'
import country from "@/utils/country";

const install = function (Vue) {
    // Vue.prototype.demo = function(){}
    Object.defineProperties(Vue.prototype, {
        $myChart: {
            get() {
                return {

                    //国内地图----
                    chinaMap(id, data) {
                        var myChart = echarts.init(document.getElementById(id));
                        var option = {
                            tooltip: {
                                triggerOn: "click", // 事件类型
                                enterable: true,
                                formatter(data) {
                                    // return "<a href='#/citys/" + data.name + "' style='color:#fff'><div><p>省:" + data.name + "---详情</p><p>现存确诊:" + data.value + "</p></div></a>"
                                    return `<a href='#/citys/${data.name}' style='color:#fff'>省份：${data.name}----详情</a>`
                                }
                            },
                            visualMap: [{
                                orient: "horizontal",
                                type: "piecewise",
                                pieces: [ // 配置颜色区间
                                    {
                                        min: 0,
                                        max: 0,
                                        color: "#FFFFFF"
                                    },
                                    {
                                        min: 1,
                                        max: 100,
                                        color: "#faebd2"
                                    },
                                    {
                                        min: 100,
                                        max: 1000,
                                        color: "#e9a188"
                                    },
                                    {
                                        min: 1000,
                                        max: 5000,
                                        color: "#d56355"
                                    },
                                    {
                                        min: 5000,
                                        max: 10000,
                                        color: "#bb3937"
                                    },
                                    {
                                        min: 10000,
                                        color: "#480F10"
                                    }
                                ]
                            }],
                            series: [{
                                name: "China",
                                type: "map",
                                map: "china",
                                roam: false,
                                zoom: 1.2,
                                aspectScale: 0.75,
                                top: 40,
                                layoutCenter: ['5%', '5%'],
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                data,

                            }]
                        }
                        myChart.setOption(option);
                    },
                    // 国外地图
                    worldMap(id, data) {
                        var myChart = echarts.init(document.getElementById(id));
                        var option = {
                            tooltip: { //悬浮弹框
                                triggerOn: 'click', //提示框触发的条件
                                enterable: true,//鼠标是否可进入提示框浮层中，默认为false
                                formatter(item) {//item=下面serves里面的data里面的每一项 //[{} ] data={} a b c d 
                                    return item.name + '：确诊人数' + item.value
                                }
                            },
                            visualMap: [{ //映射高亮颜色
                                orient: "horizontal", //垂直
                                type: "piecewise", //离散
                                bottom: 0,
                                pieces: [ // 配置颜色区间
                                    {
                                        min: 0,
                                        max: 0,
                                        color: "#FFFFFF"
                                    },
                                    {
                                        min: 1,
                                        max: 10000,
                                        color: "#FDFDCF"
                                    },
                                    {
                                        min: 10000,
                                        max: 100000,
                                        color: "#FE9E83"
                                    },
                                    {
                                        min: 100000,
                                        max: 500000,
                                        color: "#E55A4E"
                                    },
                                    {
                                        min: 500000,
                                        // max: 10000,
                                        color: "#4F070D"
                                    }
                                ]
                            }],
                            series: [{
                                name: "World",
                                type: "map", //地图  bar  line  map 
                                map: "world",
                                nameMap: country,//自定义地区的名称映射
                                roam: false,
                                zoom: 1.2,
                                aspectScale: 0.75,
                                top: 40,
                                layoutCenter: ['5%', '5%'],
                                label: {
                                    normal: {
                                        show: false,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                data
                            }]
                        }
                        myChart.setOption(option);
                    },
                    //  城市地图
                    cityMap(id, cityname, data) {
                        var myChart = echarts.init(document.getElementById(id));
                        var option = {
                            tooltip: {//悬浮弹框
                                triggerOn: 'click',//提示框触发的条件
                                enterable: true,
                                formatter(data) {//[{} ] data={}
                                    return data.name
                                }
                            },
                            visualMap: [{//映射高亮颜色
                                orient: "vertical",//垂直
                                type: "piecewise",//离散
                                bottom: 0,
                                pieces: [ // 配置颜色区间
                                    {
                                        min: 0,
                                        max: 0,
                                        color: "#FFFFFF"
                                    },
                                    {
                                        min: 1,
                                        max: 10,
                                        color: "#FDFDCF"
                                    },
                                    {
                                        min: 10,
                                        max: 100,
                                        color: "#FE9E83"
                                    },
                                    {
                                        min: 100,
                                        max: 500,
                                        color: "#E55A4E"
                                    },
                                    {
                                        min: 500,
                                        max: 10000,
                                        color: "#4F070D"
                                    }
                                ]
                            }],
                            series: [{
                                name: "市",
                                type: "map",//地图
                                map: cityname,//中国地图
                                roam: false,
                                zoom: 1.2,
                                aspectScale: 0.75,
                                top: 40,
                                layoutCenter: ['5%', '5%'],
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                data
                            }]
                        }
                        myChart.setOption(option);
                    },
                }
            }
        }
    })
}

export default install;