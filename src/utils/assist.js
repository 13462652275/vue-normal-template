export function typeOf (obj) {
  const toString = Object.prototype.toString;
  const map = {
    '[object Boolean]'  : 'boolean',
    '[object Number]'   : 'number',
    '[object String]'   : 'string',
    '[object Function]' : 'function',
    '[object Array]'    : 'array',
    '[object Date]'     : 'date',
    '[object RegExp]'   : 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]'     : 'null',
    '[object Object]'   : 'object'
  };

  return map[toString.call(obj)];
};

// deepCopy
function deepCopy (data) {
  const type = typeOf(data);
  let o;

  if (type === 'array') {
    o = [];
  } else if (type === 'object') {
    o = {};
  } else {
    return data;
  };

  if (type === 'array') {
    for (let i = 0; i < data.length; i ++) {
      o.push(deepCopy(data[i]));
    };
  } else if (type === 'object') {
    for (let key in data) {
      o[key] = deepCopy(data[key]);
    };
  };
  return o;
};

export { deepCopy };


export const handleCode = {
  encode (str) {
    let string = '';
    for (let i = 0, iLength = str.length ; i < iLength; i ++) {
      string += Math.pow(str.charCodeAt(i) + 100 + i, 2).toString(16) + (i === iLength - 1 ? '' : '\r');
    };
    return string;
  },
  decode (str) {
    let [ array, string ] = [ str.split('\r'), '' ];
    for (let i = 0, iLength = array.length ; i < iLength; i ++) {
      string += String.fromCharCode(Math.sqrt( parseInt(array[i], 16) ) - 100 - i);
    };
    return string;
  }
};