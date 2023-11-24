import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { Divh, Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Formulario } from './Components/Form/Formulario';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Formulario />
    <Footer />       
  </React.StrictMode>
);

//reportWebVitals();
