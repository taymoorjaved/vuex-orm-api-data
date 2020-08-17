import { Model } from "@vuex-orm/core";

export default class TodoList extends Model {
  static entity = "todoList";

  static fields() {
    return {
      userId: this.number(0),
      id: this.number(0),
      title: this.string(""),
      completed: this.boolean(false),
    };
  }
}
