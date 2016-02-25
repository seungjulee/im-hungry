import fetch from 'isomorphic-fetch'
import queryString from 'query-string'

const catchError = (err, next, action) =>{
  return next(Object.assign({}, action, {
    ...action,
    "type": "fetch photos unsuccessful",
    "payload": err.toString()
  }))
}

const catchSuccess = (res, next, action) => {

  return next(Object.assign({}, action, {
    ...action,
    "type": "fetch photos successful",
    "payload": res['businesses']
  }))
}

const handleAddLocation = (next, action) => {
  //TODO: save the user location to state
  const query = queryString.stringify({
    location: action.payload.label,
    term: "restaurants"
  })

  var queryUrl = ""
  if (process.env.NODE_ENV == "production"){
    queryUrl = `http://sjlee.me/imhungry-api/?${query}`
  } else {
    queryUrl = `http://127.0.0.1:5000/?${query}`
  }

  fetch(queryUrl)
  .then((res) => {
    if (res.status >= 400){
      throw "http status " + res.status
    }
    return res.json()
  })
  .then((res) =>{
    return catchSuccess(res, next, action)
  })
  .catch((err) => {
    return catchError(err, next, action)
  })
}

export default store => next => action  => {
  switch (action.type) {
    case "add location":
      handleAddLocation(next, action)
      break;
    default:
      return next(action)
  }

}
