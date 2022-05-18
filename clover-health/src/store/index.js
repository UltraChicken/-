import Vue from "vue";
import Vuex from "vuex"
import cityfromto from './cityfromto'
import getCurrentCity from './getCurrentCity'
import firstEnterCard from './firstEnterCard'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        cityfromto,        
        getCurrentCity,
        firstEnterCard,
    }
})