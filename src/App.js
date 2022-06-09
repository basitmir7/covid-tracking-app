import React from "react";
import "./App.css";
import { fetchData } from "./api";

import { Cards, Charts, CountryPicker } from "./components/files";

class App extends React.Component {
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }
  render() {
    return (
      <div className="App">
        <Cards />
        <CountryPicker />
        <Charts />
      </div>
    );
  }
}
export default App;
