document.getElementById("submit").onclick = function () {
  let answer;
  let inadmin = document.getElementById("admin password").value;
  let Q = document.getElementById("Q").value;
  let admin;
  let testMode = false;
  let testing = "absolutely";
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
  if (inadmin === "Og") {
    admin = true;
  } else {
    admin = false;
  }
  if (testMode) {
    answer = testing;
  }
  if (admin) {
    switch (Q) {
      case "is Hannah great":
        document.getElementById("output").innerHTML = "Yes";
        break;
      case "is Logan great":
        document.getElementById("output").innerHTML = "yeah!!!!!!!!!!!!!";
        break;
      case "is Jackson great":
        document.getElementById("output").innerHTML = "yep";
        break;
      case "is Mia the best dog ever":
        document.getElementById("output").innerHTML = "duh";
        break;
      default:
        document.getElementById("output").innerHTML =
          "Your anwser to " + Q + " is " + answer;

        break;
    }
  } else if (!admin) {
    switch (answer) {
      case "I refuse to answer":
        document.getElementById("output").innerHTML = "I refuse to answer";
        break;
      case "go away":
        document.getElementById("output").innerHTML =
          "go away!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
        break;
      case "my sources say yes":
        document.getElementById("output").innerHTML = "My sorces say yes";
        break;
      default:
        document.getElementById("output").innerHTML =
          "Your anwser to " + Q + " is " + answer;
    }
  }
};
