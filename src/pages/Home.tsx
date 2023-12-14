import { useContext } from "react";
import { AppContext } from "../App";

export function Home() {
  const currentAppContext = useContext(AppContext);

  return (
    <div>
      <h2> This is the Homepage </h2>#
      <h3> Logged User is {currentAppContext?.userName}</h3>
    </div>
  );
}
