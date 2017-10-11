// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (Array.isArray(obj)) {
    return '[' + obj.map(stringifyJSON) + ']';
  }
  if (typeof obj === 'object' && obj) {
    var keys = Object.keys(obj);
    
    keys = keys.filter(key => typeof obj[key] !== 'function' && obj[key] !== undefined);

    return '{' + keys.map(function(key) {
      return stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
    }) + '}';
  }
  return typeof obj === 'string' ? '"' + obj + '"' : String(obj);
};
