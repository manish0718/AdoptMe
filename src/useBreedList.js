import React, { useEffect, useState } from "react";

const localCache = {};

const useBreedList = (animal) => {
  const [breedList, setBreedList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function requestBreedList() {
    setLoading(true);
    const res = await fetch(
      `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    );
    const json = await res.json();
    setLoading(false);
    localCache[animal] = json.breeds;
    setBreedList(localCache[animal]);
  }

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }
  }, [animal]);

  return [breedList, loading];
};

export default useBreedList;
