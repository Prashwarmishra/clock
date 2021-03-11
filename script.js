const secondHand=document.querySelector(".second-hand");
const minuteHand=document.querySelector(".minute-hand");
const hourHand=document.querySelector(".hour-hand");

function startClock(){
    const time=new Date();
    const second=time.getSeconds();
    const secondDegree=((second/60)*360)+90;
    if(secondDegree == 90){
        secondHand.style.transition="all 0s";
        return;
    }
    secondHand.style.transform=`rotate(${secondDegree}deg) translateX(10px)`;

    const minute=time.getMinutes();
    const minuteDegree=((minute/60)*360)+90;
    if(minuteDegree == 90){
        minuteHand.style.transition="all 0s";
        return;
    }
    minuteHand.style.transform=`rotate(${minuteDegree}deg) translateX(10px)`;

    const hour=time.getHours();
    const hourDegree=((hour/60)*360)+90;
    if(hourDegree == 90){
        hourHand.style.transition="all 0s";
        return;
    }
    hourHand.style.transform=`rotate(${hourDegree}deg) translateX(10px)`;

}

setInterval(startClock, 1000);