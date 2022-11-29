//Convert lower case to upper case

function rot13(str) {
    str = str.toUpperCase() //Convert lower case to upper case
    return (
        str.split("")
        // Iterate over each character in the array
        .map.call(str, function(char) {
            // Convert char to a character code
            var x = char.charCodeAt(0);
            // Checks if character lies between A-Z
            if (x < 65 || x > 90) {
                return String.fromCharCode(x); // Return un-converted character
            }
            //N = ASCII 78, if the character code is less than 78, shift forward 13 places
            else if (x < 78) {
                return String.fromCharCode(x + 13);
            }
            // Otherwise shift the character 13 places backward
            return String.fromCharCode(x - 13);
        })
        .join("")
    ); // Rejoin the array into a string
}

console.log(rot13("Serr PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("serr cvmmn!"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));