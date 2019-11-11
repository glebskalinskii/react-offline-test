import React from 'react';
import Loader from './components/Loader';

import './styles/app.css';

const App = () => {
  return <div className="power-dashboard">
    <h1>UK Energy Mix</h1>
    <Loader />
  </div>
}

export default App;
