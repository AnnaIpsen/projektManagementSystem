/* src/App.js */
// import React, { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/navigation"

import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#231F20",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2C2829",
      contrastText: "#fff",
    },
    red: {
      main: "#785964",
      contrastText: "#fff",
    },
    blue: {
      main: "#82A7A6",
      contrastText: "#000",
    },
    progress: {
      main: "#E3E48C",
      contrastText: "#000",
    },
    success: {
      main: "#A9DAA4",
      contrastText: "#000",
    },
    grey: {
      main: "#D9D9D9",
      contrastText: "#000",
    },
  },
  components: {
    Navigation: {
      stylesOverrides: {
        backgroundColor: 'blue',
        padding: '10rem'
      },
    },
  },
});

const App = () => {
  return (
    <div style={{display: 'flex', flexDirection:'row'}}>
      <ThemeProvider theme={theme}>
        <Navigation></Navigation>
        <div style={{display: 'flex', flexDirection:'column', padding: '5rem'}}>
          <h2>Amplify Todos</h2>
          <Button variant="contained" color="red" light>
            Hello material UI
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
