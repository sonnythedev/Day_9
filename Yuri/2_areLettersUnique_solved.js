/*
Write a function that accepts a String as its only parameter, and returns true if the string has only unique letters, taking letter case into account.
*/

// naive
function isUnique1(str) {
    let unique = "";

    for (let i in str) {
        if (unique.indexOf(str[i]) == -1) unique += str[i]
    }

    return str == unique
}

console.assert(isUnique1("No duplicates") == true, `Error: isUnique1() failed`);
console.assert(isUnique1("abcdefghijklmnopqrstuvwxyz") == true, `Error: sUnique1() failed`);
console.assert(isUnique1("AaBbCc") == true, `Error: sUnique1() failed`);
console.assert(isUnique1("Hello, world") == false, `Error: sUnique1() failed`);

// fast
function isUnique2(str) {
    return str == str.split("").reduce(
        function(acc, e, i) {
            if (acc.indexOf(e) == -1) acc += e;
            return acc;
        }, ""
    );
}

console.assert(isUnique2("No duplicates") == true, `Error: isUnique2() failed`);
console.assert(isUnique2("abcdefghijklmnopqrstuvwxyz") == true, `Error: isUnique2() failed`);
console.assert(isUnique2("AaBbCc") == true, `Error: isUnique2() failed`);
console.assert(isUnique2("Hello, world") == false, `Error: isUnique2() failed`);

function isUnique2short(str) {
    return str == str.split("").reduce((acc, e) => acc += acc.indexOf(e) == -1 ? e: "", "");
}

console.assert(isUnique2short("No duplicates") == true, `Error: isUnique2short() failed`);
console.assert(isUnique2short("abcdefghijklmnopqrstuvwxyz") == true, `Error: isUnique2short() failed`);
console.assert(isUnique2short("AaBbCc") == true, `Error: isUnique2short() failed`);
console.assert(isUnique2short("Hello, world") == false, `Error: isUnique2short() failed`);

function isUnique3(str) {
    return str == [... new Set(str.split(""))].join("")
}

console.assert(isUnique3("No duplicates") == true, `Error: isUnique3() failed`);
console.assert(isUnique3("abcdefghijklmnopqrstuvwxyz") == true, `Error: isUnique3() failed`);
console.assert(isUnique3("AaBbCc") == true, `Error: isUnique3() failed`);
console.assert(isUnique3("Hello, world") == false, `Error: isUnique3() failed`);

function solutionGreg(str) {
    for (let i = 0; i < str.length; i++) { 
        for (let j = i + 1; j < str.length; j++) { 
            if (str[i] == str[j]) { 
                return false; 
            } 
        } 
    } 

    return true;
}

console.assert(solutionGreg("No duplicates") == true, `Error: solutionGreg() failed`);
console.assert(solutionGreg("abcdefghijklmnopqrstuvwxyz") == true, `Error: solutionGreg() failed`);
console.assert(solutionGreg("AaBbCc") == true, `Error: solutionGreg() failed`);
console.assert(solutionGreg("Hello, world") == false, `Error: solutionGreg() failed`);

/*
************************* PERFORMANCE TESTS *************************
*/


// import huge string for performance tests
const BigStr = require("./bigString");
const bigStr = new BigStr();
const text = bigStr.getText();

// test isUnique1()
let startTime = new Date().getTime();

isUnique1(text);

let finishTime = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of isUnique1() is:`, performance + " sec");

// test isUnique2()
startTime = new Date().getTime();

isUnique2(text);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000

console.log(`Performance of isUnique2 is:`, performance + " sec");

// test isUnique2short()
startTime = new Date().getTime();

isUnique2short(text);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000

console.log(`Performance of isUnique2short() is:`, performance + " sec");

// test isUnique3()
startTime = new Date().getTime();

isUnique3(text);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000

console.log(`Performance of isUnique3() is:`, performance + " sec");

// test solutionGreg()
startTime = new Date().getTime();

solutionGreg(text);
solutionGreg("abcdefghijklmnopqrstuvwxyz");


finishTime = new Date().getTime();

performance = (finishTime - startTime) / 1000

console.log(`Performance of solutionGreg() is:`, performance + " sec");