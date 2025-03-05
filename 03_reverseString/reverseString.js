const reverseString = function(string) {
    let splitString = string.split("");

    let reverseSplit = splitString.reverse();

    return reverseSplit.join("");
};

// Do not edit below this line
module.exports = reverseString;
