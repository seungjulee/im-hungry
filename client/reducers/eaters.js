import { handleActions } from 'redux-actions'

const initialState = [{
  text: 'InitialState',
  // // url: 'https://placeimg.com/320/240/any',
  // id: 0
}]

export default handleActions({
  'fetch photos successful' (state, action){
    return action.payload.map( item => {
      return item
    })
  }


}, initialState)
