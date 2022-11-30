function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("-555-5555"));
console.log(telephoneCheck("5505555555"));
console.log(telephoneCheck("550 555 5555"));
console.log(telephoneCheck("667555-5555"));
console.log(telephoneCheck("-5505-5555"));