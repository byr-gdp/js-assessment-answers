exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
      var sNum = num.toString(2);
      return parseInt(sNum[sNum.length - bit], 10);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var sNum = num.toString(2);
    var len = sNum.length;
    while(len < 8) {
        sNum = '0' + sNum;
        len++;
    }
    return sNum;
  },

  // needToBeReviewed
  multiply: function(a, b) {
    return parseFloat((a*b).toFixed(1));
  }
};
