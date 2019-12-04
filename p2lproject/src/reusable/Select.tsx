import * as React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useEffect } from "react";

const Select = ({
  value = 1,
  onChangeValue = () => {},
  onCleanup = () => {}
}) => {
  useEffect(() => {
    return () => {
      onCleanup();
    };
  }, [onCleanup]);
  return (
    <div>
      <Typography variant="body1" gutterBottom>
        {value}
      </Typography>
      <Button
        onClick={() => onChangeValue()}
        color="primary"
        variant="contained"
      >
        +
      </Button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  value: state[ownProps.storeVariableName]
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeValue: () => dispatch(changeValueAction(ownProps.storeVariableName)),
  onCleanup: () => dispatch(cleanupValueAction(ownProps.storeVariableName))
});
export default connect(mapStateToProps, mapDispatchToProps)(Select);

const changeValueAction = storeVariableName => ({
  type: "CHANGE_VALUE:" + storeVariableName
});

const cleanupValueAction = storeVariableName => ({
  type: "CLEANUP_VALUE:" + storeVariableName
});

const reusableReducerFactory = storeVariableName => {
  return (state = 1, action) => {
    if (action.type === "CHANGE_VALUE:" + storeVariableName) {
      return state + 1;
    }
    if (action.type === "CLEANUP_VALUE:" + storeVariableName) {
      return 1;
    }
    return state;
  };
};

export const selectReducer = storeVariableName => ({
  [storeVariableName]: reusableReducerFactory(storeVariableName)
});
