// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

//You should use document.body, element.childNodes, and element.classList

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className) {
  var arrayElements = [];
  var hasClass = function(node) {
    //use classList instead of className bc element may have multiple class names (classList is space-delimited string)
    //needs to check if node has classList bc otherwise error if node has no classes and try to use contains method
    if(node.classList && node.classList.contains(className)) {
      arrayElements.push(node);
    }
    //if(node.hasChildNodes()) {
    for(var i = 0; i < node.childNodes.length; i++) {
      hasClass(node.childNodes[i]);
    }
    //}
  }
  hasClass(document.body);
  return arrayElements;
};