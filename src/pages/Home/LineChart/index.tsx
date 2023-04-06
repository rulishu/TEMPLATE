/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const LineChart = () => {
  useEffect(() => {
    let chartDom = document.getElementById('main')!;
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
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    })
  }, [])

  return (
    <div id="main" style={{ height: 400, width: 400 }}></ div>
  )
}
export default LineChart;