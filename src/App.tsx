import React from 'react';
import '@fontsource/roboto';
import './styles/global.css';
import { HeaderComponent } from './components/header/header.component';
import { Dashboard } from './pages/Dashboard';

function App(): JSX.Element {
  return (
    <>
      <HeaderComponent />
      <Dashboard />
    </>
  );
}

export default App;
