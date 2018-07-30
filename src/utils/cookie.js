'use strict'
//{ key: 'xxx', value: 'xxx', days: '3', path: '/', domain: document.domain }
export function setCookie (params) {
  var time = new Date(), days = '', path = '', domain = '';

  if (!params.key || !params.value) {
    console.error('[Cookie Error]: key, value must be set.');
    return;
  };

  if (params.days) {
    time.toGMTString(time.setTime(time.getTime() + 1000 * 60 * 60 * 24 * params.days));
    days = 'expires=' + time + ';';
  };

  if (params.path) path = 'path=' + params.path + ';';

  if (params.domain) domain = 'domain=' + params.domain + ';';
  
  document.cookie = params.key + '=' + params.value + ';' + days + path + domain;
};

export function getCookie (key) {
  if (!key) {
    console.error('[Cookie Error]: not set key.');
    return;
  };

  var arr = document.cookie.split(';');

  for (var i = 0; i < arr.length; i ++) {

    arr[i] = arr[i].replace(/^\s*|\s*$/, '');

    if (arr[i].indexOf(key) == 0 && arr[i].indexOf('=') == key.length) {
      return arr[i].substring(key.length + 1, arr[i].length);
    };
  };
};

export function clearCookie (params) {
  var arr = document.cookie.split(';'), path = '', domain = '';

  if (!params) params = {};

  if (params.path) path = 'path=' + params.path + ';';

  if (params.domain) domain = 'domain=' + params.domain + ';';

  for (var i = 0; i < arr.length; i ++) {

    var key = arr[i].substring(0,arr[i].indexOf('='));

    document.cookie = key + '=0;expires=Thu, 01 Jan 1970 00:00:00 GMT;' + path + domain;
  };
};