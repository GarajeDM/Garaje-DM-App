import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa el cliente de ReactDOM
import './index.css'; // Importa estilos CSS globales (lo crearemos vacío)
import App from './App'; // Importa tu componente principal App

// Crea un 'root' de React que se enlaza al div con id="root" en tu index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza tu componente App dentro de ese root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
