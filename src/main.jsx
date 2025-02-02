import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import UserContext from './context/userContext';
import CaptainDataContext  from './context/CapatainContext';


ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//   <Router>
//     <App />
//   </Router>
// </React.StrictMode>

 <StrictMode>
  <CaptainDataContext>
  <UserContext>
    <Router>
      <App/>
    </Router>
  </UserContext>
  </CaptainDataContext>
 </StrictMode>
);