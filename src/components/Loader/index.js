import React from 'react';
import IconChargingBulb from '../icons/ChargingBulb';

import './styles.css';

const Loader = () => {
  return <div className="loader">
    <IconChargingBulb />
    <h2 className="loader-text">Powering up...</h2>
  </div>
}

export default Loader;
