import React, { useState } from "react";
import Importer from "./Importer";
import OutputList from "./OutputList";

export const App = () => {
  const [data, setData] = useState({});
  const [showWinners, setShowWinners] = useState(false);

  return (
    <div className="App">
      <Importer setData={setData} setShowWinners={setShowWinners} />
      <OutputList inputData={data} showWinners={showWinners} />
    </div>
  );
};
