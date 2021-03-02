import React from "react";

import "./App.css";
import MainPage from "src/pages/MainPage";
import Header from "src/components/commons/Header";

function App() {
  return (
    <>      
    <Header />
    <div className="pg_app">
      <MainPage />
    </div>
    </>
  );
}

export default App;
