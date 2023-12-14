'use strict';

import {select, selectAll, onEvent} from './utility.js'

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlamFuZHJvcGMwNSIsImEiOiJjbHEzd2ZoYzgwMHM4MnJvaGhoZWFybnpoIn0.27E07iRs7vSpMJ9dA3gmGw';
let latitude = 49.8204672;
let longitude = -97.1702272;


const map = new mapboxgl.Map({
    container: 'map',
    center: [longitude, latitude],
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 9.5
});

function getLocation(position) {
    let { latitude: newLatitude, longitude: newLongitude } = position.coords;

    longitude = newLongitude 
    latitude = newLatitude

    let marker = new mapboxgl.Marker()
    .setLngLat([newLongitude, newLatitude])
    .addTo(map)

    map.setZoom(13)
    map.setCenter([newLongitude, newLatitude]);
}

const options = {
    enableHighAccuracy: true,
    maximumAge: 0
}

function handleError(error) {
    console.log(error.message)
}


if (navigator.geolocation) {
    navigator.geolocation.watchPosition(getLocation, handleError, options)
} else {
    console.log("Geolocation is not supported by this browser.");
}