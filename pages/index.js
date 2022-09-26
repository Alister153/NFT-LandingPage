import { createContext, useContext, useEffect, useState } from "react";
import Main from "./main";
import Navbar from "./navbar";

export const screenWidth = createContext();
export default function Home() {
  const [screenW, setScreenW] = useState();
  useEffect(() => {
    setScreenW(window.screen.width);
    window.addEventListener("resize", () => {
      setScreenW(window.screen.width);
    });
  }, []);
  return (
    <screenWidth.Provider value={[screenW, setScreenW]}>
      <div className="main--wrapper">
        <h1 className="bg-text">MARKET NFT</h1>
        <div className="main--container">
          <Navbar></Navbar>
          <Main></Main>
        </div>
      </div>
    </screenWidth.Provider>
  );
}
