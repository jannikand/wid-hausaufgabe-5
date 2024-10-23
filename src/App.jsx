import "./App.css";
import { useState } from "react";
import { Tabelle } from "./Tabelle";
import { Dropdown } from "./Dropdown";
import geoharvester from "./geoharvester.png";
import data from "./data/tableData.json";
import { SliderScore } from "./SliderScore";

function Typen_alle(Eigenschaft) {
  let Typen = [];
  let eig = Eigenschaft;
  data.forEach((element) => {
    if (!Typen.includes(element[eig])) {
      Typen.push(element[eig]);
    }
  });
  Typen.sort();
  return Typen;
}

function App() {
  const service_options = ["WMS", "WFS", "WMTS"];
  const anbieter_options = Typen_alle("anbieter");

  const [ServiceSelection, setServiceSelection] = useState("");
  const [AnbieterSelection, setAnbieterSelection] = useState("");
  const [ScoreSelection, setScoreSelection] = useState(0);

  return (
    <div className="App">
      <div className="App-header">
        <img src={geoharvester} height="50px" />
        <h1 id="HeaderText">Ein Katalog für Schweizer Geodienste</h1>
        <div id="Steuerelemente">
          <SliderScore setScore={setScoreSelection} />
          <Dropdown
            options={service_options}
            setoption={setServiceSelection}
            placeholder="Service auswählen"
          />
          <Dropdown
            options={anbieter_options}
            setoption={setAnbieterSelection}
            placeholder="Anbieter auswählen"
          />
        </div>
      </div>
      <div>
        <Tabelle
          filterAnbieter={AnbieterSelection}
          filterService={ServiceSelection}
          filterScore={ScoreSelection}
        />
      </div>
    </div>
  );
}

export default App;
