import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import GridGallery from '../../components/GridGallery'
import * as EaterAction from '../../actions/eaters'
import * as AppAction from '../../actions/appinfo'
import style from './style.css'

class App extends Component {
  render() {
    const { eaters, appinfo, actions } = this.props
    return (
      <div className={"app"}>
        <div className={style.normal}>
          <Header addLocation={actions.addLocation} />
        </div>
        <GridGallery businesses={eaters} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    eaters: state.eaters,
    appinfo: state.appinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...EaterAction, ...AppAction}, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
