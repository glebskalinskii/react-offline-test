import React from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';

import './styles.css';

const Chart = ({ data, activeIndex, setActiveIndex }) => {
  const filteredData = data.filter(energyUnit => energyUnit.perc > 0);

  const renderActiveShape = (props) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, value } = props;

    return (
      <g>
        <text className="chart-text" x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{`${payload.perc}%`}</text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 15}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };

  const mouseEnterHandler = (data, index) => setActiveIndex(index);
  const mouseLeaveHandler = () => setActiveIndex(null);

  return <PieChart width={500} height={500}>
    <Pie 
      dataKey="perc"
      nameKey="fuel"
      data={filteredData} 
      cx={250} 
      cy={250} 
      innerRadius={100}
      outerRadius={200} 
      activeShape={renderActiveShape}
      activeIndex={activeIndex}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      stroke="none"
      paddingAngle={2}
    >
      {
        data.map((energyUnit, index) => <Cell key={energyUnit.fuel} fill={energyUnit.colorKey}/>)
      }
  </Pie>
  </PieChart>
}

export default Chart;
