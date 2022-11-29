var convertToRoman = function(num) {
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ];

    var romanToNum = "";

    for (var index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
            romanToNum += romanNumeral[index];
            num -= decimalValue[index];
        }
    }

    return romanToNum;
};

console.log(convertToRoman(1001));
console.log(convertToRoman(5));
console.log(convertToRoman(798));
console.log(convertToRoman(2021));
console.log(convertToRoman(985));
console.log(convertToRoman(3999));