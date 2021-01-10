<template>
  <el-table :data="newsData" style="width: 100%">
    <el-table-column prop="pubDate" label="日期"> </el-table-column>
    <el-table-column prop="title" label="标题"> </el-table-column>
    <el-table-column prop="summary" label="概括"> </el-table-column>
    <el-table-column prop="sourceUrl" label="源网址"> </el-table-column>
  </el-table>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["newsData"]),
};
</script>

<style></style>
