import React, { useState } from "react";
import LiveLocation from "./LiveLocation";
import SearchLocation from "./SearchLocation";

const App = () => {
  const [view, setView] = useState("live"); // "live" or "search"

  return (
    <div>
      <button onClick={() => setView("live")}>Show My Location</button>
      <button onClick={() => setView("search")} style={{ marginLeft: "10px" }}>
        Search Location
      </button>

      {view === "live" && <LiveLocation />}
      {view === "search" && <SearchLocation />}
    </div>
  );
};

export default App;
