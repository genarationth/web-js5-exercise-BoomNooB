// Exercise #3
// Write while loops to do the following:

// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.

const intTillNeg = num =>{
    console.log(`Starter number is ${num}`)
    while(num>0){
        num -= 0.5;
        console.log(`Current number is ${num}`);
    }
}
intTillNeg(5)

// - Write a method with a while loop to print 1 through n in square brackets. 
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]

const oneTillN = num =>{
    console.log(`The last number is ${num}`)
    let i = 0;
    while(i<num){
        i += 1;
        console.log(`[${i}]`);
    }
}

oneTillN(9);

// - Print all the odd numbers between 1 - 100.

const oddNumFind = num =>{
    let i = 0;
    while(i<num){
        i++
        i%2 === 1 ? console.log(i) : null;
    }
}

oddNumFind(10)

// - Write a method with a while loop that computes the sum of first n positive integers: 
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190

const totalAdd = num => {
    let i = 0;
    let total = 0;
    while(i<num){
        i++
        total += i;
    }
    console.log(total)
}

totalAdd(19);