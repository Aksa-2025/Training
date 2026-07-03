console.log("hello CEK")
document.write("hello CEK")
// single line comment
/*
fhg
jhj
kjk
*/
// variable declaration
let name1="ally"
console.log(name1)
console.log(typeof(name1))//string
let salary=800000.80
console.log(salary)
console.log(typeof(salary))//number
var isValid=false 
console.log(isValid)
console.log(typeof(isValid))//boolean
const pi=3.14
console.log(pi)

let myAge
console.log(myAge)  //undefined
let num1 = 10;
let num2 = 5;

console.log("Addition: " , (num1 + num2))
console.log("Subtraction: " , (num1 - num2))
console.log("Multiplication: " , (num1 * num2))
console.log("Division: " , (num1 / num2))
console.log(num1 % num2);//modulus
console.log(num1 ** num2);//exponent

let x=5
x+=5
console.log(x)//assignment operator

let flag1=true
let flag2=false
//comparison operator
console.log(flag1 == flag2)//value comparison
console.log(flag1 === flag2)//value and type comparison
console.log((flag1!=flag2)||(2<3))//logical or
console.log((flag1!=flag2)&&(2>3))//logical and
console.log(!flag1)//not

//conditional statements
if(5>3){
    console.log("5 is greater than 3")
}
else if(5 == 3){
    console.log("5 is equal than 3")
}
else{
    console.log("5 less than 3")
}
//current time (hours) .based on time till 12-good morning till 18 -good evening goodnight
let currentTime = new Date();
let hours = currentTime.getHours();

if (hours < 12) {
    console.log("Good Morning");
}
else if (hours < 18) {
    console.log("Good Evening");
}
else {
    console.log("Good Night");
}

//loops
let sum=0
for(let i=0;i<=10;i++){
    sum=sum+i
}
console.log("sum:",sum)
//add all even nos from 0 to 8
let sum1 = 0;

for (let i = 0; i <= 8; i += 2) {
    sum1 += i;
}
let sum2=0
let i=0
console.log("Sum :", sum1);
while(i<10){
    sum2 += i;
    i+=2;

}
console.log(sum2)
//refernce types
// objects
let student=
{
    name:"Hari",
    age:22,
    favhobby:"gaming"
}
console.log(student)
console.log(student.name)
console.log(student.age)
console.log(student.favhobby)
//create an employee object-name,salary,location
let employee = {
    name: "Aksa",
    salary: 50000,
    location: "Kottayam"
};

console.log(employee);
console.log(employee.name);
console.log(employee.salary);
console.log(employee.location);

//arrays indexed based starts with 0
let season=['summer','winter','rainy']
console.log(season)
console.log(season[0])
console.log(season[1])
console.log(season[2])
console.log(season[3])//undefined

for(let i=0;i<season.length;i++){
    console.log(season[i]);
}

let arr1 = [10,20,30,40,50]
let sum3=0
//sum all the values and display sum


for(let i=0;i<arr1.length;i++){
    sum3+=arr1[i]
}
console.log(sum3)
//functions
//function definition
function greet(){
    console.log("hello all")
}
//function call
greet()
greet()
function addNumbers(num1,num2){
    return num1+num2
}
let output=addNumbers(333,444)
console.log(`sum of 333 and 444 is ${output}`)

//write a function to check if the passed in value is even and return the boolean
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(8));  
console.log(isEven(5));  
//create a simple intereset calcualtor using arrow function syntax -principal,rate,time. return simplae iinterest and console.
const simpleInterest = (principal, rate, time) => {
    return (principal * rate * time) / 100;
}

console.log("simple interest:" ,simpleInterest(10000, 5, 2));

//foreach
let numbers=[1,2,3,4,5,6,7,8,9]
//numbers.forEach((item,index,arr)=>{
   // console.log(item)//just 1 to 9 printed
    //console.log(index)//all items come with their indexes (1:0,2:1 etc)
   // console.log(arr)//print array
    
//})
numbers.forEach((item,index)=>{
    numbers[index]=item+2
})
console.log(numbers)

let prices=[30,40,50,777,200]
//filter-returns a new array matching the condition
let prices_greater_than_100=prices.filter((item)=>{
    return item>100
})
console.log(prices_greater_than_100)

//filter out even nos from prices array
let even_from_array=prices.filter((item)=>{
    return item%2==0
})
console.log(even_from_array)
//map function-creates a new arrsy by applying a function to each element of original array
const simple_nums=[1,2,3,4]
const double_nums=simple_nums.map((item)=>{
    return item*2
})
console.log(double_nums)
const fruits = ['apple','banana','cherry']

const upperFruits = fruits.map(item => item.toUpperCase());

console.log(upperFruits);

//extract specific values from array of objects
//extract specific values from array
const items=[
    {name:"bike",price:50000},
    {name:"TV",price:30000},
    {name:"Phone",price:25000},
]
//use map function to get an array of item names
const itemName = items.map(item => item.name);

const result = items
    .filter(item => item.price > 30000)
    .map(item => item.name)

console.log(result)