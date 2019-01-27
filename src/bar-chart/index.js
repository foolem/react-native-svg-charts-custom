import React from 'react'
import BarChart from './bar-chart'
import BarChartGrouped from './bar-chart-grouped'

const BarChartGate = (props) => {
    const { data } = props

    return <BarChart { ...props }/>
}

export default BarChartGate
