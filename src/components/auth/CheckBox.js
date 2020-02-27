import React, { useState } from "react";
import "./Checkbox.css";

const RememberMe = () => {
  const [checkBoxes, setCheckBoxes] = useState( {checked: ""} );
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = event => {
    const stateToChange = { ...checkBoxes };
    stateToChange[event.target.id] = event.target.checked;
    setCheckBoxes(stateToChange);
  };

  const handleBoxChange = (event) => {

  };

    return (
    <div className="checkbox-group">
      <label>Remember Me</label>
      <input
        className="form-checkbox"
        id="rememberMe"
        onChange={handleCheckBoxChange}
        checked=""
        type="checkbox"
        disabled={isChecked}
        onClick={handleBoxChange}
      />
    </div>
  );
};

export default RememberMe
