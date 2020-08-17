<template>
  <div class="container">
    <tr class="head">
      <th>ID</th>
      <th>TITLE</th>
      <th>STATUS</th>
    </tr>
    <tr v-for="(todo, index) in todos" :key="index">
      <td>{{ todo.id }}</td>
      <td>{{ todo.title }}</td>
      <td>{{ todo.completed }}</td>
    </tr>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  created() {
    this.$store.dispatch("getToDos");
  },
};
</script>

<style>
.container {
  width: fit-content;
  margin: auto;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
th {
  background: #42b983;
  padding: 8px;
  border: 1px solid;
}
td {
  background: antiquewhite;
  border: 1px solid;
  padding: 6px;
}
</style>
