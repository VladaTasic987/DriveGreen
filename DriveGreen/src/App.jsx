// import './App.css'
import './App.scss'

import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './assets/Router';

function App() {
  
  return (
    
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    
  )
}

export default App
