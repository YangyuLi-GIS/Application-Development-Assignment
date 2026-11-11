// Application Development - Assignment 1
// Yangyu Li | 12417836 | yangyu.li@stud.plus.ac.at
// 2026-11-11

// task 1
let lat = ["48.85", -33.86, 35.87, 90.00, -90.00, 90.88, -90.89, 45.90, -45.91, 100.92];
let lon = [2.22, 151.23, 139.24, 180.25, -180.26, 15.27, -15.28, 180.29, -180.30, 200.31];

function isValidCoordinate(lat, lon) {
    if (typeof lat !== 'number' || typeof lon !== 'number') { 
        // check if the input is a number
        return false;
    }else if ((lat >= -90 && lat <= 90) && (lon >= -180 && lon <= 180)){
        // check if the input is within the range of coordinates
        return true;
    }else {
        return false;
    }

}

// task 2
function decimalToDMS(value){
    let sign;  // later used to determine N/S or E/W.
    if (value < 0) {
        sign = -1;
    } else {
        sign = 1;
    }

    value = Math.abs(value);  // get the absolute value
    
    let degrees = Math.floor(value);  // get the integer part
    let minutes = Math.floor((value-degrees) * 60);  // get the integer part of the decimal part multiplied by 60 minutes.
    let seconds = Math.round(((value-degrees) * 60 - minutes) * 60);  // get the seconds

    return [sign, degrees, minutes, seconds];
}

// task 3
function countValidCoordinates(lat, lon) {
    let count = 0;
    for (let i = 0; i < lat.length; i++) {
        if (isValidCoordinate(lat[i], lon[i])) {
            count++;
        }
    }
    return count;
}

// task 4
let count = countValidCoordinates(lat, lon);
console.log("Number of valid coordinates: " + count);

for (let i = 0; i < lat.length; i++){
    // only print the valid coordinates
    if (isValidCoordinate(lat[i], lon[i])) {

        console.log("Point " + i + ": ");
        console.log("   Decimal: (" + lat[i] + ", " + lon[i] + ")");

        let latDMS = decimalToDMS(lat[i]);  // convert the decimal to DMS
        let lonDMS = decimalToDMS(lon[i]);
        
        if (latDMS[0] === -1) {
            latDMS[0] = "S";
        } else {
            latDMS[0] = "N";
        }

        if (lonDMS[0] === -1) {
            lonDMS[0] = "W";
        } else {
            lonDMS[0] = "E";
        } 

        console.log("   DMS: ("+latDMS[1] + "°" + latDMS[2] + "'" + latDMS[3] + "\" " + latDMS[0] + ", "
            + lonDMS[1] + "°" + lonDMS[2] + "'" + lonDMS[3] + "\" " + lonDMS[0] + ")");
    }
}

    

