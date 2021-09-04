import React from "react";
import Cards from "./Cards";

function Wheel(props) {
  const cardsList = props.element.map((e) => {
    return (
      <Cards
        key={e.id}
        element={e.color}
        id={e.id}
        status={props.status}
        first={props.first}
      />
    );
  });

  return (
    <div className="wheel">
      <div className="wheel-line"></div>
      {cardsList}
    </div>
  );
}

export default Wheel;
