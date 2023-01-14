import React, { useEffect } from "react";
import "./sass/App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Routes from "./componentes/routes";
const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <main className="d-flex flex-column align-items-center">
      <Routes />
    </main>
  );
};

export default App;
