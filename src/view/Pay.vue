<template>
  <div class="content">
    <div class="sh_pic">
      <img src="../assets/images/2019122093857.jpg" width="100%" />
    </div>
    <div class="sh_title">我的小铺</div>

    <div class="weui-wepay-pay">
      <div class="weui-wepay-pay__bd">
        <div class="weui-wepay-pay__inner">
          <h1 class="weui-wepay-pay__title">付款金额(元)</h1>
          <div class="weui-wepay-pay__inputs">
            <strong class="weui-wepay-pay__strong">￥</strong>
            <input id="paymoney" class="weui-wepay-pay__input" placeholder="请输入金额" />
          </div>
          <div class="weui-wepay-pay__intro">可用积分元</div>
        </div>
      </div>
      <div class="weui-wepay-pay__ft">
        <div class="weui-wepay-pay__btn" style="text-align:center">
          <img
            class="weui-btn"
            src="https://act.weixin.qq.com/static/cdn/img/wepayui/0.1.1/wepay_logo_default_gray.svg"
            alt
            height="16"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import "../assets/css/pay.css";
export default {};
</script>




<style>
</style>