import React from "react";
import { Link } from "react-router-dom";

const Pet = (props) => {
  const { id, name, animal, breed, state, city, description, images } = props;

  let hero = "http://pets-images.dev-apis.com/pets/dog25.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <img src={hero} alt={name} className="image-container " />
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {city}, {state}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;

// create 5 more components
// App.js => Test1.js => Test2.js => Test3.js => Test4.js

// create one variable on app.js
// display that one variable on each component
