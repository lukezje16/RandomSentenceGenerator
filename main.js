//program to produce a random inspirational message
//random array of verbs
const randomVerbs = [
  "accomplish",
  "pursue",
  "create",
  "explore",
  "overcome",
  "discover",
  "embrace",
  "inspire",
  "imagine",
  "conquer",
];
//random array of nouns
const randomNouns = [
  "goals",
  "dreams",
  "aspirations",
  "ambitions",
  "challenges",
  "opportunities",
  "ideas",
  "projects",
  "journeys",
  "adventures",
];
//random array of adjectives
const randomAdjectives = [
  "gritty",
  "determined",
  "courageous",
  "resilient",
  "persistent",
  "tenacious",
  "adventurous",
  "fearless",
  "confident",
  "unwavering",
];
//random array of energy words
const energyWords = [
  "vitality",
  "enthusiasm",
  "liveliness",
  "spirit",
  "verve",
  "vigor",
  "pep",
  "drive",
  "stamina",
  "zeal",
];

//place to store the random message as a string
let randomMessage = "";

//generates a random number based on size of array passed in
function generateRandomWord(word) {
  let randomInt = Math.floor(Math.random() * word.length);
  //return randomly selected word from the list
  return word[randomInt];
}

//function to fill in the random message with each random parameter and return the message
function createRandomMessage(verb, noun, adjective, energy) {
  randomMessage = `        Believe in yourself and your ability to ${verb} ${noun}. You have the ${adjective} ${energy} to overcome any obstacle and achieve your dreams.`;
  return console.log(randomMessage);
}

//decorate the message with a border so it stands out a little more
function DecorateMessage() {
  const border = "=".repeat(160);
  const secondaryBorder = "*".repeat(160);
  console.log(border);
  console.log(secondaryBorder);
  console.log(border);
}

DecorateMessage();

createRandomMessage(
  generateRandomWord(randomVerbs),
  generateRandomWord(randomNouns),
  generateRandomWord(randomAdjectives),
  generateRandomWord(energyWords)
);

DecorateMessage();
