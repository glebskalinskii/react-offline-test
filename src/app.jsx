import React from 'react';
import Loader from './components/Loader';
import useFetch from './hooks/useFetch';
import { getGenerationData } from './modules/EnergyDataService';

import './styles/app.css';

const App = () => {

  const {data, loading, error} = getGenerationData();

  if (loading) {
    return <div className="power-dashboard">
      <Loader />;
    </div>
  }

  if (error) {
    return <div className="power-dashboard">
      <h2>Oops there was an error...</h2>
    </div>
  }

  return <div className="power-dashboard">
    {JSON.stringify(data)}
  </div>
}

export default App;
