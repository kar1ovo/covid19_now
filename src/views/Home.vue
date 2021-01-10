<template>
  <div class="home">
    <h1>China</h1>
    <el-divider></el-divider>
    <span
      >确诊总数 : {{ chinaData.confirmedCount }} && 今日新增确诊数 :
      {{ chinaData.confirmedAdd }}</span
    >
    <el-divider></el-divider>
    <span
      >疑似病例总数 : {{ chinaData.suspectedCount }} && 今日新增疑似病例 :
      {{ chinaData.suspectedAdd }}</span
    >
    <el-divider></el-divider>
    <span
      >重症总数 : {{ chinaData.severecasesCount }} && 今日新增重症数 :
      {{ chinaData.severecasesAdd }}</span
    >
    <el-divider></el-divider>
    <span
      >死亡总数 : {{ chinaData.deathCount }} && 今日新增死亡数 :
      {{ chinaData.deathAdd }}</span
    >
    <el-divider></el-divider>
    <span
      >治愈总数 : {{ chinaData.curedCount }} && 今日新增治愈病例 :
      {{ chinaData.curedAdd }}</span
    >
    <el-divider></el-divider>
    <span>截止更新时间 > {{ chinaData.updateTime }}</span>
    <el-divider></el-divider>
    <span>数据来源说明 > {{ chinaData.sourceDesc }}</span>
    <el-divider></el-divider>
    <span>病毒描述 > {{ chinaData.description }}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["chinaData"]),
};
</script>
