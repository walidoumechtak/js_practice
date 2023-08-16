const   faceSecond = document.querySelector(".second");
const   faceMinut = document.querySelector(".minut");
const   faceHour = document.querySelector(".hour");

function setDate()
{
    const now = new Date();
    const seconds = now.getSeconds();
    const secDeg = ((seconds / 60) * 360 + 270);
    faceSecond.style.transform = `rotate(${secDeg}deg)`;

    const   minut = now.getMinutes();
    const   minDeg = ((minut * 60) / 360 + 270);
    faceMinut.style.transform = `rotate(${minDeg}deg)`;
    // console.log(minut);

    const   hour = now.getHours();
    const   hourDeg = ((hour * 60) / 360 + 270);
    faceHour.style.transform = `rotate(${hourDeg}deg)`;
    // console.log(hour);
}

setInterval(() => {
    setDate();
}, 1000);