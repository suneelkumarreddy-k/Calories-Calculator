function cal() {
var start = performance.now();
document.getElementById("cals").innerHTML = (document.getElementById("carbs").value*4)+(document.getElementById("prts").value*4)+ (document.getElementById("fats").value *9);
document.getElementById("cbs").innerHTML = document.getElementById("carbs").value*4 + " Calories";
document.getElementById("pts").innerHTML = document.getElementById("prts").value*4 + " Calories";
document.getElementById("fts").innerHTML = document.getElementById("fats").value*9 + " Calories";
var end = performance.now();
var wpn = end - start; 
alert("Calculated in "+wpn+" ms 😎");
}
