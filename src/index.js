window.onload = () => {

    document.querySelector("#excuse").innerHTML = myExcuse();

}

let myExcuse = () => {

    // Variables
    let who = ["The dog", "My sister", "My friend", "A stranger", "A cat", "The Wolverine", "Spiderman", "A pig", "Totoro", "The rain", "The wind", "My parents", "The love of my life", "A raging storm"];
    let action = ["ate", "peed", "destroyed", "swallowed", "ripped to pieces", "crushed", "vanished", "burned", "created a golem that destroyed", "desecrated", "bewitched my sister into ripping"];
    let what = ["homework", "keys", "house", "rooftop", "walls", "my thesis presentation", "my will to live", "the final project"];
    let when = ["right before my class", "just when I was leaving", "when I got to school", "when I finished", "during my lunch break", "at breakfast", "the night before"];

    // Random numbers
    let rndmWho = Math.floor(Math.random() * who.length);
    let rndAction = Math.floor(Math.random() * action.length);
    let rndWhat = Math.floor(Math.random() * what.length);
    let rndWhen = Math.floor(Math.random() * when.length);


   let result = who[rndmWho] + action[rndAction] + what[rndWhat] + when[rndWhen];
    
    return result;
};

