/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const BarChart = () => {
  useEffect(() => {
    let chartDom = document.getElementById('main1')!;
    let myChart = echarts.init(chartDom);
    myChart.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    })
  }, [])

  return (
    <div id='main1' style={{ width: 400, height: 400 }}> </div >
  )
}

export default BarChart;