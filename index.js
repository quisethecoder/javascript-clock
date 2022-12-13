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

// Clock Code Below

let f = twelvehour;
f();
function twelvehour() {
  var dat = new Date();
  dat.setHours(19); 
  var h = dat.getHours()
  var m = dat.getMinutes()
  var s = dat.getSeconds()
  if (h >= 12) {
    time.innerHTML = (h - 12) + ":" + m + ":" + s + "pm"
  } else {
    time.innerHTML = h + ":" + m + ":" + s
  }
}

function tfourhour() {
  var dat1 = new Date();
  dat1.setHours(19); 
  var h1 = dat1.getHours()
  var m1 = dat1.getMinutes()
  var s1 = dat1.getSeconds()
  time.innerHTML = h1 + ":" + m1 + ":" + s1
}
setInterval(() => f(), 1000);
document.getElementById("ampm").onclick = () => { f = twelvehour; f(); }
document.getElementById("military").onclick = () => { f = tfourhour; f(); }
    

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