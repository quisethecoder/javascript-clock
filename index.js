let currentDate = new Date();

const date = document.querySelector(".date");
const time = document.querySelector(".clock");

function getDay(){
    let currentDate = new Date();
    let month = currentDate.getMonth()+1;
    let day = currentDate.getDate();
    let year = currentDate.getFullYear();

    date.innerHTML = month + "/" + day + "/" + year;
}

getDay();

function getTime(){
    let currentDate = new Date();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    time.innerHTML= hour + ":" + minute + ":" + seconds;
}

setInterval(getTime,1000);