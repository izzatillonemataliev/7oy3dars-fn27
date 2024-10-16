import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Agar sizda uslub fayli bo'lsa, uni shu yerda import qilishingiz mumkin

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
