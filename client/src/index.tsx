import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const theme = createTheme({
    palette: {
        mode: 'dark'
    }
})

root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>
);
