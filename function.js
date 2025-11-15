function sayName () {
    console.log("Farhan Aziz");
}

sayName();

function logNumberType(number) {
    if (number > 0) {
        console.log("Positif");
    }
    else if (number < 0) {
        console.log("Negatif");
    }
    else {
        console.log("Netral");
    }
}

logNumberType(-1);

function typeNumber(x,y) {
    console.log(x, "ditambah", + y, "adalah", x + y);
}

typeNumber(49,86);