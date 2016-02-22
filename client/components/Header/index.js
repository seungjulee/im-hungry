import React, { Component } from 'react'
import GeoSuggest from 'react-geosuggest'
import RaisedButton from 'material-ui/lib/raised-button'
import style from './style.css'

class Header extends Component {
  handleSave(text) {
    console.log(text)
    if (text.length) {
      this.props.addLocation(text.label)
    }
  }

  render() {
    const fixtures = [
      {label: 'Mission District, San Francisco, CA', location: {lat: 37.7599034, lng: -122.4343564}},
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
        <h1 styles={styles.h1}>{"I AM HUNGRY!"} </h1>
        <h5 styles={styles.h5}>{"Where Are You At?"}</h5>
        <GeoSuggest
          fixtures={fixtures}
          placeholder="San Francisco, CA"
          onSuggestSelect={this.props.addLocation}
          />
        <div className={style.normal}>

        </div>
      </section>
    )
  }
}

export default Header
