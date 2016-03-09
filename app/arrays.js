exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
      while(arr.indexOf(item) !== -1) {
          arr.splice(arr.indexOf(item), 1);
      }
      return arr;
  },

  removeWithoutCopy : function(arr, item) {
      while(arr.indexOf(item) !== -1) {
          arr.splice(arr.indexOf(item), 1);
      }
      return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    //return arr1.concat(arr2);
    //return Array.prototype.concat(arr1, arr2);
    return Array.prototype.concat.apply(arr1, arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    var loc = arr.indexOf(item);
    while(loc !== -1) {
        count++;
        loc = arr.indexOf(item, loc + 1);
    }
    return count;
  },

  duplicates : function(arr) {
    var result = [];
    arr.sort();
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i+1] && result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
  },

  square : function(arr) {
      return arr.map(function(item) {
           return item * item;
      });
  },

  findAllOccurrences : function(arr, target) {
    var result =  [];
    var loc = arr.indexOf(target);
    while(loc !== -1) {
         result.push(loc);
         loc = arr.indexOf(target, loc+1);
    }
    return result;
  }
};
