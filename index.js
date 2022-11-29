// Date and time code

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

// 12 hour clock code

document.getElementById("ampm").addEventListener("click", function(){
    const ap = document.getElementById("ampm");

    if(ap.innerHTML == "Switch To 12 Hour Clock"){
        time.innerHTML= new Date().toLocaleTimeString;
        ap.innerHTML= "Switch To Military Time";
    } else{
        time.innerHTML= hour + ":" + minute + ":" + seconds;
        ap.innerHTML= "Switch to 12 Hour Clock"
    }
});



// dark mode button code

document.getElementById("dm").addEventListener("click", function() {
    const css = document.getElementById("cssfile");
    const dm = document.getElementById("dm");

    if(dm.innerHTML == "Dark Mode"){
        css.setAttribute("href", "./css/darkmode.css");
        dm.innerHTML= "Light Mode";
    }else{
        css.setAttribute("href", "./css/styles.css");
        dm.innerHTML= "Dark Mode";
    }
});