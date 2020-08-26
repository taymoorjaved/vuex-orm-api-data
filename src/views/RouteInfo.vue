<template>
  <div class="container">
    <tr class="head">
      <th>AUTHORITY</th>
      <th>NAME</th>
      <th>DIRECTIONS</th>
    </tr>
    <tr v-for="(routeInfo, index) in routeInfos" :key="index">
      <td>{{ routeInfo.authority }}</td>
      <td>{{ routeInfo.name }}</td>
      <td>
        <span v-for="(direction, index) in routeInfo.directions" :key="index">
          {{ direction }}
        </span>
      </td>
    </tr>
  </div>
</template>

<script>
export default {
  computed: {
    routeInfos() {
      return this.$store.state.routeInfo;
    },
  },
  created() {
    this.$store.dispatch("getRouteInfo");
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
