// import file api

import { sDataDunia, sDataIndo, indo } from './api.js';

//DOM HTML

const rowsID = document.querySelector('.rowsID');
const rowsProv = document.querySelector('.list-provinsi');
const rowsNegara = document.querySelector('.list-negara');
const waktuD = document.querySelector('.waktu');
const idConfirmed = document.getElementById('confirmed');
const idRecovered = document.getElementById('recovered');
const idDeath = document.getElementById('death');

// Main Function

(async () => {
  try {
    const resW = await indo();
    const resIndo = await sDataIndo();
    const resDunia = await sDataDunia();
    updateUI(resW, resIndo, resDunia);
  } catch (err) {
    console.log(err.message);
  }
})();

//function Update UI

const updateUI = (resW, resIndo, resDunia) => {
  let i = '';
  let no = 1;

  resIndo.forEach((d) => {
    const pD = d.attributes;
    i += tagProvinsi(pD, no++);
    rowsProv.innerHTML = i;
  });

  let o = '';
  let noN = 1;

  resDunia.forEach((d) => {
    const nD = d.attributes;
    o += tagNegara(nD, noN++);
    rowsNegara.innerHTML = o;
  });

  resW.forEach((d) => {
    const dt = d;
    idConfirmed.innerText = d.confirmed;
    idRecovered.innerText = d.recovered;
    idDeath.innerText = d.deaths;
    waktuD.innerHTML = `<h6>Update Terakhir : <br>${new Date(
      dt.lastUpdate
    )}</h6>`;
  });
};

// HTML with template literal

function tagProvinsi(pD, noN) {
  return `                <tr>
                                <th scope="row">${noN}</th>
                                <td>${pD.Provinsi}</td>
                                <td>${pD.Kasus_Posi}</td>
                                <td> ${pD.Kasus_Semb} </td>
                                <td> ${pD.Kasus_Meni} </td>
                            </tr>`;
}

function tagNegara(nD, no) {
  return `             <tr>
                                <th scope="row">${no}</th>
                                <td>${nD.Country_Region}</td>
                                <td>${nD.Confirmed}</td>
                                <td> ${nD.Recovered} </td>
                                <td> ${nD.Deaths} </td>
                            </tr>`;
}
