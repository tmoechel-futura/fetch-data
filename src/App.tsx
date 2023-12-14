import React, { useState, createContext, useContext } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Root } from "./Root";

import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Profile } from "./pages/Profile";

interface IAppContext {
  userName: string;
  setUserName : React.Dispatch<React.SetStateAction<string>>
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  const [userName, setUserName] = useState<string>("");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <AppContext.Provider value={ {userName, setUserName}}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
