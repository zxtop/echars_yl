<template>
  <div class="y_top">

    <div class="arightboxtop" :style="bg">
      <h2 class="tith2">警力分析</h2>
      <div class="lefttoday_tit" style="border-bottom: 1px solid #03808c;">
        <p class="fl">状态：已调节</p>
        <p class="fr">时间段：2018-06-10</p>
      </div>
      <div class="left2_table">
        <ul>
          <li>
            <p class="fl">
              <b>康定市公安局</b>
              <br />村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。
              <br />
            </p>
            <p class="fr pt17">2018-06-22</p>
          </li>
          <li class="bg">
            <p class="fl">
              <b>康定市公安局</b>
              <br />村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。
              <br />
            </p>
            <p class="fr pt17">2018-06-22</p>
          </li>
          <li>
            <p class="fl">
              <b>康定市公安局</b>
              <br />村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。
              <br />
            </p>
            <p class="fr pt17">2018-06-22</p>
          </li>
          <li class="bg">
            <p class="fl">
              <b>康定市公安局</b>
              <br />村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。
              <br />
            </p>
            <p class="fr pt17">2018-06-22</p>
          </li>
          <li>
            <p class="fl">
              <b>康定市公安局</b>
              <br />村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。
              <br />
            </p>
            <p class="fr pt17">2018-06-22</p>
          </li>
          <li class="bg">
            <p class="fl">
              <b>康定市公安局</b>
              <br />村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。
              <br />
            </p>
            <p class="fr pt17">2018-06-22</p>
          </li>
          
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
        bg:{
            backgroundImage: "url(" + require("../../static/images/arightboxtop.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize:"100% 100%"
        }
    };
  }
};
</script>