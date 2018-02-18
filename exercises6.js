// next Catholic Christmas date
var nextChristmasDate = new Date ("Dec 25, 2018 00:00:01").getTime();

// count down every 1 second

var count = setInterval(function(){
  //get current date and time
  var current = new Date().getTime();
  
  //calculate distance between current date and time and Christmas
  var distance = nextChristmasDate - current;
  
  //calculations for days, hours, minutes, seconds
  var d = Math.floor(distance / (1000 * 60 * 60 * 24));
  var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((distance % (1000 * 60)) / 1000);
  
  //display counting 
  document.getElementById("cathChr").innerHTML = `${d}d ${h}h ${m}m ${s}s`;
}, 1000);



// next Orthodox Christmas date

var nextOchristmasDate = new Date ("Jan 07, 2019 00:00:01").getTime();

// count down every 1 second

var count = setInterval(function(){
  //get current date and time
  var current = new Date().getTime();
  
  //calculate distance between current date and time and Christmas
  var distance = nextOchristmasDate - current;
  
  //calculations for days, hours, minutes, seconds
  var d = Math.floor(distance / (1000 * 60 * 60 * 24));
  var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((distance % (1000 * 60)) / 1000);
  
  //display counting 
  document.getElementById("orthChr").innerHTML = `${d}d ${h}h ${m}m ${s}s`;
}, 1000);
