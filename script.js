var seconds = 0;
var minutes = 0;
var hours = 0;

function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }
      
  setInterval( function() {
      var time = getSecondsSinceStartOfDay();
      console.log(time);
      seconds = Math.floor(time % 60);
      minutes = Math.floor(time / 60 % 60);
      hours = Math.floor(time / 3600 % 12);
     
      document.querySelector('#seconds').style.transform = "rotate(" + seconds*6 + "deg)";
      document.querySelector('#minutes').style.transform = "rotate(" + minutes*6 + "deg)";
      document.querySelector('#hour').style.transform = "rotate(" + hours*30 + "deg)";

  }, 1000);
  