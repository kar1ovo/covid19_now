<template>
  <div>
    <div class="tag">
      <span>更新时间 : {{ updateTime }}</span>
    </div>

    <!-- <el-link type="success" disabled>updateTime : {{ updateTime }}</el-link> -->
    <ve-map :data="chartData" width="1400px" height="700px"></ve-map>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["chartData", "updateTime"]),
};
</script>

<style>
.tag {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
