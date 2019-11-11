import React from 'react';
import cx from 'classnames';

import './styles.css';

const IconChargingBulb = ({animate = true, width = 250, height = 250} = {}) => {
  const classname = cx('icon-charging-bulb', {animate});

  return <svg className={classname} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" x="0px" y="0px">
    <title>Charging Bulb</title>
    <path d="M42,98H58A12,12,0,0,0,70,86V78.61l1.34-4.25A58.34,58.34,0,0,1,79.57,58.5a36,36,0,1,0-59,.12,57.65,57.65,0,0,1,8.14,15.73L30,78.61V86A12,12,0,0,0,42,98ZM62,86a4,4,0,0,1-4,4H42a4,4,0,0,1-4-4V78H62ZM27.07,54A27.66,27.66,0,0,1,22,38,28,28,0,1,1,73,53.92,68.23,68.23,0,0,0,64.43,70H35.58A67.42,67.42,0,0,0,27.07,54Z"></path>
    <path d="M42,46h9.53L46.42,56.21a4,4,0,0,0,1.79,5.37A4.12,4.12,0,0,0,50,62a4,4,0,0,0,3.58-2.21l8-16A4,4,0,0,0,58,38H48.47l5.11-10.21a4,4,0,1,0-7.16-3.58l-8,16A4,4,0,0,0,42,46Z"></path>
  </svg>
}

export default IconChargingBulb;
