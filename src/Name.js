import React from "react";

function Name(props) {
  return (
    <div onClick={() => props.handleClick(props.name)} className="name">
      {props.name}
    </div>
  );
}

export default Name;
