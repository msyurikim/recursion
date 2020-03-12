// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'undefined') return;
  if (typeof obj === 'function') return;
  if (obj === null) return 'null';
  if (typeof obj === 'boolean' || typeof obj === 'number' || typeof obj === 'symbol') return '' + obj + '';
  if (typeof obj === 'string') return '"' + obj + '"';


  //use recursion to handle nested array/object
  //input is array
  if (Array.isArray(obj)) {
    /**
     * similar solution to example using while loop:
    var str = '[';
    while (obj.length) {
      str += stringifyJSON(obj.shift());
      if (obj.length !== 0 ) str += ',';
    }
    return str + ']';
    */

    //array -> array of strings (using recursion + map)
    //array --> 1 string, join w/ comma (default)
    return '[' + obj.map(o => stringifyJSON(o)).join() + ']';
  }

  //input is object, account for null object above
  if (typeof obj === 'object') {
    /**
    var str = '{';
    for (var key in obj) {
      if (typeof obj[key] === 'undefined' || typeof obj[key] === 'function') continue;
      str +=  stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
      delete obj[key];
      if (Object.keys(obj).length !== 0 ) str += ',';
    }
    return str + '}';
    */
    var result = [];
    //Object.keys = array
    Object.keys(obj).forEach(function(key) {
      var value = stringifyJSON(obj[key]);
      if (value !== null && value !== undefined) {
        result.push(stringifyJSON(key) + ':' + value);
      }
    });
    return '{' + result.join() + '}';
  }

};
