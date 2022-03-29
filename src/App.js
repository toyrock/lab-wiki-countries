import React from 'react'
import './App.css';

import Navbar from './components/Navbar/Navbar'
import CountriesList from './components/CountriesList/CountriesList'
import CountryDetails from './components/CountryDetails/CountryDetails'

import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    console.log("Constructor")
    super(props);

    this.state = {
      countries: [],
    };
  }

  async componentDidMount() {
    console.log("Start")
    const response = await fetch('https://ih-countries-api.herokuapp.com/countries');
    const data = await response.json();
    this.setState({
      countries: data
    })
    console.log("End")
  }

  fetchCountries() {

  }


  render() {
    console.log("Render", this.state.countries)
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">
            {
              this.state.countries === undefined ? <CountriesList /> : <h1> Loading </h1>
            }

          </div>
        </div>



        <Switch>
          <Route path={`/country/:id`} component={CountryDetails} />
        </Switch>

      </div>
    );
  }
}

export default App;