'use strict'

const addressLat = 10;
const addressLong = 5;

const positionLat = 20;
const positionLong = 7;

const distance = Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2);

console.log(distance)