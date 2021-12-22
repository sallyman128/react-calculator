import React from "react";

const History = history => (
  <ul>
    {history.map(computation => <li>{computation}</li>)}
  </ul>
);

export default History;