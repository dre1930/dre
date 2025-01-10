alert("welcome to Java");

/*let myName = 'Dre';
let myAge = 20; //Replace with your age

if (myAge >= 18) {
    console.log(myName + ", you are eligible to vote")
}else {
    console.log(myName + ", you are not eligible to vote")
}

let Balance = 10000;
let Withdrawal = 5000

if (Withdrawal <= 10000) {
    console.log("Transaction successful")
}else{
    console.log("Transaction declined")
}*/


for (let i = 1; i < 100; i+=2) 
    console.log(i)


    const pinCode=[]
    for (let i = 0; i <= 999; i++) {
        let pin = i.toString().padStart(3, '0');
        pinCode.push(pin);
    }
    console.log(pinCode);