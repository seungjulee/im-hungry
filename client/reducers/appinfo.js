import { handleActions } from 'redux-actions'

const initialState = [{
  visible: false,
  zipcode: 94102,
}]

export default handleActions({
  // 'add location' (state, action){
  //   console.log(action, "aCTION")
  //   return state.map(appinfo => {
  //     return {...appinfo, location: action.payload}
  //   })
  // }

}, initialState)
