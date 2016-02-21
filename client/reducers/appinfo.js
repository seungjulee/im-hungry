import { handleActions } from 'redux-actions'

const initialState = [{
  visible: false,
  zipcode: 94102,
}]

export default handleActions({
  'add location' (state, action){
    return state.map(appinfo => {
      return {...appinfo, zipcode: Number(action.payload)}
    })
  }

}, initialState)
