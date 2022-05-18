/**
 * 公共的请求的接口
 */
const base = {
    host:'http://api.tianapi.com',     // 天行网站
    covInfo:'/ncov/index?key=1f817aac7fa0c50bf1dfe91238ffcd3a',     // 疫情病毒信息

    baseUrl :'https://qayz.api.storeapi.net',    // 挖数据，国内外疫情信息
    chinaData:'/api/94/219?format=json&appid=17153&sign=8b5ec3a5455770db6e86558ddd91c930',
    worldData:'/api/94/220?format=json&appid=17153&sign=8b5ec3a5455770db6e86558ddd91c930',

    city:'/api/94/221',//城市接口

    swiperBanner:'http://iwenwiki.com/wapicovid19/ncovimg.php',//轮播图疫情
    
    // 获取当前 IP 地址
    IPQuery:'/ipquery/index?key=1f817aac7fa0c50bf1dfe91238ffcd3a&ip=',
    
    // juHe:'http://apis.juhe.cn', // 聚合数据
    
    cities:'/foo/springTravel/citys?key=8e9079b7e461ede0e91890e7e6cc287e',        // 城市清单查询
    policies: '/foo/springTravel/query?key=4f88d06e51c1a60d103aeb43fafc1525',                                                            // 防疫政策查询

    // 新浪获取当年城市地址
    currentCity:'api/cityjson',

    // 核酸机构地点
    Nucleic_acid_detection_organization:'/foo/springTravel/hsjg?key=8e9079b7e461ede0e91890e7e6cc287e'

};

export default base;