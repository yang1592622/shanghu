<template>
  <div class="content">
    <div class="olist">
      <div class="otop">
        <div class="otitle">收款记录</div>
        <div class="omore">
          <router-link to="/">首页>></router-link>
        </div>
      </div>
      <div class="clearfloat"></div>

      <van-cell title="点击按日期筛选" :value="date" @click="show = true" />
      <van-calendar v-model="show" :min-date="minDate" :max-date="maxDate" @confirm="onConfirm" />

      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="list" v-for="(item,index) of list" :key="index">
          <div class="list_l">
            <img :src="item.member_pic" />
          </div>
          <div class="list_m">
            <div class="list_m_1">{{item.member_name}}</div>
            <div class="list_m_2">{{item.updatetime}}</div>
          </div>
          <div class="list_r">
            <div class="list_m_1">
              <b>{{item.smoney}}</b>
            </div>
            <div class="list_m_2">余额：{{item.sh_money}}</div>
          </div>
        </div>
      </van-list>
    </div>

    <div class="rnav">
      <div class="rnav1">
        <img
          src="../assets/images/sx1.png"
          border="0"
          width="35"
          onclick="javascript:location.reload();"
        />
      </div>
      <div class="rnav1">
        <router-link to="/">
          <img src="../assets/images/home.png" width="35" />
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      page: 1,

      date: "",
      show: false,
      minDate: new Date(2018, 0, 1),
      maxDate: new Date(),
    };
  },
  methods: {
    onLoad() {
      this.getdata();
    },
    getdata() {
      this.loading = true;
      var sh_id = 3;
      var api =
        "/api/vueapi.php?action=list&sh_id=" +
        sh_id +
        "&updatetime=" +
        this.date +
        "&page=" +
        this.page;
      this.$http.get(api).then((resposne) => {
        console.log(resposne);
        this.list = this.list.concat(resposne.body);
        //console.log(this.list);
        ++this.page;
        if (resposne.body.length < 10) {
          this.loading = true;
          this.finished = true;
        } else {
          this.loading = false;
        }
      });
    },
    formatDate(date) {
      return `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
      this.page = 1;
      this.list = [];
      this.getdata();
    },
  },
};
</script>


<style>
</style>