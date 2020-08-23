import Vue from "vue";
import Vuex from "vuex";
import employees from "./modules/employees";
import vehiclesInParkingLot from "./modules/vehiclesInParkingLot";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { employees, vehiclesInParkingLot }
});
