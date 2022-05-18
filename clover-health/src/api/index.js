/**
 * 请求的接口的方法
 */
import axios from "axios";
import base from './base'
import md5 from "md5-js";
// 放所有的请求方法
const api = {
    /**
     * 病毒信息获取
     */
    getCovInfo() {
        return axios.get(base.host + base.covInfo);
    },
    // 地图模块
    /**
     * 国内疫情信息
     */
    getChinaData() {
        return axios.get(base.baseUrl + base.chinaData);
    },
    /**
     * 世界疫情信息
     */
    getWorldData() {
        return axios.get(base.baseUrl + base.worldData);
    },
    /**
     * 城市疫情信息
     */
    getCity(city_name) {
        let sign = md5('appid17153city_name' + city_name + 'formatjson9a9a479bf66e5e9160cfd8a45565ef9e');
        let canshu = 'format=json&appid=17153&city_name=' + city_name + '&sign=' + sign;
        return axios.get(base.baseUrl + base.city + '?' + canshu);
    },
    /**
     * 轮播图
     */
    getSwiperBanner() {
        return axios.get(base.swiperBanner);
    },

    getCityPolicy(params) {
        return axios.get(base.policies, {
            params,
        })
    },

    /**
     * 获取当前所在城市ip与名称
     */
    getCurrentCity() {
        return axios.get(base.currentCity);
    },
    /**
     * 城市清单查询
     */
    getProvinceCities() {
        return axios.get(base.cities);
    },
    /**
     * 获取核酸检测机构
     */
    getOrganization(params){
        return axios.get(base.Nucleic_acid_detection_organization,{
            params,
        })
    }
}
export default api;