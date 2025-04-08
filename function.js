let principal = 12
let annualrate = 0.05
let time = 10
simpleInterest=(p,r,t)=>{
    return (p*r*t)/100
}
console.log(`The simple interest is ${simpleInterest(principal,annualrate,time)}`);
