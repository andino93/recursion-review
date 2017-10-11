// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  debugger;
  if (json[0] === '[') {
    var noBrackets = json.substring(1, json.length - 1);
    
    return noBrackets.split(',').map(parseJSON);
    
  }
  
  
  
  
  if (json[0] === '"') { // parsing strings
    return json.substring(1, json.length - 1);
  } else if (json === 'null') {
    return null;
  } else if (json === 'true') {
    return true;
  } else if (json === 'false') {
    return false;
  } else if (!isNaN(json)) {
    return Number(json);
  }
};


console.log(parseJSON('[1,"string",3, 4, 5,[1,2],true]'));