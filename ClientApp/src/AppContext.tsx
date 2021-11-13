import React, { useState } from "react";

const AppContext = React.createContext(null);

function AppContextProvider(props: { children: JSX.Element }) {
  const [viewNav, setViewNav] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);

  function toggleNav() {
    setViewNav(!viewNav);
  }

  function changeCurrentSection(value: number) {
    setCurrentSection(value);
  }

  function getDefaultState() {
    return {
      viewNav,
      toggleNav,
      currentSection,
      changeCurrentSection,
    };
  }
  const state = getDefaultState();

  return (
    // @ts-ignore
    <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
