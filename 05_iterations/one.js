// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}
// console.log(element);


for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is best number");
    }
    console.log(element);
}


for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value : ${i}`);
    for(let j = 1; j<= 10 ; j++){
        console.log(`inner loop value : ${j} outer loop value : ${i}`);
    }
}


for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value : ${i}`);
    for(let j = 1; j<= 10 ; j++){
        console.log(i + "*" + j + " = " + i*j);
    }
}


let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);


for(let i=0; i<myArray.length; i++){
        const element = myArray[i]
        console.log(element);
}

// Break and Continue

for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("Detected 5");
        break
    }
    console.log(`value of i is ${i}`);
}

for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("Detected 5");
        continue
    }
    console.log(`value of i is ${i}`);
}