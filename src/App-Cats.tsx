import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";

interface CatData {
  fact: string;
  length: Number;
}

function AppCats() {
  const [catData, setCatData] = useState<CatData>({ fact: "", length: 0 });

  const onFetchCatData = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatData(res.data);
    });
  };

  useEffect(() => {
    onFetchCatData();
  }, []);

  return (
    <div className="App">
      <button onClick={onFetchCatData}> Generate Cat Fact </button>
      <p> {catData.fact}</p>
    </div>
  );
}

export default AppCats;
