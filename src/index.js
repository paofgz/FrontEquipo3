import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Videos from "./Routes/Videos"
import AgentsList from "./Routes/AgentsList"
import 'typeface-roboto'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#9FA8DA',
      main: '#9FA8DA',
      dark: '#9FA8DA',
      contrastText: '#fff',
    },
    secondary: {
      light: '#6F79A8',
      main: '#6F79A8',
      dark: '#6F79A8',
      contrastText: '#000',
    },
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="videos" element={<Videos />} />
        <Route path="agents" element={<AgentsList />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
