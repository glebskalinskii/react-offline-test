import React from 'react';
import Loader from './components/Loader';
import useFetch from './hooks/useFetch';
import { getGenerationData } from './modules/EnergyDataService';
import Dashboard from './components/Dashboard';

import './styles/app.css';

const App = () => {

  const {data, loading, error} = getGenerationData();

  if (loading) {
    return <div className="power-dashboard-container">
      <Loader />;
    </div>
  }

  if (error) {
    return <div className="power-dashboard-container">
      <h2>Oops there was an error...</h2>
    </div>
  }

  return <div className="power-dashboard-container">
    <Dashboard data={data} />
  </div>
}

export default App;
