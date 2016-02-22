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
    const {images} = this.props

    return (
      <section style={style}>
        <div className="albumPanel" >
          <AutoResponsive ref="container" {...this.getAutoResponsiveProps()}>
            {
              images.map((item) => {
                let style = {
                  width: 258,
                  height: 258
                };

                return (
                  <div className={"album item"} style={style}>
                    <img className="a-cover" src={item.url}/>

                    <p className="a-layer">
                      <a href="#"><span className="al-brand">{"i.brand"}</span> </a>
                      <span className="al-title">{"i.title"}</span>
                      <span className="al-count">{"i.count"}</span>
                    </p>
                  </div>
                );

              })
            }
          </AutoResponsive>
        </div>
      </section>
    )
  }
}

export default GridGallery
