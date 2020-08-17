import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VuexORM from "@vuex-orm/core";
import VuexORMAxios from "@vuex-orm/plugin-axios";
import TodoList from "@/models/TodoList";
import actions from "./actions";
import mutations from "./mutations";

VuexORM.use(VuexORMAxios, { axios });

const database = new VuexORM.Database();

database.register(TodoList);

Vue.use(Vuex);

export default new Vuex.Store({
  state: { todos: [] },
  mutations,
  actions,
  plugins: [VuexORM.install(database)],
});
