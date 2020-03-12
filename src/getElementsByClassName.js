// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

//You should use document.body, element.childNodes, and element.classList

// But instead we're going to implement it from scratch:

/**
 * var getElementsByClassName = function(className
  ) {
    // your code here
    var arrayElements = [];
    var recursiveSearch = function(parent) {
      for (let node of parent.childNodes) {
        if (node.classList && node.classList.contains(className)) {
          arrayElements.push(node);
          }
        if (node.hasChildNodes) {
            /**
             *  for (var i = 0; i < node.childNodes.length; i++) {
              recursiveSearch(node.childNodes[i]);
            }
             //
           
            recursiveSearch(node);
        }
      }  
    };
    recursiveSearch(document.body);
    return arrayElements; 
  };
  };
 */


var getElementsByClassName = function(className) {
  var arrayElements = []
  var hasClass = function(node) {
    if(node.classList && node.classList.contains(className)) {
      arrayElements.push(node);
    }
    if(node.hasChildNodes()) {
      for(var i = 0; i < node.childNodes.length; i++) {
        hasClass(node.childNodes[i]);
      }
    }
  }
  hasClass(document.body);
  return arrayElements;
};