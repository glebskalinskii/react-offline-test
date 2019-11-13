import React from 'react';
import cx from 'classnames';

import './styles.css';

const Legend = ({ data, activeIndex, setActiveIndex }) => {
  const listClassname = cx('legend', {'has-active-item': activeIndex !== null});

  return <ul className={listClassname}>
    {data.map((energyUnit, i) => <li
      className={`legend-item ${activeIndex === i ? 'active' : ''}`}
      key={energyUnit.fuel}
      onMouseEnter={() => setActiveIndex(i)}
      onMouseLeave={() => setActiveIndex(null)}
    >
      <span className="legend-item-key" style={{background: energyUnit.colorKey}}></span>
      <span className="legend-item-fuel">{energyUnit.fuel}</span>
      <span>{`${energyUnit.perc}%`}</span>
    </li>)}
  </ul>
}

export default Legend;
