import React from "react";
import "./App.css";
import { fetchData } from "./api";

import { Cards, Charts, CountryPicker } from "./components/files";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  render() {
    const data = this.state.data;

    return (
      <div className="container">
        <Cards data={data} />
        <CountryPicker />
        <Charts />
      </div>
    );
  }
}
export default App;
