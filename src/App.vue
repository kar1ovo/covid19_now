<template>
  <div id="app">
    <el-button type="primary"
      ><router-link to="/">Home</router-link>
    </el-button>
    <el-button type="primary"
      ><router-link to="/map">Map</router-link>
    </el-button>
    <el-button type="primary"
      ><router-link to="/news">News</router-link></el-button
    >

    <router-view />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "app",
  methods: {
    ...mapMutations(["fetchAll"]),
  },
  created() {
    this.fetchAll();
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
a {
  text-decoration: none;
}
</style>
