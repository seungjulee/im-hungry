import fetch from 'isomorphic-fetch'

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
  fetch(`http://127.0.0.1:5000`)
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
