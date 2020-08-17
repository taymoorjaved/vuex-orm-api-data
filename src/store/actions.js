import TodoList from "@/models/TodoList";

export default {
  async getToDos({ commit }) {
    const todos = await TodoList.api().get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    commit("setTodos", { todos: todos.response.data });
  },
};
