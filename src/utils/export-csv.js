'use strict'

// var arr = [
//   {
//     name: '张三',
//     age: 1,
//     address: 'abc',
//   },
//   {
//     name: '李四',
//     age: 2,
//     address: 'abc',
//   },
//   {
//     name: '王五',
//     age: 3,
//     address: 'abc',
//   },
//   {
//     name: '赵六',
//     age: 4,
//     address: 'abc',
//   },
// ];
// exportCsv({
//   fileName: 'abc',
//   titleForKey: [ 'name', 'age', 'address' ],
//   title: [ '名字', '年龄', '地址' ],
//   data: arr,
// });

export function exportCsv (object) {
  var titleForKey = object.titleForKey,
    data = object.data,
    str = [];

  str.push(object.title.join(',') + '\n');

  for(var i = 0; i < data.length; i ++){
    str.push(titleForKey.map(item => data[i][item]).join(',') + '\n');
  };

  var url = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str.join('')),
    downloadLink =  document.createElement('a');

  downloadLink.href = url;
  downloadLink.download = object.fileName + '.csv';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};