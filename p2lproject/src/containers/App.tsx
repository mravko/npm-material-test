import * as React from "react";
import Select from "../reusable/Select";
import Button from "@material-ui/core/Button";
import { useState } from "react";

const App = () => {
  const [show, setshow] = useState(true);
  return (
    <div>
      <Button
        style={{}}
        color="secondary"
        onClick={() => {
          setshow(!show);
        }}
      >
        {!show ? "Show" : "Hide"}
      </Button>
      {show ? (
        <>
          <Select storeVariableName="reused1"></Select>
          <Select storeVariableName="reused2"></Select>
          <Select storeVariableName="reused3"></Select>
        </>
      ) : null}
    </div>
  );
};

export default App;
