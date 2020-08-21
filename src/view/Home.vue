<template>
  <div class="content">
    <div class="top">
      <div class="sh_name">ID:{{sh_id}} &nbsp;{{sh_name}}</div>
      <div class="sh_money">
        ¥&nbsp;{{sh_money}}&nbsp;
        <span class="yuan">元</span>
      </div>
      <div class="sh_ms">可提现余额</div>
      <div class="sh_sx">
        <img src="../assets/images/sx.png" border="0" onclick="javascript:location.reload();" />
      </div>
    </div>

    <div class="nav">
      <ul>
        <li>
          <router-link to="/Code">
            <img src="../assets/images/ico_01.jpg" border="0" />
            <br />收款码
          </router-link>
        </li>
        <li>
          <router-link to="/List">
            <img src="../assets/images/ico_02.jpg" border="0" />
            <br />收款记录
          </router-link>
        </li>
        <li>
          <router-link to="/Withdraw">
            <img src="../assets/images/ico_03.jpg" border="0" />
            <br />我要结算
          </router-link>
        </li>
        <li>
          <router-link to="/Wlist">
            <img src="../assets/images/ico_04.jpg" border="0" />
            <br />结算记录
          </router-link>
        </li>
      </ul>
    </div>
    <div class="clearfloat"></div>

    <div class="jinri">
      今日收款：
      <span class="jinri1">{{today}}</span>&nbsp;笔&nbsp;&nbsp;&nbsp;今日收款额：
      <span class="jinri1">{{today_total}}&nbsp;</span>元
    </div>

    <div class="olist">
      <div class="otop">
        <div class="otitle">收款记录</div>
        <div class="omore">
          <router-link to="/List">账单></router-link>
        </div>
      </div>
      <div class="clearfloat"></div>

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
  </div>
</template>


<script>
export default {
  data() {
    return {
      sh_name: "",
      sh_id: "",
      sh_money: "",
      today: "",
      today_total: "",
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      page: 1,
    };
  },
  mounted() {
    var sh_id = 3;
    var api1 = "/api/vueapi.php?action=index&sh_id=" + sh_id;
    this.$http.get(api1).then((resposne) => {
      console.log(resposne);
      this.sh_name = resposne.body.sh_name;
      this.sh_id = resposne.body.id;
      this.sh_money = resposne.body.sh_money;
    });

    var api2 = "/api/vueapi.php?action=today&sh_id=" + sh_id;
    this.$http.get(api2).then((resposne) => {
      console.log(resposne);
      this.today = resposne.body.today;
      this.today_total = resposne.body.today_total;
    });
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
  },
};
</script>



<style>
</style>