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

setInterval(getTime,1000);

function getTime(){
    let currentDate = new Date();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    time.innerHTML= hour + ":" + minute + ":" + seconds;
}

    

// 12 hour clock code

document.getElementById("ampm").addEventListener("click", function(){
    const ap = document.getElementById("ampm");

    if(ap.innerHTML == "Switch To 12 Hour Clock"){
      
        setInterval(anotherTime,1000)

       function anotherTime(){

        const currentDate = new Date();
        const hour = currentDate.getHours();
        const minute = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();
        const endingOfClock = "AM"

        if(hour == 0){
            hour = 12;
        }
        if(hour < 10){
            hour = "0" + hour;
        }
       if(hour > 12){
            hour = hour - 12;
            endingOfClock = "PM"
        }
       if(minute < 10){
            minute = "0" + minute;
        }
        if(seconds < 10){
            seconds = "0" + minute;
        } 
       

       time.innerHTML = hour + ":" + minute + ":" + seconds + endingOfClock;
       ap.innerHTML= "Switch To Military Time";
       
    }

    } else{ setInterval(getNewTime,1000);

        function getNewTime(){
            let currentDate = new Date();
            let hour = currentDate.getHours();
            let minute = currentDate.getMinutes();
            let seconds = currentDate.getSeconds();
            


            time.innerHTML= hour + ":" + minute + ":" + seconds;
            ap.innerHTML= "Switch to 12 Hour Clock"
        }   
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