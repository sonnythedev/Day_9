/*
    Write a function that accepts a String as its only parameter, and returns true if the string reads the same when reversed, ignoring case.

    solution("rotator") === true
    solution("Rats live on no evil star") === true
    solution("Never odd or even") === false
    solution("Hello, world") === false
*/

// reverse
function solution1(str) {
    return str.toLowerCase() == str.toLowerCase().split("").reverse().join("")
}

console.assert(solution1("rotator") === true, `Error: solution1a() failed!`);
console.assert(solution1("Rats live on no evil star") === true, `Error: solution1b() failed!`);
console.assert(solution1("Never odd or even") === false, `Error: solution1c() failed!`);
console.assert(solution1("Hello, world") === false, `Error: solution1d() failed!`);

// loop
function solution2(str) {
    let reversed  = "";
    
    let len = str.length;
    for (var i = 0; i < len/2; i++) {
        if (str.toLowerCase[i] !== str.toLowerCase[len - 1 - i]) {
            return false;
        }
    }
    
    return true;
}

console.assert(solution2("rotator") === true, `Error: solution2a() failed!`);
console.assert(solution2("Rats live on no evil star") === true, `Error: solution2b() failed!`);
console.assert(solution2("Never odd or even") === false, `Error: solution2c() failed!`);
console.assert(solution2("Hello, world") === false, `Error: solution2d() failed!`);


// loop that provides earliest exit
// the fastest solution
function solution3(str) {
    let lowercased = str.toLowerCase();
    let max = Math.ceil(str.length / 2);

    for (let i = 0; i < max; i ++) {
        if (lowercased[i] != lowercased[lowercased.length - i - 1]) return false
    }

    return true
}

console.assert(solution3("rotator") === true, `Error: solution3a() failed!`);
console.assert(solution3("Rats live on no evil star") === true, `Error: solution3b() failed!`);
console.assert(solution3("Never odd or even") === false, `Error: solution3c() failed!`);
console.assert(solution3("Hello, world") === false, `Error: solution3d() failed!`);

function solutionGreg(str) {
    var re = /[\W_]/g, i, s= "";
    str.toLowerCase().replace(re, '');
    return (i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&solution3(s,++i);
}

console.assert(solutionGreg("rotator") === true, `Error: solutionGrega() failed!`);
console.assert(solutionGreg("Rats live on no evil star") === true, `Error: solutionGregb() failed!`);
console.assert(solutionGreg("Never odd or even") === true, `Error: solutionGregc() failed!`);
// console.assert(solutionGreg("Hello, world") === false, `Error: solutionGregd() failed!`);

/*
************************* PERFORMANCE TESTS *************************
*/

// import huge string
const BigStr = require("./bigString");
const bigStr = new BigStr();
const text = bigStr.getText();
const palindrom = bigStr.getPalindrom();

// test solution1()
let startTime = new Date().getTime();

solution1(text);
solution1(palindrom);

let finishTime = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is:`, performance + " sec");


// test solution2()
startTime = new Date().getTime();

solution2(text);
solution2(palindrom);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution2() is:`, performance + " sec");


// test solution3()
startTime = new Date().getTime();

solution3(text);
solution3(palindrom);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution3() is:`, performance + " sec");

// test solutionGreg()
startTime = new Date().getTime();

solutionGreg(text);
solutionGreg(palindrom);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solutionGreg() is:`, performance + " sec");