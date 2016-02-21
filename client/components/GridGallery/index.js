import React, { Component } from 'react'
import ComponentGallery from 'react-component-gallery'

class Header extends Component {

  render() {
    const {images} = this.props
    return (
      <ComponentGallery
        className={"imageGallery"}
        margin={5}
        noMarginBottomOnLastRow={false}
        widthHeightRatio={1}
        targetWidth={300}>
        {

          images.map((item) => {
            return item.url ? <img src={item.url} /> : ""
          })
        }
      </ComponentGallery>
    )
  }
}

export default Header
