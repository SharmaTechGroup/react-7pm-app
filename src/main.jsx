import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

import { ButtonDemo } from './components/button-demo/button-demo.jsx';

createRoot(document.getElementById('root')).render(
  
     <ButtonDemo />
 
)
