/*
    Write a function that accepts a String as its only parameter, and returns true if the string reads the same when reversed, ignoring case.

    solution("rotator") === true
    solution("Rats live on no evil star") === true
    solution("Never odd or even") === false
    solution("Hello, world") === false
*/

// reverse
function solution1(str) {
    //let str2=str.split('').reverse().join('');
    //console.log(str2);
    str=str.toLowerCase();
    return str==str.split('').reverse().join('');
}

// loop
function solution2(str) {
    str=str.toLowerCase();
    let len=str.length;
    let boolPal=true;
    for(let i=0; i<len; i++){
        if(str[i]==str[len-i]){
            //boolPal=true;
        }
        else{
            boolPal=false;
        }
    }
    return boolPal;
}

// loop that provides earliest exit
function solution3(str) {
    let len=str.length;
    for(let i=0; i<len; i++){
        if(str[i]!=str[i-len]){
            return false;
        }
    }
    return true;
}


/*
************************* PERFORMANCE TESTS *************************
*/

// import huge string


// test solution1()

console.assert(solution1("rotator") === true,'solution 1 failed');
console.assert(solution2("Rats live on no evil star") === true,'solution 2 failed');
console.assert(solution3("Never odd or even") === false,'solution 3 failed');


// test solution2()


// test solution3()
