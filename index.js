
//-------------------------- Sum of an array 
let array1=[1,2,3,4]
function sumArray (arr){
var summ=0
for(var i=0; i<arr.length ;i++)
{ summ += arr[i]}
return summ

}
console.log(sumArray(array1))



// Create an object representing a person with properties name and age. 
//Write a function printPerson that prints the person's name and age.
// Create an Object
const person = { Name : "foulen fouleni ",Age : 19  };

// Add Properties

function printPerson(){

  var msg= "the person name is "+person.Name + " he is " + person.Age +" years old"
  console.log(msg)
  return msg
}

//-------------- Create a multiplication table from 1 to 5 :

function printMultiplicationTable() {
  for (var i = 1; i <= 5; i++) {
      let msg = '';
      for (let j = 1; j <= 10; j++) {
        msg += (i * j) + '\t';
      }
      console.log(msg);
  }
}

printMultiplicationTable();

//-----------------------------------------------
// Array Filtering:

// Create an array of numbers. Write a function filterEvenNumbers that 
// returns a new array containing only the even numbers.

function filterEvenNumbers(arr)  {
let arr1=[]
for (var i=0;i<arr.length ; i++){
 if(arr[i]%2==0 ) { arr1.push(arr[i]) }
}
 return  arr1

}


// Write a function hasProperty that takes an object and a property 
// name as arguments and returns true if the object has the given property, 
//and false otherwise.

const obj = {  name: 'Alice', age: 25 };
function hasProperty(obj, propName) {
  return obj.hasOwnProperty(propName);
}
console.log(hasProperty(obj, 'name')); // true
console.log(hasProperty(obj, 'gender')); // false



// Create an array of objects representing employees with properties name and salary. 
// Write a function sortEmployeesBySalary that returns the array sorted by salary in ascending order.

let ObjectsArray = [ { name:"ahmed" , salary : 1500 },
   { name:"amine" , salary : 1250 },
  { name:"ilef" , salary : 2500 } ,
  { name:"Jhon " , salary : 1300 } ]



function sortEmployeesBySalary(arr) {
    return arr.sort((a, b) => a.salary - b.salary);
}

let sortedEmployees = sortEmployeesBySalary(ObjectsArray);
console.log(sortedEmployees);

 
// Create an array of objects representing books with properties title and author. Write a function getBookTitles that returns an array of all book titles.
// Array Filtering and Transformation:

let bookArr=[ { title:"meditation", author:"markus aulerius"} , { title:"Art of war",author:"Sun Tzu"} , { title:"1984" , author:"George Orwell"}]

function getBookTitles(arr) {
  var aa =[]
  for(var i=0; i<arr.length;i++){
    aa.push(arr[i].title) 
  }
  return aa
}



// Write a function filterAndDoubleNumbers that takes an array of numbers 
// and returns a new array containing only the even numbers, each multiplied by 2.


function filterAndDoubleNumbers(arr)  {
  let arr1=[]
  for (var i=0;i<arr.length ; i++){
   if(arr[i]%2==0 ) { arr1.push(arr[i]*2) }
  }
   return  arr1
  
  }

// Create an array of objects representing students with properties name, grade, and age.
// Write a function getTopStudents that returns an array of students with grades greater than 80, sorted by grade in descending order.

let students=[{name:"erling halaand",grade:85,age:22}  , {name:"kylian mbappe",grade:95,age:25} ,{name:"peter crouch",grade:55,age:42} ,{name:"maguire",grade:45,age:28} ]

   function getTopStudents(arr){
    let arr1=[]
    for (var i=0;i<arr.length;i++){
     if(arr[i].grade >80 ) { arr1.push(arr[i]) }

   }
   return arr1.sort((a, b) => b.grade - a.grade);

  }
// Create an array of objects representing products with properties name, category, and price. 
//Write a function groupProductsByCategory that returns an object where the keys are categories and the values are arrays of product names in those categories.


// ------------------------------------------------------ school work

alert( 'hi there ')
prompt('hi there ')
confirm('hi there')
console.log( typeof true)
console.log(!!NaN == !!undefined && 6 >= !!Infinity)


function rectAreaGreaterThan50(length,width){
  var area=length*width
  var condtion = area>=50
  console.log(" rect area is bigger than 50 ? " + condtion)
  return area>=50
}
rectAreaGreaterThan50(10,3)


function inchesToCentimeters(inches) {
  var a=inches*2.54
  console.log( inches +" inches is equal to  "+ a + " cm") 
  return a
}
inchesToCentimeters(10)

function MileToKM(miles) {
  var a=miles*1.60934
  console.log( miles +" miles is equal to  "+ a + " KM") 
  return a
}
MileToKM(5)

function getFullName( Fname ,Lname){
  var Fullname= Fname +" " + Lname
  console.log(Fullname)  
  return Fullname
}
getFullName( 'Bechir', 'Chermiti')


function getAge( birthday ){
  var currentyear= new Date().getFullYear()
  var Age=currentyear-birthday
  console.log(Age)  
  return Age
}
getAge( 1996)

function Message(name,age){
  var msg="Hello, my name is "+name+" and I am "+ age+ " years old."
  console.log(msg)  
  return msg
}
Message(getFullName('Bechir' , 'Chermiti'),getAge(1996))

function calculateAverage( a,b,c) 
{
  var d = (a+b+c)/3
 // console.log( 'the average is ' + d)
  return d
}
calculateAverage(1,2,3)


function isAverageGreaterThan (a,b,c,treshhold){
 var Check
 if (calculateAverage(a,b,c)>=treshhold) { Check =""}
 else { Check="not"}
 var msg= `the average of ${a} , ${b} and ${c} equal ${calculateAverage(a,b,c)} is ${Check} bigger than ${treshhold} `
 // console.log ( msg  )
 return msg
}
console.log( isAverageGreaterThan(1,5,12,10))

function CheckTemperature( Temp) {
  var msg 
  if(Temp<10){msg="It's cold "}
  else   if(Temp>10 && Temp<25){msg="It's warm "}
  else {msg="It's hot "  }
  return msg }
  console.log(CheckTemperature(50))


function checkEvenOdd(number){
  var msg
  if( number % 2==0) {  msg='even' }
  else{  msg="odd" }
  return msg
}
checkEvenOdd(3)

function canVote(age){
  var msg
  if(age>=18) { msg="Eligible to vote"}
  else { msg= "Not Eligible to vote"}
  return msg
}
canVote(10)

function Area(length,width){
  var msg =length*width
  console.log('the area of the rectangle is equal to ' +msg )

  return msg
}
Area(10,5)

function findLarget(A,B,C){

  console.log(`the max number between ${A} ,${B} and ${C} is ` + Math.max(A,B,C) )
  return Math.max(A,B,C)
}
findLarget(10,5,2)

function ClassifyRectangle( a,b,c){
  var msg
  if(a==b && b==c)            { msg=" Equilateral "}
  else if(a!=b && b!=c)       { msg="Scalene"}
  else                        { msg=" Isosceles "}
  console.log(`the triangle of side ${a} ,${b} and ${c} is classified as ` + msg )
  return(msg)
}

ClassifyRectangle(1,1,3)

function evaluateExpression (a,b,c,d){
  if((a&&b)||(c&&!d)){return true}
  else {return false }
}
evaluateExpression(true,true,true,false)

function validateCredentials(username, password, confirmPassword ){
  var msg
  if(username!="" && password==confirmPassword && password.length>8 ){ msg="Valid credentials"}
  else{ msg="Invalid credentials"}
  return msg
}
validateCredentials("a","b","b")

function canDrive(Age,haslicence){
  var msg
  if(Age>=18 && haslicence==true) { msg='Can Drive'}
  else { msg='Cannot Drive'}
  return msg
}
canDrive(19,true)


function substringExample(string, start,end)
{ return string.substring(start,end)}


function replaceSubstring(string, subtofind,subtorep){
  console.log(string.replace(subtofind,subtorep))
  return string.replace(subtofind,subtorep)}
replaceSubstring("ahmed", "hm", "hahaha")

function capitalizeFirstLetter(string)
{
  var txt 
  txt=string.substring(0,1).toUpperCase() + string.substring(1,string.length)

  console.log(txt)
  return txt
}
capitalizeFirstLetter("azerrr")

function endsWith(str,endwith){
  console.log(str.endsWith(endwith) )
  return str.endsWith(endwith) 
}

function RoundNumber(number)
{ return Math.round(number)}


function convertToFixed ( Floating ,decimal)
{
  var Newnum
  Newnum=Floating.toFixed(decimal)
  return  Newnum.toString();
}
