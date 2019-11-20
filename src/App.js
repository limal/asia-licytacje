import React, { useState } from "react";
import Importer from "./Importer";
import OutputList from "./OutputList";

export const App = () => {
  const [data, setData] = useState({});

  return (
    <div className="App">
      <Importer setData={setData} />
      <OutputList data={data} />
    </div>
  );
};
