
import React, { useState, useEffect } from 'react';
import ClickCounter from './modules/ClickCounter';
import UserDataCapture from './modules/UserDataCapture';
import CanineAgeCalculator from './modules/CanineAgeCalculator';
import WeatherWidget from './modules/WeatherWidget';

const App = () => {
  const [modules, setModules] = useState([
    { id: 1, name: 'Click Counter', component: ClickCounter },
    { id: 2, name: 'User Data Capture', component: UserDataCapture },
    { id: 3, name: 'Canine Age Calculator', component: CanineAgeCalculator },
    { id: 4, name: 'Weather Widget', component: WeatherWidget },
  ]);

  useEffect(() => {
    // Fetch user location or perform any other setup here
  }, []);

  return (
    <div>
      <h1>Dynamic Module Management</h1>
      <div>
        {modules.map((module) => {
          const ModuleComponent = module.component;
          return <ModuleComponent key={module.id} />;
        })}
      </div>
    </div>
  );
};

export default App;
