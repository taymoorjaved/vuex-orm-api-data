import StopInfo from "@/models/StopInfo";
import RouteInfo from "@/models/RouteInfo";
import { STOP_INFO, ROUTE_INFO } from "../api";

export default {
  async getStopInfo({ commit }) {
    const stopInfo = await StopInfo.api().request({
      url: STOP_INFO,
      method: "get",
    });
    commit("setStopInfo", { stopInfo: stopInfo.response.data.stopPoints });
  },

  async getRouteInfo({ commit }) {
    const routeInfo = await RouteInfo.api().request({
      url: ROUTE_INFO,
      method: "get",
    });
    commit("setRouteInfo", { routeInfo: routeInfo.response.data.routes });
  },
};
