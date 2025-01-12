let countDownInterval;

function main(){
    const dateGab = new Date("2021-01-23T23:59:59");
    const datePhil = new Date("2025-03-10T23:59:59");
    const timeNow = new Date().getTime();
    if(dateGab.getTime() > timeNow){
        countDown(dateGab);
    }
    else {
        countDown(datePhil);
    }
}

function countDown(targetDate) {

    if (countDownInterval){
        clearInterval(countDownInterval);
    }

    const targetTime =targetDate.getTime();

    countDownInterval = setInterval(() => {
        const timeNow = new Date().getTime();
        const timeLeft = targetTime - timeNow;
        
        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.querySelector(".days").textContent = days;
            document.querySelector(".hours").textContent = hours;
            document.querySelector(".minutes").textContent = minutes;
            document.querySelector(".seconds").textContent = seconds;
        }
        else {
            clearInterval(countDownInterval);

            // Update DOM to show zero
            document.querySelector(".days").textContent = "0";
            document.querySelector(".hours").textContent = "0";
            document.querySelector(".minutes").textContent = "0";
            document.querySelector(".seconds").textContent = "0";

            console.log("Countdown has ended!");
        }
    });
}

main();
