import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  if (!pets.length) {
    return <h2>No pet found</h2>;
  }
  return (
    <div className="search">
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          id={pet.id}
          state={pet.state}
          city={pet.city}
          description={pet.description}
          images={pet.images}
        />
      ))}
    </div>
  );
};

export default Results;
