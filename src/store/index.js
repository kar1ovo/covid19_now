import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newsData: {},
    chinaData: {},
    chartData: {
      columns: [
        "位置",
        "现存确诊人数",
        "累计确诊人数",
        "疑似感染人数",
        "治愈人数",
        "死亡人数",
      ],
      rows: [],
    },
    updateTime: "",
  },
  mutations: {
    fetchAll() {
      const API_PROXY = "https://bird.ioliu.cn/v2/?url=";
      axios
        .get(`${API_PROXY}https://api.yonyoucloud.com/apis/dst/ncov/country`, {
          params: {
            headers: {
              authoration: "apicode",
              apicode: "5ef52efe20724ef29c5c41a3df803dc8",
            },
          },
        })
        .then((response) => {
          this.state.chinaData = response.data.data;
          this.state.updateTime = response.data.data.updateTime;
        });
      axios
        .get(
          `${API_PROXY}http://api.yonyoucloud.com/apis/dst/ncov/spreadQuery`,
          {
            params: {
              headers: {
                authoration: "apicode",
                apicode: "5ef52efe20724ef29c5c41a3df803dc8",
              },
            },
          }
        )
        .then((response) => {
          const data = response.data.newslist;
          for (let i = 0; i < data.length; i++) {
            this.state.chartData.rows.push({
              位置: data[i].provinceShortName,
              现存确诊人数: data[i].currentConfirmedCount,
              累计确诊人数: data[i].confirmedCount,
              疑似感染人数: data[i].suspectedCount,
              治愈人数: data[i].curedCount,
              死亡人数: data[i].deadCount,
            });
          }
        });
      axios
        .get(`${API_PROXY}https://api.yonyoucloud.com/apis/dst/ncov/query`, {
          params: {
            headers: {
              authoration: "apicode",
              apicode: "5ef52efe20724ef29c5c41a3df803dc8",
            },
          },
        })
        .then((response) => {
          console.log(response.data.newslist[0].news);
          this.state.newsData = response.data.newslist[0].news;
          for (let i = 0; i < this.state.newsData.length; i++) {
            this.state.newsData[i].pubDate = new Date(
              this.state.newsData[i].pubDate
            ).toLocaleString();
          }
        });
    },
  },
  actions: {},
  modules: {},
});
