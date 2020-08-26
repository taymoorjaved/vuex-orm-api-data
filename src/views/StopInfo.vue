<template>
  <div class="container">
    <tr class="head">
      <th>CATEGORY</th>
      <th>NAME</th>
    </tr>
    <tr v-for="(stopInfo, index) in stopInfos" :key="index">
      <td>{{ stopInfo.category }}</td>
      <td>{{ stopInfo.name }}</td>
    </tr>
  </div>
</template>

<script>
export default {
  computed: {
    stopInfos() {
      return this.$store.state.stopInfo;
    },
  },
  created() {
    this.$store.dispatch("getStopInfo");
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
