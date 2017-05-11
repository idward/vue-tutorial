import Vue from 'vue';
import Vuex from 'vuex'
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);
//数据
const state = {
  totalTime: 0,
  list: []
};

const vuexStore = new Vuex.Store({
  state: state, //数据
  mutations: mutations, //
  actions: actions
});

debugger;

export default vuexStore;

