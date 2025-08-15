import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createTheme, ThemeProvider} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#0747a6'
        }
    }
})

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme} >
          <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
