import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    }
  },
  props: {
    MuiTextField: {
      color: "primary",
      variant: "outlined"
    },
    MuiButton: {
      color: "primary",
      variant: "outlined"
    }
  }
});

export default theme;
