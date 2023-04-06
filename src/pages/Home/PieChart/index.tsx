/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'
import * as echarts from 'echarts';

const PieChart = () => {
  useEffect(() => {
    let chartDom = document.getElementById('main2')!;
    let myChart = echarts.init(chartDom);

    myChart.setOption({
      title: {
        text: '',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    })
  }, [])
  return (
    <div id='main2' style={{ height: 400, width: 400 }}></div>
  )
}
export default PieChart;