import axios from 'axios';

export function getDealDetails (params) {
  return new Promise((resolve, reject) => {
    axios.post('http://10.6.17.217:8080/api/getDetails', params)
      .then(response => {
        resolve(response.data);
      }, err => {
        console.log(err);
        reject(err);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};


export function getAllDeals (params) {
  return new Promise((resolve, reject) => {
    axios.post('http://10.6.17.217:8080/api/getAllDeals', params)
      .then(response => {
        resolve(response.data);
      }, err => {
        console.log(err);
        reject(err);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};
