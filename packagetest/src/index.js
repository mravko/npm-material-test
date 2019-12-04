import React from "react";
import Button from "@material-ui/core";

const ReactColorSquare = props => {
  const { width, height, color, text } = props;
  return (
    <div
      style={{
        width: width || 100,
        height: height || 100,
        backgroundColor: color || "blue"
      }}
    >
      {text}
    </div>
  );
};

const WrappedMaterialUiButton = props => {
  return <Button>test</Button>;
};

export { ReactColorSquare, WrappedMaterialUiButton };
