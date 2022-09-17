// calculator for cylinder's surface size
// date: 2022-09-17

let radius;
let circumference;
let height;
let size;

window.alert("Calculating Surface Size for Cylinder");
radius = Number(window.prompt("Please tell me the radius"));
height = Number(window.prompt("Please tell me the height"));

circumference = 2 * Math.PI * radius;

size = (2 * Math.PI * radius *radius + circumference * height).toFixed(2);

// console.log("The circumference is ", circumference);

let message = "Size of Cylinder is " + size;
window.alert(message);