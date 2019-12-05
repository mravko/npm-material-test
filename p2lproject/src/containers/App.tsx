import * as React from "react";
import {
  TextFieldWithLabel,
  ButtonWithLabel,
  TextField,
  Typography
} from "p2llib";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontSize: 50
  }
});

const App2 = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography>Theme test</Typography>
        <TextFieldWithLabel />
        <ButtonWithLabel variant="contained" color="primary" />
        <TextField></TextField>
      </ThemeProvider>
    </div>
  );
};

export default App2;
