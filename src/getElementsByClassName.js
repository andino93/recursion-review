// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var array = [];
  var searchNodes = function(node) {
    if (node.classList.contains(className)) {
      array.push(node);
    } 
    Array.prototype.forEach.call(node.children, searchNodes);
  };
  searchNodes(document.body);
  return array;
};
