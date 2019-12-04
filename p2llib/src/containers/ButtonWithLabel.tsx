import * as React from "react";
import Button from "@material-ui/core/Button";

const ButtonWithLabel = (props: any = {}) => {
  return (
    <div>
      <div>This is a button with a label for p2l</div>
      <Button {...props}>Default</Button>
    </div>
  );
};

export default ButtonWithLabel;
