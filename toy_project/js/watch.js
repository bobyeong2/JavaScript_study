const clock = document.querySelector('.h1_clock');

function getTime(){
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    // clock.innerHTML = hour + ":" + minutes + ":" + seconds;
    // hours, minutes가 10 미만이면 0을 붙이도록 하고, 백틱(`)을 이용해 + 하지 않고 함수 사용
    clock.innerHTML = `${hour < 10 ? `0${hour}`:hour}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`
}

function init(){

    setInterval(getTime,1000);
}
init();