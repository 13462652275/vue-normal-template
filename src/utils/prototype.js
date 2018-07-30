// 插值搜索（ 该方法在已排序的数组性能好，非已排序的请用 findIndex ）
Array.prototype.insertionSearch = function (item) {
  var _this = this, low = 0, high = this.length - 1, mid, element, attribute;
  var arrayItem = function (index) {
    return attribute ? _this[index][attribute] : _this[index];
  };

  if (typeof item === 'object') {
    for (var key in item) {
      attribute = key;
      item = item[key];
      break;
    };
  };

  while (low <= high) {
    mid = Math.floor(low + (item - arrayItem(low)) / (arrayItem(high) - arrayItem(low)) * (high - low));

    element = arrayItem(mid);

    if (element < item) {
      low = mid + 1;
    } else if (element > item) {
      high = mid - 1;
    } else {
      return mid;
    };
  };
  return -1;
};

// 日期格式化
Date.prototype.format = function (fmt) {
  var date = {
    'M+': this.getMonth() + 1, //月
    'd+': this.getDate(), //日
    'h+': this.getHours(), //时
    'm+': this.getMinutes(), //分
    's+': this.getSeconds(), //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    'S': this.getMilliseconds() //毫秒
  };

  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));

  for (var key in date) {
    if (new RegExp('(' + key + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (date[key]) : (('00' + date[key]).substr(('' + date[key]).length)));
    };
  };
  return fmt;
};

console.area = function () {
  console.log('\n');
  console.log('-- start --');
  console.info.apply(undefined, arguments);
  console.log('--  end  --');
  console.log('\n');
};