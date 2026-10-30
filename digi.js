const light = document.getElementById("lightBtn");
const dark = document.getElementById("darkBtn");

light.addEventListener("click", function () {
    localStorage.setItem("color", "light");
    document.body.classList.add("light");
    document.body.classList.remove("dark");
});

dark.addEventListener("click", function () {
    localStorage.setItem("color", "dark");
    document.body.classList.add("dark");
    document.body.classList.remove("light");
});

let savedColor = localStorage.getItem("color");

if (savedColor === "dark") {
    document.body.classList.add("dark");
} else {
    document.body.classList.add("light");
}

function updateTime() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

  
    document.getElementById("day").innerText =
        date.toLocaleDateString("en-US", {
            weekday: "long"
        });

   
    document.getElementById("date").innerText =
        date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
}

let dates = new Date();

document.getElementById("daydisplay").innerText =
    "☀️ " + dates.toLocaleDateString("en-US", {
        weekday: "long"
    });

document.getElementById("monthdisplay").innerText =
    "📅 " + dates.toLocaleDateString("en-US", {
        month: "long"
    });

updateTime();

setInterval(updateTime, 1000);