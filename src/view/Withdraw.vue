<template>
  <div class="content">
    <div class="withdraw">
      <div class="withdraw1">
        到账时间：
        <span style="color:#FF3300">T+1</span>
      </div>
      <div class="withdraw2">结算金额</div>
      <div class="withdraw3">¥&nbsp;{{tmoney}}</div>
      <div class="withdraw4">手续费¥{{tsxf}}&nbsp;,&nbsp;到账金额¥{{dmoney}}</div>
      <div class="withdraw5" @click="withdraw">立即申请</div>
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
import { Dialog } from "vant";
export default {
  data() {
    return {
      sh_name: "",
      sh_openid: "",
      sh_id: "",
      tmoney: 0,
      tsxf: 0,
      dmoney: 0,
    };
  },
  mounted() {
    var sh_id = 3;
    var api1 = "/api/vueapi.php?action=index&sh_id=" + sh_id;
    this.$http.get(api1).then((resposne) => {
      console.log(resposne);
      this.sh_name = resposne.body.sh_name;
      this.sh_openid = resposne.body.sc_openid;
      this.sh_id = resposne.body.id;

      this.sh_sxf = resposne.body.sh_sxf;
      this.tmoney = resposne.body.sh_money;
      this.tsxf = (this.tmoney * this.sh_sxf * 0.01).toFixed(2);
      this.dmoney = (this.tmoney - this.tsxf).toFixed(2);
    });
  },
  methods: {
    withdraw() {
      if (this.tmoney <= 2) {
        Dialog.alert({
          message: "最低提现金额为2元",
        }).then(() => {});
      } else {
        let data = {
          sh_name: this.sh_name,
          sh_openid: this.sh_openid,
          sh_id: this.sh_id,
          tmoney: this.tmoney,
          tsxf: this.tsxf,
          dmoney: this.dmoney,
        };
        var api2 = "/api/vueapi.php?action=withdraw";
        this.$http.post(api2, data, { emulateJSON: true }).then((resposne) => {
          console.log(resposne);
          if (resposne.body.code == 0) {
            Dialog.alert({
              message: resposne.body.msg,
            }).then(() => {
              this.$router.push("/Withdraw");
            });
          } else {
            Dialog.alert({
              message: resposne.body.msg,
            }).then(() => {
              this.$router.push("/Wlist");
            });
          }
        });
      }
    },
  },
};
</script>


<style>
</style>