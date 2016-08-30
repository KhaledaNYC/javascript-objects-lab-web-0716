var recipes = {};


function updateObjectWithKeyAndValue(obj, key, value) {
  // it's important that we merge everything into
  // a new object
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
 obj[key] = value

 return obj
}

function deleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
