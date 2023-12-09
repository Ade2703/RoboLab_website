import CssBaseline from '@mui/material/CssBaseline';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider} from "@mui/material/styles";
//import './styling/index.css'

const theme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#272727',
    },
    primary: {
      main: '#FFCA18',
    },
  },
  typography: {
    fontFamily: [
      'Orbitron',
      'sans-serif'
    ].join(','),
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 800,
  },
  shape: {
    borderRadius:40
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  // </React.StrictMode>
);
