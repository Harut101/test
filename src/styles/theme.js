import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: "light",
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#A91079",
    },
    secondary: {
      main: "#570A57",
    },
    success: {
      main: "#4E9F3D",
    },
    warning: {
      main: "#D89216",
    },
    error: {
      main: "#FF0000",
    },
  },

  appBg: "#1A222C",
  elementBg: "#2A303F",
});

export default theme;
