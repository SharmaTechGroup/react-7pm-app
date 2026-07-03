import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

import { ButtonDemo } from './components/button-demo/button-demo.jsx';
import { WeatherApp } from './components/weather-app/weather-app.jsx';
import { PropsDemo } from './components/props-demo/props-demo.jsx';
import { ShoppingIndex } from './components/online-shopping/shopping-index.jsx';
import { ContextDemo } from './components/context-demo/context-demo.jsx';
import { ConditionDemo } from './components/condition-demo/condition-demo.jsx';
import { RenderDemo } from './components/render-demo/render-demo.jsx';
import { FormDemo } from './components/form-demo/form-demo.jsx';
import { FormikDemo } from './components/formik-demo/formik-demo.jsx';
import { HookFormDemo } from './components/hook-form-demo/hook-form-demo.jsx';
import { TutorialIndex } from './tutorial/tutorial-index.jsx';
import { FakestoreIndex } from './fakestore/fakestore-index.jsx';
import { CookiesProvider } from 'react-cookie';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes.jsx';

createRoot(document.getElementById('root')).render(
  
   
         
             <RouterProvider router={router} />
         
    
 
)
