let homeScore = 0;
let guestScore = 0;

let homeEl = document.querySelector(".home .score")
let guestEl = document.querySelector(".guest .score")

let homeOne = document.querySelector(".home .increment-btn .one")
console.log(homeOne)

function increment(label) {
    score = Number(label.slice(-1))
    if (label.match("guest")) {
        guestEl.innerHTML = guestScore;
        guestEl.innerHTML = guestScore;
    } else {
        homeScore = homeScore + score;
        homeEl.innerHTML = homeScore;
    }
  }

homeOne.addEventListener("click", function() {increment("home-1")}, false);
