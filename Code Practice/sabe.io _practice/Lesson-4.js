// Symbols

// But the problem with that is that none of the values of these constants can be guaranteed to be unique.
// Nothing would stop anybody from just creating a new string variable and assigning it a valid size name:

//as we are doing with mySize
const SIZE_XSMALL  = "XSMALL";
const SIZE_SMALL  = "SMALL";
const SIZE_MEDIUM = "MEDIUM";
const SIZE_LARGE  = "LARGE";
const SIZE_XLARGE = "XLARGE";

    function getShirtsLeftInSize(size) {
        if (size === SIZE_XSMALL) {
            return 4;
        } else if (size === SIZE_SMALL) {
            return 6;
        } else if (size === SIZE_MEDIUM) {
            return 3;
        } else if (size === SIZE_LARGE) {
            return 7;
        } else if (size === SIZE_XLARGE) {
            return 12;
        }
    }


var mySize = "SMALL";
console.log(`Only ${getShirtsLeftInSize(mySize)} shirts remaining of my size.`);

//Symbols are tokens that serve as unique IDs. 
//Because each one is different, you can use this to your advantage.

const SIZE_XSMALL = Symbol();
const SIZE_SMALL  = Symbol();
const SIZE_MEDIUM = Symbol();
const SIZE_LARGE  = Symbol();
const SIZE_XLARGE = Symbol();

function getShirtsLeftInSize(size) {
    if (size === SIZE_XSMALL) {
        return 4;
    } else if (size === SIZE_SMALL) {
        return 6;
    } else if (size === SIZE_MEDIUM) {
        return 3;
    } else if (size === SIZE_LARGE) {
        return 7;
    } else if (size === SIZE_XLARGE) {
        return 12;
    }
}


var mySize = SIZE_XLARGE;

console.log(`Only ${getShirtsLeftInSize(mySize)} shirts remaining of my size.`);

