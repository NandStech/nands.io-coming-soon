import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import useLocalStorage from "../../hooks/useLocalStorage";

const theme = createMuiTheme();
const themeLight = createMuiTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1:{
      fontSize: '1.5rem',
      fontWeight:'600',
      '@media (min-width:600px)': {
      fontSize: '1.5rem',
      },
      [theme.breakpoints.up('md')]: {
      fontSize: '3.4rem',
      },
  },
  h3:{
      fontSize: '1.0rem',
      fontWeight:'300',
      '@media (min-width:600px)': {
      fontSize: '1.0rem',
      },
      [theme.breakpoints.up('md')]: {
      fontSize: '2.0rem',
      },
  }
  },
  
  palette: {
    type: "light", 
     background:{
       default:'#F1F8FE',
       paper:"#F1F8FE"},
    primary:{
      main:'#F1F8FE',
    },
    secondary:{
      main:'#F8B630',
    },
  },
});

const themeDark = createMuiTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1:{
        fontSize: '1.5rem',
        fontWeight:'600',
        '@media (min-width:600px)': {
        fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
        fontSize: '3.4rem',
        },
    },
    h3:{
        fontSize: '1.0rem',
        fontWeight:'300',
        '@media (min-width:600px)': {
        fontSize: '1.0rem',
        },
        [theme.breakpoints.up('md')]: {
        fontSize: '2.0rem',
        },
    }
  },
  
  palette: {
    type: "dark",
    background:{
      default:"#001625",
      paper:"#032338"
    },
    primary:{
      main:'#001625',
    },
    secondary:{
      main:'#FFCD67',
    },
  },
});

const Theme = (props) => {
  const { children, darkMode } = props;
  const defaultTheme = darkMode ? themeDark : themeLight;
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export const withTheme = (Component) => {
  return (props) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
    return (
      <Theme darkMode={darkMode}>
        <Component {...props} darkMode={darkMode} setDarkMode={setDarkMode} />
      </Theme>
    );
  };
};
