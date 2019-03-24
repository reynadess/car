var car=null;

function init(){
  var car = document.getElementById('CAR');
  car.style.left='0px';
  car.style.top='0px';
}

function right(){
  car.style.left = parseInt(car.style.left)+ 20 +'px';
}

function left(){
  car.style.left = parseInt(car.style.left)+ -20 +'px';
}

function up(){
  car.style.top = parseInt(car.style.top)+-20 +'px';
}

function down() {
  car.style.top  = parseInt(car.style.top)+20+'px';
}
window.onload = init();
