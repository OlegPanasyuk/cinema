import { queryObjToString } from '../utils/requestUtils';

class FetchRequests {
  static request({ url, method, body, query, headers }) {
    return new Promise((resolve, reject) => {
      if (fetch) {
        const queryStr = queryObjToString(query);
        const myHeaders = new Headers();
        const bodyR = { ...body };
        const myInit = {
          method,
          headers: myHeaders,
          cors: 'cors',
          // body: JSON.stringify(bodyR),
        };
        Object.keys(headers).forEach(el => {
          myHeaders.append(el, headers[el]);
        });
        fetch(`${url}${queryStr}`, myInit).then(res => {
          const { status, statusText } = res;
          if (res.ok) {
            res.json().then(data => {
              resolve({
                status,
                statusText,
                data,
              });
            });
          } else {
            res.text().then(data => {
              resolve({
                status,
                statusText,
                data,
              });
            });
          }
        });
      } else {
        reject(new Error("Your Browser don't support fetch requests"));
      }
    });
  }
}

export default FetchRequests;
