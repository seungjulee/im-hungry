import React, { Component } from 'react'
import LocationTextInput from '../LocationTextInput'

class Header extends Component {
  handleSave(text) {
    if (text.length) {
      this.props.addLocation(text)
    }
  }

  render() {
    return (
      <header>
        <h1>What Do You Want To Eat?</h1>
        <LocationTextInput
          newLocation
          onSave={::this.handleSave}
          placeholder="What's your Zipcode?" />

      </header>
    )
  }
}

export default Header
