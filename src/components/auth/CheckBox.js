import React, { useState } from "react";
import "./Checkbox.css";
import Checkbox from "react-router-dom";

// const RememberMe = () => {
//   const [checkBoxes, setCheckBoxes] = useState( {checked: ""} );
//   const [isChecked, setIsChecked] = useState(false);

//   const handleCheckBoxChange = event => {
//     const stateToChange = { ...checkBoxes };
//     stateToChange[event.target.id] = event.target.checked;
//     setCheckBoxes(stateToChange);
//   };

//   const handleBoxChange = (event) => {

//   };

//     return (
//     <div className="checkbox-group">
//       <label>Remember Me</label>
//       <input
//         className="form-checkbox"
//         id="rememberMe"
//         onChange={handleCheckBoxChange}
//         checked=""
//         type="checkbox"
//         disabled={isChecked}
//         onClick={handleBoxChange}
//       />
//     </div>
//   );
// };

// export default RememberMe

const RememberMe = () => {
  const [isChecked, setIsChecked] = useState(undefined);
  return (
    <Checkbox isChecked={isChecked} onChange={setIsChecked}>
      Remember me
    </Checkbox>
  );
}
export default RememberMe
