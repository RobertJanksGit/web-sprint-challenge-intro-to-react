import React from "react";

function Character({ name, homeworld, toggleHomeworld, showHomeworld }) {
  // ❗ Add the propss
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div onClick={toggleHomeworld} className="character-card">
      <h3 className="character-name">{name}</h3>
      {showHomeworld && (
        <p>
          Planet: <span className="character-planet">{homeworld}</span>
        </p>
      )}
    </div>
  );
}

export default Character;
