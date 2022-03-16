let answer;
let Q = prompt("Enter a yes or no queston");
let testMode = false;
let testing = "go away";
let roll = Math.floor(Math.random() * 10);
switch (roll) {
  case 1:
    answer = "go away";
    break;
  case 2:
    answer = "absolutely not";
    break;
  case 3:
    answer = "no";
    break;
  case 4:
    answer = "I refuse to answer";
    break;
  case 5:
    answer = "yeah!";
    break;
  case 6:
    answer = "it is certain";
    break;
  case 7:
    answer = "maaaaaaaaaaaaaaybeeeeeee";
    break;
  case 8:
    answer = "my sorces say yes";
    break;
  case 9:
    answer = "absolutely";
    break;
  default:
    answer = "uhh...no!!!!!!!!!";
}
if (testMode) {
  answer = testing;
}
switch (answer) {
  case "I refuse to answer":
    alert("I refuse to answer");
    break;
  case "go away":
    alert("go away!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    break;
  default:
    alert("Your anwser to " + Q + " is " + answer);
}
