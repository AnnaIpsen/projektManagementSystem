/* src/App.js */
// import React, { useEffect, useState } from "react";
import "./App.css";

import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });


const App = () => {



  return (
      <div >
        <ThemeProvider theme={theme}>
      
      <h2>Amplify Todos</h2>
      <Button variant="contained" color="secondary">Hello material UI</Button>
      

    </ThemeProvider>
    </div>
  );
};



export default App;
