<template>
  <div class="content">
    <div class="olist">
      <div class="otop">
        <div class="otitle">收款记录</div>
        <div class="omore">
          筛选日期：
          <input
            type="text"
            :value="date"
            @click="show = true"
            style="width:70px;height:19px; text-indent:5px;"
          />
        </div>
      </div>
      <div class="clearfloat"></div>

      <van-calendar v-model="show" @confirm="onConfirm" />

      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
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
      </van-pull-refresh>
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
import { Calendar } from "vant";
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
        "/api/vueapi.php?action=list&sh_id=" + sh_id + "&page=" + this.page;
      this.$http.get(api).then((resposne) => {
        //console.log(resposne);
        this.list = this.list.concat(resposne.body);
        //console.log(this.list);
        ++this.page;
        if (resposne.body.length < 20) {
          this.loading = true;
          this.finished = true;
        } else {
          this.loading = false;
        }
      });
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    formatDate(date) {
      return `${date.getMonth() + 1}-${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
  },
};
</script>


<style>
</style>