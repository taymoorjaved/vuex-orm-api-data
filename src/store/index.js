import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VuexORM from "@vuex-orm/core";
import VuexORMAxios from "@vuex-orm/plugin-axios";
import actions from "./actions";
import mutations from "./mutations";
import StopInfo from "../models/StopInfo";
import RouteInfo from "../models/RouteInfo";

VuexORM.use(VuexORMAxios, {
  axios,
});

const database = new VuexORM.Database();

database.register(StopInfo);
database.register(RouteInfo);

Vue.use(Vuex);

export default new Vuex.Store({
  state: { stopInfo: [], routeInfo: [] },
  mutations,
  actions,
  plugins: [VuexORM.install(database)],
});
