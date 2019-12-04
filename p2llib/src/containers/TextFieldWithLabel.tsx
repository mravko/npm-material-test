import * as React from "react";
import TextField from "@material-ui/core/TextField";

const TextFieldWithLabel = (props: any = {}) => {
  return (
    <div>
      <div>This is a button with a label for p2l</div>
      <TextField {...props} />
    </div>
  );
};

export default TextFieldWithLabel;
