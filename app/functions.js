exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
      return function() {
          return str + ', ' + arguments[0];
      }
  },

  makeClosures : function(arr, fn) {
    var result = [];

    var makeFun = function(val) {
      return function() {
        return fn(val);
      }
    }

    for(var i = 0; i < arr.length; i++) {
      result.push(makeFun(arr[i]));
    }

    return result;
  },

  partial : function(fn, str1, str2) {
      return function(str3) {
          return fn.call(this, str1, str2, str3);
      }
  },

  useArguments : function() {
    var sum = 0;
    for(var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
  },

  // needToBeReviewed
  // similar to the next question
  callIt : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1, arguments.length);
      return fn.apply(this, args);
  },

  // similar to the previous question
  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
         args = args.concat(Array.prototype.slice.call(arguments, 0));
         return fn.apply(this, args);
    }
  },

  // 柯里化？
  // 目前还不能理解具体要求。
  curryIt : function(fn) {

  }
};
