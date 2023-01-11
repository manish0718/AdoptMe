import React, { useEffect, useState } from "react";
import Pet from "./Pet";
import Results from "./Results";
import useBreedList from "./useBreedList";

const ANIMALS = ["dog", "cat", "bird", "reptile", "rabbit"];
const SearchParams = () => {
  let [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  const [breeds, loading] = useBreedList(animal);

  console.log("breeds", breeds);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    console.log(json);

    setPets(json.pets);
  }

  if (loading) {
    return <h2>Loading ...</h2>;
  }
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label>
          Location
          <input
            value={location}
            type="text"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label>
          Animal
          <select value={animal} onChange={(e) => setAnimal(e.target.value)}>
            <option value=""></option>
            {ANIMALS.map((animal) => (
              <option value={animal}>{animal}</option>
            ))}
          </select>
        </label>

        <label>
          Breed
          <select value={breed} onChange={(e) => setBreed(e.target.value)}>
            <option></option>
            {breeds.map((breed) => (
              <option value={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>

      <Results pets={pets} />
      {/* {pets.map((pet) => (
        <Pet name={pet.name} animal={pet.animal} breed={pet.breed} />
      ))} */}
    </div>
  );
};

export default SearchParams;
