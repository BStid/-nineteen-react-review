import React from "react";
import Name from "./Name";

function List(props) {
  let names = props.paginatedJedi.map((person, ind) => {
    return (
      <Name key={ind} handleClick={props.handleClick} name={person.name} />
    );
  });
  return (
    <div className="list">
      {names}
      <div>
        <button onClick={() => props.childClickHandler("-")}> Previous </button>
        <button onClick={() => props.childClickHandler("+")}> Next </button>
      </div>
    </div>
  );
}

export default List;
