import api from '../api'
const state = {
    cname : "",
};
const mutations = {
    GETCURRENTCITY(state,cname){
        state.cname = cname;
    }
};
const actions = {
    async getCurrentCity({commit}){
        let result  = await api.getCurrentCity();
        if(result.status === 200){
            result.data = result.data.slice(19,result.data.length-1);
            result.data = eval('('+result.data+')');
            commit('GETCURRENTCITY',result.data.cname)
        }
    }
};
const getters = {
    getCurrentCity(state){
        // 判断是省、自治区、直辖市、特别行政区
        // 判断有没有市
        let indexProvince = state.cname.indexOf('省');
        if(indexProvince === -1){
            let indexAR = state.cname.indexOf('自治区');
            if(indexAR === -1){
                return state.cname;
            }else{
                return state.cname.slice(indexAR+3);
            }                                                       
        }else {
            return state.cname.slice(indexProvince+1);
        }
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}