<template>
    <div class="container-left-top" :style="ltBg">
        <h2 class="title">今日矛盾纠纷数据统计</h2>
        <div class="title-area">
            <span>地区：金乡</span>
            <b>2020-02-01</b>
        </div>

        <div class="lefttoday_number">
            <div class="widget-inline-box text-center fl">
                <p>矛盾纠纷</p>
                <h3 class="ceeb1fd" style="color:#eeb1fd;font-size:22px;font-weight:100;line-height:40px">54</h3>
                <h4 class="text-muted pt6">环比<img :src="img_up" height="16">2%</h4>
            </div>


            <div class="widget-inline-box text-center fl">
                <p>已调节</p>
                <h3 class="c24c9ff" style="color:#24c9ff;font-size:22px;font-weight:100;line-height:40px">54</h3>
                <h4 class="text-muted pt6">环比<img :src="img_down" height="16">3%</h4>
            </div>


            <div class="widget-inline-box text-center fl">
                <p>未调节</p>
                <h3 class="cffff00" style="color:#ffff00;font-size:22px;font-weight:100;line-height:40px">4</h3>
                <h4 class="text-muted pt6">环比<img :src="img_down" height="16">3%</h4>
            </div>

            <div class="widget-inline-box text-center fl">
                <p>处理中</p>
                <h3 class="c11e2dd" style="color:#11e2dd;font-size:22px;font-weight:100;line-height:40px">4</h3>
                <h4 class="text-muted pt6">环比<img :src="img_down" height="16">3%</h4>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            ltBg:{
                backgroundImage: "url(" + require("../../static/images/leftb1.png") + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize:"100% 100%"
            },
            // img_down:"../../static/images/icondown.png",
            // img_up:"../../static/images/iconup.png",
            img_down:require("../../static/images/icondown.png"),
            img_up:require("../../static/images/iconup.png")
        }
    }
}
</script>