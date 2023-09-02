let hour = document.getElementById("hrs");
let Minute = document.getElementById("min");
let Second = document.getElementById("sec");

setInterval(()=>{


    let currentTime = new Date();
console.log(currentTime);
hour.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
Minute.innerHTML = (currentTime.getMinutes()<10?"0":"")+ currentTime.getMinutes();
Second.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000);


