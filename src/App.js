import React, { useState } from "react";
import Importer from "./Importer";
import OutputList from "./OutputList";
import ErrorBoundary from './ErrorBoundary';

export const App = () => {
  const [data, setData] = useState({});
  const [showWinners, setShowWinners] = useState(false);

  return (
    <div className="App">
      <ErrorBoundary>
        <Importer data={data} setData={setData} setShowWinners={setShowWinners} />
        <OutputList inputData={data} showWinners={showWinners} />
      </ErrorBoundary>
    </div>
  );
};
