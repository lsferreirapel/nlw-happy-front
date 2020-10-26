import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './contexts/auth';
import Routes from './routes'

import 'leaflet/dist/leaflet.css'
import './styles/global.css';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}
