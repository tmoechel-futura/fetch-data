import { useContext } from "react";
import { AppContext } from "../App";

export function ChangeProfile() {
  const currentAppContext = useContext(AppContext);

  return (
    <>
      <h3> {currentAppContext?.userName}</h3>
      <input
        onChange={(event) => {
          currentAppContext?.setUserName(event.target.value);
        }}
      />
    </>
  );
}
