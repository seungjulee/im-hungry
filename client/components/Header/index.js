import React, { Component } from 'react'
import GeoSuggest from 'react-geosuggest'
import RaisedButton from 'material-ui/lib/raised-button'
import style from './style.css'

class Header extends Component {
  handleSave(text) {
    if (text.length) {
      this.props.addLocation(text.label)
    }
  }

  render() {
    const fixtures = [
      {label: 'Little Italy, San Francisco, CA', location: {lat: 37.8007601, lng: -122.4283141}},
      {label: 'Mission Dolores Park, San Francisco, CA', location: {lat: 37.7597727, lng: -122.4292517}},
      {label: 'SoMa, San Francisco, CA', location: {lat: 37.7808144, lng: 122.419927}},
      {label: 'Chelsea, New York, NY', location: {lat: 40.747198, lng: -74.007082}}
    ];
    const styles = {
      container: {
        textAlign: 'center',
        paddingTop: 200,
      },
    };
    return (
      <section>
        <h1 styles={styles.h1}>{"HUNGRY?"} </h1>
        <h5 styles={styles.h5}>{"Where Are You At?"}</h5>
        <GeoSuggest
          fixtures={fixtures}
          placeholder="San Francisco, CA"
          onSuggestSelect={this.props.addLocation}
          />
      </section>
    )
  }
}

export default Header
