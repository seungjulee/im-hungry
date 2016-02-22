import React, { Component } from 'react'
import AutoResponsive from 'autoresponsive-react'
import style from './style.css'

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
        <section>
          <div className="albumPanel" >
            <AutoResponsive ref="container" {...this.getAutoResponsiveProps()}>
            </AutoResponsive>
          </div>
        </section>
      )
    }

    const grids = businesses.map((business) => {
      return business.photo_urls.map(url=>{
        let style = {width: 258, height: 258};
        return (
          <div className={"album item"} style={style}>
            <img className="a-cover" src={url}/>
            <p className="a-layer">
              <a href="#"><span className="al-brand">{"i.brand"}</span> </a>
              <a href="#"><span className="al-title">{"i.title"}</span></a>
              <a href="#"><span className="al-count">{"i.count"}</span></a>
            </p>
          </div>
        )
      })
    })
    const finalGrids = grids[0].concat(grids[1])

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
