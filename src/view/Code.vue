<template>
  <div class="content" style="position:relative; margin:0px; padding:0px;">
    <div class="ewmbg">
      <img src="../assets/images/ewmbg.jpg" />
    </div>
    <div class="ewm">
      <img :src="url" width="150" height="150" />
    </div>

    <div class="ewm_title">{{sh_name}}</div>

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
      sh_name: "",
      url: "",
    };
  },
  mounted() {
    var sh_id = 3;
    var api1 = "/api/vueapi.php?action=index&sh_id=" + sh_id;
    this.$http.get(api1).then((resposne) => {
      console.log(resposne);
      this.sh_name = resposne.body.sh_name;
      this.url =
        "http://qr.topscan.com/api.php?logo=http://yjq.yunfuzc.cn/renwu/" +
        resposne.body.sh_pic +
        "&text=http://yjq.yunfuzc.cn/mobile/h5pay/index.php?id=" +
        resposne.body.id;
    });
  },
};
</script>


<style>
</style>

