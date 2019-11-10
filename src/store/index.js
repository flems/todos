import Vue from "vue";
import Vuex from "vuex";
import task from "./modules/task.js";
import project from "./modules/project.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    task,
    project
  }
});
