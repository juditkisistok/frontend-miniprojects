let homeScore = 0;
let guestScore = 0;

const homeEl = document.querySelector(".home .score")
const guestEl = document.querySelector(".guest .score")

const homeOne = document.querySelector(".home .increment-btn .one")
const homeTwo = document.querySelector(".home .increment-btn .two")
const homeThree = document.querySelector(".home .increment-btn .three")

const guestOne = document.querySelector(".guest .increment-btn .one")
const guestTwo = document.querySelector(".guest .increment-btn .two")
const guestThree = document.querySelector(".guest .increment-btn .three")

function increment(label) {
    score = Number(label.slice(-1))
    if (label.match("guest")) {
        guestScore += score;
        guestEl.innerHTML = guestScore;
    } else {
        homeScore += score;
        homeEl.innerHTML = homeScore;
    }
  }

homeOne.addEventListener("click", function() {increment("home-1")});
homeTwo.addEventListener("click", function() {increment("home-2")});
homeThree.addEventListener("click", function() {increment("home-3")});

guestOne.addEventListener("click", function() {increment("guest-1")});
guestTwo.addEventListener("click", function() {increment("guest-2")});
guestThree.addEventListener("click", function() {increment("guest-3")});
