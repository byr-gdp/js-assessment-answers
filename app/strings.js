exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var result = [];
    for(var i = 0; i < str.length; i++) {
        if(i < amount) {
            result.push(str[i]);
        } else {
            //  往前找 amount 个数，若都和 str[i] 一致，什么也不做，否则push
            var flag = false;
            for(var j = 1; j <= amount; j++) {
                if(str[i] !== str[i - j]) {
                    flag = true;
                }
            }
            if(flag) {
                result.push(str[i]);
            }
        }
    }
    return result.join('');
  },
  wordWrap: function(str, cols) {
    var result = '';
    var arrStr = str.split(' '); // string to array
    var current = 0; // 当前处理到第几个

    // arrStr 中每一项添加 \n
    // for(var i = 0; i < arrStr.length; i++) {
    //     result += (arrStr[i] + '\n');
    // }

    while(current < arrStr.length) {
        // 当前项字符数大于等于cols

        if(arrStr[current].length >= cols) {
            arrStr[current] += '\n';
            current++;
        } else {
            // 当前字符数小于cols
            var step = 0;
            var length = arrStr[current].length; // 当前处理项长度
            // 第一个判断是防止读取数组越界
            if( (current + step + 1 < arrStr.length - 1) && (length + arrStr[current + step + 1].length + 1 < cols)) {
                length += (arrStr[current + step + 1].length + 1); // 更新当前长度值
                arrStr[current] += ' ';  // 当前处理项追加空格
                step++;
                current++;
            } else {
                arrStr[current + step] += '\n';  //当前处理项追加 \n
                current++;
            }
        }
    }
    return arrStr.join('').slice(0, -1);
  },
  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
