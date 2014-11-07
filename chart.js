<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <title>ECharts</title>
    <!-- 来自百度CDN -->
    <script src="http://s1.bdstatic.com/r/www/cache/ecom/esl/1-6-10/esl.js"></script>
</head>
<body>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom  例如： style="height:300px;width:600px"-->
    <div id="main" style="height:400px"></div>
    <!--
    <div id="main01" style="height:400px"></div>
    -->
    <script type="text/javascript">
        // 路径配置
        require.config({
            paths:{ 
                'echarts' : 'http://echarts.baidu.com/build/echarts',
                'echarts/chart/line' : 'http://echarts.baidu.com/build/echarts'
            }
        });
        
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main')); 
                //var myChart01 = ec.init(document.getElementById('main01')); 
                
                var option = {

                     title : {
                        text: 'Kicetic性能测试结果',
                        subtext: 'IOPS'
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['同步读IOPS']
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {show: true, type: ['line', 'bar']},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['1KB', '2KB', '4KB', '8KB', '16KB', '32KB', '64KB', '128KB', '256KB', '512KB', '1024KB'],
                            /*
                            axisLine:{
                                show: true,
                                lineStyle: {
                                    color: 'green',
                                    type: 'solid'
                                }
                            }
                            */
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: '#eeeeee',
                                    type: 'solid',
                                    width: 1
                                }
                            }
                          
                         }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: '#ffeeff',
                                    type: 'dashed',
                                    width: 1
                                }
                            },
                            splitArea : {
                                show: true,
                                areaStyle:{
                                    color:['rgba(220,220,220,0.3)','rgba(200,200,200,0.3)']
                                }

                            }
                           
                        }
                    ],
                    //设置图表距离顶部的高度
                    grid: {
                        y: 100
                    },
                   
                    series : [
                        {
                            name:'同步读IOPS',
                            type:'line',
                            data:[588.478, 553.898, 525.905, 386.371, 398.916, 349.658, 263.383, 299.6, 127.945, 77.405, 54.59],
                            markPoint : {
                                data : [
                                    {type : 'max', name: '最大值'},
                                    {type : 'min', name: '最小值'}
                                ]
                            },
                            markLine : {
                                data : [
                                    {type : 'average', name: '平均值'}
                                ]
                            }
                        },
                      
                    ]
                };
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
                //myChart01.setOption(option); 

              
            }
        );
    </script>
</body>
