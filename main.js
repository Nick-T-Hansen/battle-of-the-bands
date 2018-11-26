// Your job is to write a function that accepts any band name as an argument. 
// The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

let bandNumber = 0

const takeNumber = function (band) {
    for ( i= 0; i < takeNumber.length; i++) 
    {
        bandNumber += 1;
        console.log(bandNumber + ". " + band)
    }
}
const scum = takeNumber("Galactic Scum");

const under = takeNumber("Underdogs")