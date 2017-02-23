/*document.addEventListener( 'click', function (e) {
  $('#myModal').modal('show')
});*/





const circ = new mojs.Shape({
  className: "theClockCircle",
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

$(document).ready(function() {
  $('.theClockCircle').click(function() {
   $("#myModal").modal("show")
  });
});

console.log(circ);
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;

function countDown(min, sec){
  $("#myModal").modal("hide")
  console.log("minutes: " + min)
  console.log("seconds: " + sec)
  var w = new Date();
  const makeTime = w.getHours() + ":" + (w.getMinutes() + parseInt(min)) + ":" + w.getSeconds();
  const test = new Date('February 23, 2017 ' + makeTime);
  var timeinterval = setInterval(function(){
  var now = new Date();

  //var end = new Date('February 22, 2017 17:00:00');
  //var end = (now.getTime() + min*60000);
  //var now = new Date();
  var m = now.getMinutes();
  var t = m + parseInt(min);
  console.log("m: " + t);
  //var makeTime = now.getHours() + ":" + (now.getMinutes() + parseInt(min)) + ":" + now.getSeconds();
  console.log("makeTime: " + makeTime);

  console.log(test);
  console.log("now: " + now);

  var distance = test.getTime() - now.getTime();
  if(distance <= 1){
    document.getElementById("theClock").innerHTML = "!!!"
    return;
  }
  var minutes = Math.floor((distance % _hour) / _minute);
  var seconds = Math.floor((distance % _minute) / _second);
  console.log(seconds);
  console.log(minutes);
  if(minutes === 0 && seconds === 10){
    $("#theClock").css({'margin-left': '-77px', 'font-size':'1080%'});
    document.getElementById("theClock").innerHTML = seconds;
  }
  else if(minutes === 0 && seconds < 10){
    $("#theClock").css({'margin-left': '-43px', 'font-size':'1020%'});
    document.getElementById("theClock").innerHTML = seconds;
  //  $("#theClock").addClass('animated pulse');
  }
  else{
    document.getElementById("theClock").innerHTML = pad(minutes) + ":" + pad(seconds);
  }

}, 1000);
}

function pad(value) {
    if(value < 10) {
        return '0' + value;
    } else {
        return value;
    }
}
