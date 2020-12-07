// https://repl.it/@Garimasharma814/My-Quiz?embed=1&output=1#index.js

var readlineSync = require('readline-sync');
// console.log("Please enter your Name");
var userName = readlineSync.question("Please enter your Name ");
console.log(`Hey ${userName} Nice to meet you\n Welcome to the Quiz`);
var play = readlineSync.question('Wanna play this Quiz? y/n ');
var score = 0;
if (play == 'y') {
  var ready = readlineSync.question("Rules: \n 1. You don't have to write the whole answer write the correct option (for ex: 1). \n 2. If you wrote the correct answer instead of the correct option your answer would be considered wrong so better write the option name only. \n 3. Each correct answer will contain +1 point. \n 4. Wrong answer doesn't contain any negative point. \n 5. Better check your capslock is off use only lower case letters. \n  So you ready for the Quiz? y/n ");
  qsnNumber = 1;
  if (ready == 'y') {
    function questions(qsn, qsnContain, options, correctAnswer) {
      if (qsnNumber <= 10) {
        console.log("\nQ." + `${qsnNumber} ` + qsn);
      }
      for (i = 0; i < options.length; i++) {
        console.log(`${i + 1}. ${options[i]}`);
      }
      userAnswer = readlineSync.question("Enter your choice ");
      if (userAnswer == correctAnswer) {
        console.log("Damn! You're right My " + qsnContain + " is " + options[correctAnswer - 1]);
        score++;
        console.log("Your score is " + score);
      }
      else {
        console.log("You're wrong My " + qsnContain + " is " + options[correctAnswer - 1] + "\n It's okay try the next one");
        console.log("Your score is " + score);
      }
      qsnNumber++;
    }
    questions("What's my official full Name?", "full name", ["Garima Sharma", "Garima Vats"], 1);
    questions("What's my age?", "age", [18, 20, 19, 17], 3);
    questions("What's my favroite food?", "favroite food", ["Mexican", "Chinese", "French dish", "South Indian"], 4);
    questions("What's my favroite colour?", "favroite colour", ["Pink", "Red", "Blue", "Black"], 4);
    questions("Where do I live?", "place", ["Delhi", "UP", "MP", "South India"], 2);
    questions("What's my favroite fast food?", "favroite fast food", ["Pizza", "Momos", "Burger", "Spring Rolls"], 2);
    questions("Which is my favorite drink?", "favorite drink", ["Chai", "Hot Chocolate", "Cappuccino", "Coffee"], 1);
    questions("Which is my favorite shake?", "favorite shake", ["Chocolate Shake", "Mango Shake", "Banana Shake", "Milk Shake"], 3);
    questions("Which country I dream to visit?", "dream place", ["Russia", "Brazil", "Europe", "USA"], 4);
    questions("What is my favorite movie type?", "favorite movie type", ["Action & Sci-fi", "Horror", "Comedy", "Romantic"], 1);
  }
  else {
    console.log("It's OK Bye");
  }
}
else {
  console.log("Okay Bye Take care");
}
console.log("Your total score is score is " + score + "/10");
if (score <= 5) {
  var bonus = readlineSync.question("seems you don't know me well \n Well I have a bonus point for you wanna try? y/n")
  if (bonus == 'y') {
    var b = readlineSync.question("Am I Vegeterian? y/n")
    if (b == "y") {
      console.log("You're right I'm vegeterain");
      console.log("Your score is " + `${score + 1}`)
    }
    else {
      console.log(`You're wrong again ${userName} \n Seems you really don't know me`);
    }
  }
}
else {
  console.log(`Congrates ${userName} ! You know me real well`)
}
