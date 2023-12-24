window.onload = function (){

    let ms = document.getElementById('milliseconds');
    let sec = document.getElementById('seconds');
    let min = document.getElementById('minutes');
    let hr = document.getElementById('hours');


    var btnstart = document.querySelector('#start');
    var btnstop = document.querySelector('#stop');
    var btnreset = document.querySelector('#reset');

    var interval;
    let seconds = 0;
    let minutes = 0;
    let milliseconds = 0;
    let hour = 0;

    ms.innerHTML = "00";
    sec.innerHTML = ":00";
    min.innerHTML =":00";
    hr.innerHTML = "00";

    btnstart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(start, 10);
    }

    btnstop.onclick = function() {
        clearInterval(interval);
    }

    btnreset.onclick = function (){
        clearInterval(interval);
        milliseconds = 0;
        seconds = 0;
        minutes= 0;
        hour= 0;
        ms.innerHTML = milliseconds + "0";
        sec.innerHTML = ":" + seconds + "0";
        min.innerHTML = ":" + minutes + "0";
        hr.innerHTML = hour + "0";
    }


    function start() {
        milliseconds++;

         
        if(milliseconds < 9){
          ms.innerHTML = "0" + milliseconds;
        }
  
        if (milliseconds > 9){
        ms.innerHTML = milliseconds;
        
        } 
    
        if (milliseconds > 99) {

            seconds++;
            sec.innerHTML = ":0" + seconds;
            milliseconds = 0;
            ms.innerHTML = "0" + 0;
        }

        if (seconds > 9){
            sec.innerHTML = ":" + seconds;
            } 

        if (seconds > 58) {
            minutes++;
            min.innerHTML = ":0" + minutes;
            seconds = 0;
            sec.innerHTML = ":0" + seconds;
        }
        if (minutes > 9){
            min.innerHTML = ":" + minutes;
            } 

        if (minutes > 58) {
            hour++;
            hr.innerHTML = "0" + hour;
            minutes = 0;
            min .innerHTML = ":0" + minutes;
        }

        if (hour > 9) {
            hr.innerHTML = hour;
        }

    }
}