import React from 'react';

import './CountriesList.css';
import { Link, Route } from 'react-router-dom';

class CountriesList extends React.Component {
  render(props) {
    return (
      <ul>
        {props.countries.map((country) => {
          return (
            <div>
              <Link to={`/country/${country.alpha3Code}`}>{country.name.common}</Link>
            </div>
          );
        })}
      </ul>
    );
  }
}
export default CountriesList;