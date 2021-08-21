// 1.
// function printToWindow(){
//     document.write("hello there");
// }
// printToWindow();

// 2.
// function printToWindow(){
//     document.write("hello there David");
// }
// printToWindow();

// 3.
// function printToWindow(userName) {
//     document.write("hello there " + userName);
// }
// printToWindow("shmuel");

// 4.
// function printToWindow(userName, userLastName, userAge) {
//     document.write(`name : ${userName}, last name: ${userLastName}, age : ${userAge}`);
// }
// printToWindow("shmuel", "moche", 27);

// 5.
// function printToWindow(userName, userAge) {
//     var divElemnet = document.getElementById("print");
//     document.write(`name : ${userName}, age : ${userAge}`);
// }
// printToWindow("shmuel", 27);

// 6.
// function printToDiv(userAge, userNeme, userLastNeme) {
//     var divElemnet1 = document.getElementById("print2");
//     var divElemnet2 = document.getElementById("print3");
//     var divElemnet3 = document.getElementById("print4");
//     divElemnet1.innerHTML = `name : ${userNeme}`
//     divElemnet2.innerHTML = `last neme : ${userLastNeme}`
//     divElemnet3.innerHTML = `age : ${userAge}`
// }
// printToDiv(27, "shmuel", "moche");

// 7.
// function printInDiv(userAge, userNeme) {
//     document.write(`<div>age : ${userAge}, name : ${userNeme}</div>`);   
// }
// printInDiv(27, "shmuel");

// 8.
// function printInP(userAge, userName, userLastName) {
//         document.write(`<div><p>age : ${userAge}, name : ${userName}, last name : ${userLastName}</p></div>`);
//     }
//     printInP(27, "shmuel", "moche");

// 9.
// function printToP(userAge, userName, userLastName) {
//     document.write(`<p id ='prf'>age : ${userAge}, name : ${userName}, last name : ${userLastName}</p>`);
// }
// printToP(27, "shmuel", "moche");

// 10.
// function printToP(userAge, userName, userLastName) {
//     document.write(`<div><p id ='prf'>age : ${userAge}, name : ${userName}, last name : ${userLastName}</p></div`);
// }
// printToP(27, "shmuel", "moche");

////11
// var firstName = prompt("enter first name");
// function printFirstName(name) {
//   document.write(`<p id="parag">name:${name}</p>`);
// }
// printFirstName(firstName);

// var lastName = prompt("enter last name");
// function printLastName(lastname) {
//   document.write(`<p id="parag">name:${firstName} lastname:${lastname}</p>`);
// }
// printLastName(lastName);

////12
// var firstName = prompt("enter first name");
// function printFirstName(name) {
//   document.write(`<p id="parag">name:${name}</p>`);
// }
// printFirstName(firstName);

// var lastName = prompt("enter last name");
// const d = new Date();
// function printLastName(lastname) {
//   document.getElementById("parag").innerHTML += ` lastname:${lastname}`;
//   document.write(d);
// }
// printLastName(lastName);

// 13.
// var userColor = prompt("choose color"),
//   userCompany = prompt("choose car company"),
//   userCapacity = prompt("choose car capacity");

// function getCarObject(color, company, capacity) {
//   car = {
//     color: color,
//     company: company,
//     capacity: capacity,
//   };
//   document.write(car.color, car.company, car.capacity);
// }
// getCarObject(userColor, userCompany, userCapacity);

////14

// var userColor = prompt("choose color"),
//   userCompany = prompt("choose car company"),
//   userCapacity = prompt("choose car capacity");
// function getCarObject(color, company, capacity) {
//   secondCar = {
//     color: color,
//     company: company,
//     capacity: capacity,
//     year: new Date().getFullYear(),
//   };
//   document.write(secondCar.color, secondCar.company, secondCar.capacity, secondCar.year);
// }
// getCarObject(userColor, userCompany, userCapacity);

////15
// var userColor = prompt("choose color"),
//   userCompany = prompt("choose car company"),
//   userCapacity = prompt("choose car capacity");
// function getCarObject(color, company, capacity) {
//   thirdCar = {
//     color: color,
//     company: company,
//     capacity: capacity,
//   };
//   document.write(`<div>${thirdCar}</div>`);
// }
// getCarObject(userColor, userCompany, userCapacity);

////16

// var userColor = prompt("choose color"),
// userCompany = prompt("choose car company"),
// userCapacity = prompt("choose car capacity");
// function getCarObject(color, company, capacity) {
//   forthCar = {
//     color: color,
//     company: company,
//     capacity: capacity,
//     year: new Date().getFullYear(),
//   };
//   document.write(
//     `<div>${forthCar.color}</div>`,
//     `<div>${forthCar.company}</div>`,
//     `<div>${forthCar.capacity}</div>`,
//     `<div>${forthCar.year}</div>`
//   );
// }
// getCarObject(userColor, userCompany, userCapacity);

//17
// var userColor = prompt("choose color"),
//   userCompany = prompt("choose car company"),
//   userCapacity = prompt("choose car capacity");
// function getCarObject(color, company, capacity) {
//   fifthCar = {
//     color: color,
//     company: company,
//     capacity: capacity,
//     year: new Date().getFullYear(),
//   };
//   document.write(
//     `<div id="firstDiv">${fifthCar.color}</div>`,
//     `<div id="secondDiv">${fifthCar.company}</div>`,
//     `<div id="thirdDiv">${fifthCar.capacity}</div>`,
//     `<div id="fourthDiv">${fifthCar.year}</div>`
//   );
// }
// getCarObject(userColor, userCompany, userCapacity);
