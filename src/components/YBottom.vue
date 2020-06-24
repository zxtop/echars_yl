<template>
    
    <div class="aleftboxtbott" :style="bg">
        <h2 class="title">矛盾纠纷地区统计</h2>
        <div class="lefttoday_tit height ht"><p class="fl">状态：已调节</p><p class="fr">时间段：2018-06-10 至 2018-06-14</p></div>
        <div id="aleftboxtbott" class="aleftboxtbott_cont" ref="aleftboxtbott_cont"></div>
    </div>
    
</template>

<script>
import echarts from 'echarts';
export default {
    data () {
        return {
            bg:{
                backgroundImage: "url(" + require("../../static/images/aleftboxtbott.png") + ")",
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
            let dom = this.$refs.aleftboxtbott_cont;
            let myChart = this.$echarts.init(dom);
            myChart.setOption({
                
                color: ['#7ecef4'],
      
                backgroundColor: 'rgba(1,202,217,.2)',
                grid: {
                    left: 20,
                    right: 20,
                    top: 13,
                    bottom: 6,
                    containLabel: true
                },


                xAxis: {
                    type: 'value',
                    axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }
                    },
                    splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0)'
                    }
                    },
                    axisLabel: {
                    color: "rgba(255,255,255,0)"
                    },
                    boundaryGap: [0, 0.01]
                },


                yAxis: {
                    type: 'category',
                    axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.5)'
                    }
                    },
                    splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                    },
                    axisLabel: {
                    color: "rgba(255,255,255,.5)"
                    },
                    data: ['未调节', '调节中', '未调节']
                },


                series: [{
                    name: '2011年',
                    type: 'bar',
                    barWidth: 30,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                            1, 0, 0, 1,
                            [   
                                {
                                offset: 0,
                                color: 'rgba(230,253,139,.7)'
                                },
                                {
                                offset: 1,
                                color: 'rgba(41,220,205,.7)'
                                }
                            ]
                            )
                        }

                    },
                    data: [18203, 23489, 29034]
                }]


            })
            

        }
    }
}
</script>