/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = myExcuse();
};

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
    "The love of my life",
    "A raging storm"
  ];
  let action = [
    "ate my",
    "peed on",
    "destroyed the",
    "swallowed my",
    "ripped to pieces my",
    "crushed the",
    "vanished the",
    "burned my",
    "created a golem that destroyed my",
    "desecrated my",
    "bewitched my sister into ripping my"
  ];
  let what = [
    "homework",
    "keys",
    "house",
    "rooftop",
    "walls",
    "thesis presentation",
    "will to live",
    "final project"
  ];
  let when = [
    "right before my class",
    "just when I was leaving",
    "when I got to school",
    "when I finished",
    "during my lunch break",
    "at breakfast",
    "the night before"
  ];

  // Random numbers
  let rndmWho = Math.floor(Math.random() * who.length);
  let rndAction = Math.floor(Math.random() * action.length);
  let rndWhat = Math.floor(Math.random() * what.length);
  let rndWhen = Math.floor(Math.random() * when.length);

  let result = `${who[rndmWho]} ${action[rndAction]} ${what[rndWhat]} ${when[rndWhen]}`;

  return result;
}
