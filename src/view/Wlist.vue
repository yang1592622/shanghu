
<template>
  <div class="content">
    <div class="olist">
      <div class="otop">
        <div class="otitle">结算记录</div>
        <div class="omore">
          <router-link to="/">首页>></router-link>
        </div>
      </div>
      <div class="clearfloat"></div>

      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="list" v-for="(item,index) of list" :key="index">
          <div class="list_l">
            <img :src="require(`../assets/images/t${item.tzt}.jpg`)" />
          </div>
          <div class="list_m">
            <div
              v-bind:class="{'list_t_1':item.tzt==1,'list_t_2':item.tzt==2,'list_t_3':item.tzt==3}"
            >
              <span v-show="item.tzt==1">审核中</span>
              <span v-show="item.tzt==2">驳回</span>
              <span v-show="item.tzt==3">已完成</span>
            </div>
            <div class="list_m_2">{{item.updatetime}}</div>
          </div>
          <div class="list_r">
            <div class="list_m_1">
              <b>{{item.tmoney}}</b>
            </div>
            <div class="daozhang">到账：{{item.dmoney}}</div>
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
        "/api/vueapi.php?action=Wlist&sh_id=" + sh_id + "&page=" + this.page;
      this.$http.get(api).then((resposne) => {
        console.log(resposne);
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
  },
};
</script>


<style>
</style>