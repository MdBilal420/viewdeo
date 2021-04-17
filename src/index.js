import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { VideoProvider } from '../src/context/video-context'
import { AuthProvider } from '../src/context/auth-context'


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <VideoProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </VideoProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
