function cal() {
var start = performance.now();
document.getElementById("cals").innerText = (document.getElementById("carbs").value*4)+(document.getElementById("prts").value*4)+ (document.getElementById("fats").value *9);
document.getElementById("cbs").innerText = document.getElementById("carbs").value*4 + " Calories";
document.getElementById("pts").innerText = document.getElementById("prts").value*4 + " Calories";
document.getElementById("fts").innerText = document.getElementById("fats").value*9 + " Calories";
var end = performance.now();
var wpn = end - start; 
alert("Calculated in "+wpn.toFixed(2)+" ms 😎");
}
