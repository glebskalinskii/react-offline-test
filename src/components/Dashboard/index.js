import React, { useState } from 'react';
import Chart from '../Chart';

import './styles.css';

const Dashboard = ({ data }) => {

  const [activeIndex, setActiveIndex] = useState(null);

  const COLORS = [
    '#6aedc7',
    '#39c2c9',
    '#ffce00',
    '#ffa71a',
    '#f866b9',
    '#998ce3',
    '#206953',
    '#f9e9c5',
    '#fb8825',
    '#45494E',
  ];
  
  const generationmixWithKeys = data.generationmix
    .map((energyUnit, index) => ({...energyUnit, colorKey: COLORS[index % COLORS.length]}));

  return <div className="power-dashboard">
    <Chart
      data={generationmixWithKeys}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
    />
  </div>
}

export default Dashboard;
