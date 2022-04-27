// function tossCoin() {
//     return Math.random() > 0.5 ? "heads" : "tails";
// }
// function fiveHeadsSync() {
//     let headsCount = 0;
//     let attempts = 0;
//     while(headsCount < 5) {
//         attempts++;
//         let result = tossCoin();
//         console.log(`${result} was flipped`);
//         if(result === "heads") {
//             headsCount++;
//         } else {
//             headsCount = 0;
//         }
//     }
//     return `It took ${attempts} tries to flip five "heads"`;
// }
// The above code is the same function without promises
// The below code is ryans first attempt at promises 

// const fiveHeadsSync = new Promise ( (resolve, reject) => {
//     let headsCount = 0;
//     let attempts = 0; 
//     while (headsCount < 5) {
//         attempts++; 
//         let result = tossCoin();
//         console.log(`${result} was flipped`)
//         if(new result === 'heads') {
//             resolve(headsCount++)
//         } else {
//             reject(headsCount = 0);
//         }
//     }

// The below code is ryans second attempt at promises : 

function coinToss() { 
    return Math.random() > 0.5 ? "heads" : "tails";
}

function getFiveHeads() { 
    return new Promise((resolve,reject) => {
        // everything inside the parent parentheses is the promise
        let headsCount = 0; 
        let attempts = 0; 
        let maxAttempts = 50; 
        while ( headsCount < 5 && attempts <= maxAttempts) {
            attempts++;
            let result = coinToss(); 
            console.log(`${result} was flipped`);
            if(result === 'heads') { 
                headsCount++;
            } else {
                headsCount = 0; 
            }
        }
        if(attempts <= maxAttempts){
            resolve(`It took ${attempts} tries to flip five "heads"`);
        } else {
            reject(`Attempts have exceeded ${maxAttempts} flips`);
        }
    });
}

getFiveHeads()
.then((res) => console.log(res))
.catch((err) => console.log(err))

console.log('When Does this run?')

