export function setStorage (key, data, days) {
  var expires;

  if (!key || !data) {
    console.error('[ localStorage ]: Key and Data is a must fill parameter')
    return false;
  };

  expires = days ? new Date().getTime() + 1000 * 60 * 60 * 24 * days : new Date(0).getTime();

  localStorage.setItem(key, JSON.stringify({ data, expires }));
  return true;
};

export function getStorage (key) {
  var data, nowTime = new Date().getTime();

  if (!key) console.error('[ localStorage ]: Key is a must fill parameter');

  try {
    data = JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return localStorage.getItem(key);
  };

  if (!data) return null;

  if (!Boolean(data.expires) || data.expires >= nowTime) {
    return data.data;
  } else {
    localStorage.removeItem(key);
    return null;
  };
};

export function clearStorage (key) {
  if (key) {
    localStorage.removeItem(key);
  } else {
    localStorage.clear();
  };
};