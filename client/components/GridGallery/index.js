import React, { Component } from 'react'
import AutoResponsive from 'autoresponsive-react'
import style from './style.css'
import TextTruncate from 'react-text-truncate'

let arrayList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let styleList = {};
let getItemStyle = function() {
  return {
    width: 200,
    height: 200,
    color: '#3a2d5b',
    cursor: 'default',
    borderRadius: 5,
    boxShadow: '0 1px 0 rgba(255,255,255,0.5) inset',
    backgroundColor: '#5c439b',
    borderColor: '#796b1d',
    fontSize: '80px',
    lineHeight: '100px',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadow: '1px 1px 0px #816abe'
  };
}

const events = [];

arrayList.map(function(i) {
  styleList[i] = getItemStyle();
});

class GridGallery extends Component {
  constructor(props) {
    super(props);
    this.bindEventMapContent();
    this.state = {
      styleList: styleList
    };
  }

  bindEventMapContent() {
    events.forEach(i => {
      this[i] = this[i].bind(this);
    });
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        containerWidth: React.findDOMNode(this.refs.container).clientWidth
      });
    }, false);
  }
  getAutoResponsiveProps() {
    return {
      itemMargin: -10,
      containerWidth: this.state.containerWidth || document.body.clientWidth,
      itemClassName: 'item',
      gridWidth: 258,
      transitionDuration: '.5'
    };
  }

  render() {
    const {businesses} = this.props

    if (businesses[0].text === "InitialState"){
      return (
        <h6 styles={style.h6}>
          {"I'm sorry!"}
          <br></br>
          {"Due to incrased traffic, Yelp has blocked the crawling server."}
          <br></br>
          {"I meant to do this project for fun for close friends."}
          <br></br>
          {"I respect Yelp's rules, and I will continue work on it if Yelp opens its photos API."}
          <br></br>
        </h6>

      )
    }


    const grids = businesses.map((business) => {
      return business.photo_urls.map(url=>{
        let style = {width: 258, height: 258};
        return (
          <div className={"album item"} style={style}>
            <img className="a-cover" src={url}/>
            <p className="a-layer">
              <a href={business.business_url}><span className="al-brand">{business.business_name}</span> </a>
              <span className="al-title">{ <img src={business.rating_img_url}/> }</span>
              <span className="al-count">{business.display_address[0]}</span>
            </p>
          </div>
        )
      })
    })
    const finalGrids = grids.reduce((prev, curr) => {
      return prev.concat(curr)
    })

    return (
      <div className="albumPanel" >
        <AutoResponsive ref="container" {...this.getAutoResponsiveProps()}>
          {
            finalGrids
          }
        </AutoResponsive>
      </div>
    )


  }
}

export default GridGallery
