// API
const proxy = 'https://cors-anywhere.herokuapp.com/';
const ID = 'https://covid19.mathdro.id/api/countries/indonesia/confirmed';
const PROV = 'https://api.kawalcorona.com/indonesia/provinsi';
const NEGARA = 'https://api.kawalcorona.com';

// Getting API Using Async await

const sDataDunia = () => {
  return fetch(NEGARA)
    .then((res) => res.json())
    .then((res) => res);
};

const sDataIndo = () => {
  return fetch(PROV)
    .then((res) => res.json())
    .then((res) => res);
};

const indo = () => {
  return fetch(ID)
    .then((res) => res.json())
    .then((res) => res);
};

export { sDataDunia, sDataIndo, indo };
