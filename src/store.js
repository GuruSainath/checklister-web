import Vue from 'vue'
import Vuex from 'vuex'
import auth from './vuex/auth.js';
import axios from 'axios';


axios.defaults.baseURL = 'https:/localhost:8000/';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: auth,
  }
});