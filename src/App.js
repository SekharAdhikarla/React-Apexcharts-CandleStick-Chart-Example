import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ApexCandleStick from "./Components/ApexCandleStick";
function App() {
  return (
    <div className="container mt-3">
      <h2 className="mb-3">React Apexcharts CandleStick Chart Example</h2>
      <ApexCandleStick />
    </div>
  );
}
export default App;
