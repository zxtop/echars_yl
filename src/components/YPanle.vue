<template>
    <div class="aleftboxtmidd" :style="bg">
        <h2 class="title">矛盾纠纷地区统计</h2>
        <div class="lefttoday_tit height ht"><p class="fl">状态：已调节</p><p class="fr">时间段：2018-06-10 至 2018-06-14</p></div>
        <div id="aleftboxtbott" class="aleftboxtmiddcont" ref="aleftboxtbott"></div>
    </div>
</template>

<script>
import echarts from 'echarts';

export default {
    data () {
        return {
            bg:{
                backgroundImage: "url(" + require("../../static/images/aleftboxtmidd.png") + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize:"100% 100%"
            }
        }
    },
    mounted () {
        this.initChart();
    },
    methods: {
        initChart(){
            let dom = this.$refs.aleftboxtbott;
            let myChart = this.$echarts.init(dom);
            // console.log(this.$echarts,'dddd')
            myChart.setOption({
                
                color: ['#76c4bf', '#e5ffc7', '#508097', '#4d72d9'],
                backgroundColor: 'rgba(1,202,217,.2)',
                grid: {
                  left: 10,
                  right: 40,
                  top: 20,
                  bottom: 0,
                  containLabel: true
                },
                // legend: {
                //     x : 'center',
                //     y : '70%',
                //     textStyle:{
                //       fontSize: 10,
                //       color:'rgba(255,255,255,.7)'
                //     },
                //     data:['康定市','丹巴县','甘孜县','理塘县']
                // },
                calculable: true,
                series: [

                  {
                    name: '面积模式',
                    type: 'pie',
                    radius: [5, 60],
                    center: ['50%', '55%'],
                    roseType: 'area',
                    data: [{
                        value: 10,
                        name: '康定市'
                      },
                      {
                        value: 5,
                        name: '丹巴县'
                      },
                      {
                        value: 15,
                        name: '甘孜县'
                      },
                      {
                        value: 25,
                        name: '理塘县'
                      }
                    ]
                  }
                ]
            })
        }
    }
}
</script>