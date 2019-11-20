import React from "react";

const OutputList = ({ data = null }) => {
  console.log(data);
  return (
    <div className="OutputList">
      OutputList
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default OutputList;
