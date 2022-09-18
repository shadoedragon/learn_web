// calculator for cylinder's surface size
// date: 2022-09-18
// version 2.0
//web browser interface

let radius;
let circumference;
let height;
let size;

document.getElementById("calc").onclick = function() {

    radius = Number(document.getElementById("rTextBox").value);

    height = Number(document.getElementById("hTextBox").value);

    circumference = 2 * Math.PI * radius;

    size = (2 * Math.PI * radius * radius + circumference * height).toFixed(2);

    document.getElementById("sLabel").innerHTML = "Size of Cylinder is " + size;
    
}