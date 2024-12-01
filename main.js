import { page } from './page.js';
import getLocation  from './counter.js'
import setMap from './map.js'
import './style.css'

document.querySelector('#app').innerHTML += page;

getLocation((data) => {
  if (data) {
    setMap('map', data.lat, data.lon);
  }
});