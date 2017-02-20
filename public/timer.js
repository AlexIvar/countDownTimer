const circ = new mojs.Shape({
  radius: 200 ,
  fill:'none',
  stroke: { 'orange' : 'magenta' },
  strokeDasharray: '100%',
//  strokeDashoffset: { '100%' : '-100%' },
  angle:        180,
  strokeWidth:      4,
  duration:     3000,
  repeat:       10000,

}).play();

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;

function countDown(){
  var timeinterval = setInterval(function(){

  var end = new Date('February 20, 2017 19:00:00');
  var now = new Date();

  var distance = end.getTime() - now.getTime();
  console.log(distance);
  if(distance <= 0){
    document.getElementById("theClock").innerHTML = "Samkoman hefst núna!"
    return;
  }
  var minutes = Math.floor((distance % _hour) / _minute);
  var seconds = Math.floor((distance % _minute) / _second);
  document.getElementById("theClock").innerHTML = pad(minutes) + ":" + pad(seconds);
}, 1000);
}

function pad(value) {
    if(value < 10) {
        return '0' + value;
    } else {
        return value;
    }
}
