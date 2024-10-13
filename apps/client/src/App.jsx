// Importaciones obligatorias
import React, { useState } from 'react'
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import { Header } from './components/layout/private/Header';

// Importar assets

import './assets/fonts/fontawesome-free-6.1.2-web/css/all.css';
import './assets/css/normalize.css';
import './assets/css/styles.css';
import './assets/css/responsive.css';

// Comenzando con la aplicación
export const App = () => {
  return(
    <div className="layout">
      <Header/>
    </div>
    
  )
};

export default App;