import React, {useState} from 'react'
import Chart from 'react-apexcharts'
import './index.css'

function Charts() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020],
      },
    },
    series: [
      {
        name: 'Earthquakes',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: 'Floods',
        data: [30, 40, 45, 40, 49, 70, 100, 91],
      },
      {
        name: 'Gas Tragedy',
        data: [30, 40, 50, 45, 25, 70, 100, 91],
      },
    ],
  })

  return (
    <div>
      <Chart
        options={state.options}
        series={state.series}
        type="area"
        width={500}
      />
    </div>
  )
}

export default Charts
