import React from "react";
import "./App.css";
import { fetchData } from "./api";
import covidlogo from "./assets/covidlogo.png";

import { Cards, Charts, CountryPicker } from "./components/files";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
    console.log(fetchedData);
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className="container">
        <div className="header">
          <h1>
            C
            <span>
              <img src={covidlogo} />
            </span>
            VID REPORTS
          </h1>
        </div>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}
export default App;
