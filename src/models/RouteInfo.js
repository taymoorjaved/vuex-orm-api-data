import { Model } from "@vuex-orm/core";

export default class RouteInfo extends Model {
  static entity = "routeinfo";

  static fields() {
    return {
      alerts: this.attr([]),
      authority: this.string(""),
      directions: this.attr([""]),
      id: this.string(""),
      name: this.string(""),
      shortName: this.string(""),
    };
  }
}
