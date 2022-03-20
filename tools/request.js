export const post = (url, params) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
      .then(response => response.json())
      .then(response => resolve(response))
      .catch(e => reject(e));
  });
};
export const get = (url, json) => {
  return new Promise((resolve, reject) => {
    const params = Object.keys(json)
      .map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
      })
      .join('&');
    fetch(url + '?' + params, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(response => resolve(response))
      .catch(e => reject(e));
  });
};
