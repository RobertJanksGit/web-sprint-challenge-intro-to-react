import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character";

const urlPlanets = "http://localhost:9009/api/planets";
const urlPeople = "http://localhost:9009/api/people";

function App() {
  const [planetsData, setPlanetsData] = useState([]);
  const [peopleData, setPeopleData] = useState([]);
  const [showHomeworld, setShowHomeworld] = useState({});

  useEffect(() => {
    axios
      .get(urlPlanets)
      .then((res) => {
        setPlanetsData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(urlPeople)
      .then((res) => {
        setPeopleData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const toggleHomeworld = (id) => {
    setShowHomeworld((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const characterInfo = peopleData.map((char) => {
    const homeworld = planetsData.find(
      (planet) => char.homeworld === planet.id
    );
    return {
      id: char.id,
      name: char.name,
      homeworld: homeworld ? { id: homeworld.id, name: homeworld.name } : null,
    };
  });

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>
        See the README of the project for instructions on completing this
        challenge
      </p>
      {characterInfo.map((char) => (
        <Character
          key={char.id}
          name={char.name}
          homeworld={char.homeworld ? char.homeworld.name : "Unknown"}
          toggleHomeworld={() => toggleHomeworld(char.id)}
          showHomeworld={!!showHomeworld[char.id]}
        />
      ))}
    </div>
  );
}

export default App;

// ❗ DO NOT CHANGE THE CODE BELOWs
if (typeof module !== "undefined" && module.exports) module.exports = App;
