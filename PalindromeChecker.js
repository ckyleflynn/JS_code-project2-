function palindrome(str) {
    return (
        str.replace(/[\W_]/g, "").toLowerCase() ===
        str
        .replace(/[\W_]/g, "")
        .toLowerCase()
        .split("")
        .reverse()
        .join("")
    );
}

console.log(palindrome("eye"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("almostomla"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("1 eye for of 1 eye."));