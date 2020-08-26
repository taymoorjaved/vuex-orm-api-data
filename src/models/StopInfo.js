import { Model } from "@vuex-orm/core";

export default class StopInfo extends Model {
  static entity = "stopinfo";

  static fields() {
    return {
      category: this.string(""),
      id: this.string(""),
      label: this.string(""),
      latitude: this.number(0),
      longitude: this.number(0),
      name: this.string(""),
      shortName: this.string(""),
      stopPoint: this.string(""),
    };
  }
}
