exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    // output the first num immediately
    console.log(start++);
    var s = setInterval(function() {
        if(start <= end) {
            console.log(start++);
        } else {
            clearInterval(s);
        }
    }, 100);
    var o = {
      cancel: function() {
        clearInterval(s);
      }
    };

    return o;
  }
};
