var time=0;
var startFlag = true;
$(document).ready(function(){
    buttonEvt();

});

function init(){
    document.getElementById("time").innerHTML = "00:00:00";
}

function buttonEvt(){
    var hour = 0;
    var minutes = 0;
    var seconds = 0;
    var timer;
        
    // start button function
    
    $('#startbutton').click(function(){

        if (startFlag){
            $(".fa").css("color","#FAED7D")
            this.style.color = '#4C4C4C';
            startFlag = false;
         
        if (time == 0){
            init();

        }
        timer = setInterval(function(){

            time ++;
            minutes = Math.floor(time/60);
            hour = Math.floor(time/60);
            seconds = time % 60;
            minutes = minutes % 60;
            
            var th = hour;
            var tm = minutes;
            var ts = seconds;
            if(th < 10){
                th = "0" + hour;
            }
            if(tm < 10){
                tm = "0" + minutes;

            }
            if(ts < 10){
                ts = "0" + seconds;

            }
            document.getElementById("time").innerHTML = th + ":" + tm + ":" + ts;

        }, 1000);    
    }

    });

    // pausebutton

    $('#pausebutton').click(function(){
        if(time != 0 ){
            $(".fa").css("color", "#FAED7D")
            this.style.color = "#4C4C4C";
            clearInterval(timer);
            startFlag = true;
        }

    });

    $('#stopbutton').click(function(){

        if(time != 0 ){
            $(".fa").css("color","#FAED7D")
            this.style.color = '#4C4C4C';
            clearInterval(timer);
            startFlag = true;
            time= 0 ;
            init();
        }
    });
}
