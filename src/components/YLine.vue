<template>
    <div class="yline">
        <!-- <h2 class="title">实时统计折线图</h2> -->
        <div class="yline-cont" ref="ylinecont" :style="bg">

        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            bg:{
                backgroundImage: "url(" + require("../../static/images/ylin_bg.png") + ")",
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
            let dom = this.$refs.ylinecont;
            let myChart = this.$echarts.init(dom);
            myChart.setOption({
                title: {
                    
                    text: '折线图堆叠',
                    textStyle:{
                        color:"#07b6c7"
                    },
                    left:'10%',
                    top:'7%'
                },
                
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    top:'7%',
                    textStyle:{
                        color:'#07b6c7'
                    },
                    data: ['邮件营销', '直接访问', '搜索引擎']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                // toolbox: {
                //     feature: {
                //         saveAsImage: {}
                //     }
                // },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    nameTextStyle:{
                        color:'#fff'
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#fff'
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    splitLine:false,
                    axisLine:{
                        lineStyle:{
                            color:'#fff'
                        }
                    }
                },
                series: [
                    {
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210],
                        itemStyle : {  
                            normal : {  
                                lineStyle:{  
                                    color:'#ff4500',
                                    width:4  
                                }  
                            }  
                        }
                    },
                    
                    {
                        name: '直接访问',
                        type: 'line',
                        stack: '总量',
                        data: [320, 332, 301, 334, 390, 330, 320],
                        itemStyle : {  
                            normal : {  
                                lineStyle:{  
                                    color:'#f1f91e',
                                    width:4  
                                }  
                            }  
                        }
                    },
                    {
                        name: '搜索引擎',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        itemStyle : {  
                            normal : {  
                                lineStyle:{  
                                    color:'#07b6c7',
                                    width:4  
                                } 
                            }  
                        }
                    }
                ]
            })
        }
    }
}
</script>