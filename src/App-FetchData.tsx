import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";

interface PersonData {
  name: string;
  age: number;
  count: number;
}

function AppFetchData() {
  const [personData, setPersonData] = useState<PersonData>({
    name: "",
    age: 0,
    count: 0,
  });

  const onFetchPersonData = () => {
    Axios.get(`https://api.agify.io/?name=${personData.name}`).then((res) => {
      console.log(res.data);
      setPersonData(res.data);
    });
  };

  useEffect(() => {
    onFetchPersonData();
  }, []);

  return (
    <div className="App">
      <button onClick={onFetchPersonData}> Fetch Random Person Data </button>
      <input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPersonData({ ...personData, name: event.target.value });
        }}
      ></input>
      <p> Age: {personData.age}</p>
      <p> Count: {personData.count}</p>
      <p> Name: {personData.name}</p>
    </div>
  );
}

export default AppFetchData;
