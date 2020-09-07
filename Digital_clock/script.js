var today  = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

function displayTime(){

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    
    var h = updateTime(hours);
    var m = updateTime(minutes);
    var s = updateTime(seconds);
    
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m ;
    document.getElementById('second').innerHTML = s;

    
}

function updateTime(two_digits) {
    if (two_digits < 10) {
        return "0" + two_digits;
    }
    else {
        return two_digits;
    }
}
  
// setInterval(function(){
//     display();
// },1000);

setInterval(() => {
    displayTime();
    
    },1000);

