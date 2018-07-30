export function setData (key, value, days) {
  if (days) {
    let expires = new Date().getTime() + 1000 * 60 * 60 * 24 * days;
    localStorage.setItem(key, JSON.stringify({ value, expires }));
  } else if (key && value) {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    console.error('Key and Value is a must fill parameter');
  };
};

export function getData (key) {
  let data;

  if (!key) console.error('Key is a must fill parameter');

  try {
    throw data = JSON.parse(localStorage.getItem(key));
  } catch (e) {
    return localStorage.getItem(key);
  };

  if (!data) return null;

  if (data.expires >= new Date().getTime()) {
    return data.value;
  } else if (data.expires < new Date().getTime()) {
    // 信息已过期
    localStorage.removeItem(key);
    return null;
  } else {
    return data;
  };
};