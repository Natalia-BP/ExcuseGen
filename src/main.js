/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("button.excuse").addEventListener("click", () => {
    document.querySelector("h1.excuse").innerHTML = myExcTitle();
    document.querySelector("h2.excuse").innerHTML = myExcuse();
  });
};

function myExcTitle() {
  let title = [
    "OMG! This will BLOW your mind...",
    "I know this sounds too weird, but it reeeaaally happened...",
    "GEEZUS LORD! This just happened to me...",
    "HOLY COW! You are NOT gonna believe this..",
    "I swear this happened!"
  ];

  let rndTitle = Math.floor(Math.random() * title.length);

  let finalTitle = `${title[rndTitle]}`;

  return finalTitle;
}

function myExcuse() {
  // Variables
  let who = [
    "The dog",
    "My sister",
    "My friend",
    "A stranger",
    "A cat",
    "The Wolverine",
    "Spiderman",
    "A pig",
    "Totoro",
    "The rain",
    "The wind",
    "My parents",
    "A raging storm",
    "Voldemort"
  ];

  let action = [
    "ate my",
    "peed on my",
    "destroyed my",
    "swallowed my",
    "ripped to pieces my",
    "crushed my",
    "vanished my",
    "burned my",
    "created a golem that destroyed my",
    "desecrated my",
    "bewitched my sister into ripping my",
    "broke into my house and stole my"
  ];

  let what = [
    "homework",
    "keys",
    "house",
    "rooftop",
    "walls",
    "thesis presentation",
    "will to live",
    "final project",
    "christmas gifts",
    "nice sweater",
    "running shoes",
    "TV",
    "outfit",
    "purse",
    "glasses",
    "clothes"
  ];

  let when = [
    "right before my class",
    "just when I was leaving",
    "when I got to school",
    "during my lunch break",
    "at breakfast",
    "the night before",
    "while I was sleeping",
    "while I was out",
    "while I was taking a shower",
    "yesterday",
    "a few minutes ago",
    "just an hour before"
  ];

  // Random numbers
  let rndmWho = Math.floor(Math.random() * who.length);
  let rndAction = Math.floor(Math.random() * action.length);
  let rndWhat = Math.floor(Math.random() * what.length);
  let rndWhen = Math.floor(Math.random() * when.length);

  let result = `${who[rndmWho]} ${action[rndAction]} ${what[rndWhat]} ${when[rndWhen]}`;

  return result;
}
