import React from "react";

function CustomInput(props) {
  return (
    <div>
      <input
        onChange={props.onChange}
        className={props.className}
              placeholder={props.placeholder}
              type={props.type}
      />
    </div>
  );
}

export default CustomInput;
