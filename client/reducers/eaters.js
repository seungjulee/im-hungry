import { handleActions } from 'redux-actions'

const initialState = [{
  text: 'Use Redux',
  visible: false,
  // // url: 'https://placeimg.com/320/240/any',
  // id: 0
}]

export default handleActions({
  'fetch photos successful' (state, action){
    console.log("next")
    return action.payload.map( item => {
      return item
    })
  }


}, initialState)
