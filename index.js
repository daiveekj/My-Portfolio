var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var string = " DAIVEEK JAWALKAR";
var str = string.split("");
var el = document.getElementById("str");

(function animate() {
  str.length > 0 ? (el.innerHTML += str.shift()) : clearTimeout(running);
  var running = setTimeout(animate, 90);
})();

// code sleep rep
// get the element
const text1 = document.querySelector(".typing-text");

// make a words array
const words1 = ["eat.", "sleep.", "code.", "repeat."];

// start typing effect
setTyper(text1, words1);

const text = document.querySelector(".typing-dev");

// make a words array
const words = [
 
  "software developer. . . . ."
  ,"web developer....","fullstack developer...."
];

// start typing effect
setTyper(text, words);

function setTyper(element, words) {
  const LETTER_TYPE_DELAY = 75;
  const WORD_STAY_DELAY = 2000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInterval;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }
    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex == 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);

    element.textContent = textToType;
  }

  function nextWord() {
    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }
  }
}


// main project bus 
document.getElementById("depbus").addEventListener("click", function () {
  window.open(
    "https://github.com/Madhavaraochalla/End-To-End_Project.git",
    "_blank"
  );
});
document.getElementById("gitbus").addEventListener("click", function () {
  window.open(
    "https://github.com/Madhavaraochalla/End-To-End_Project.git",
    "_blank"
  );
});





//1st prject github and deploy link
document.getElementById("gitindiamart").addEventListener("click", function () {
  window.open("https://github.com/Madhavaraochalla/Kubernetes-project.git", "_blank");
});

document.getElementById("indmartdep").addEventListener("click", function () {
  window.open("https://github.com/Madhavaraochalla/Kubernetes-project.git", "_blank");
});

//2nd prject github and deploy link
document.getElementById("depshopnow").addEventListener("click", function () {
  window.open(
    "https://madhavarao-portfolio.netlify.app/",
    "_blank"
  );
});
document.getElementById("gitshopnow").addEventListener("click", function () {
  window.open(
    "https://github.com/Madhavaraochalla/HTML-Project.git",
    "_blank"
  );
});

//3rd prject github and deploy link

document.getElementById("gitweather").addEventListener("click", function () {
  window.open("https://github.com/Madhavaraochalla", "_blank");
});
document.getElementById("depweather").addEventListener("click", function () {
  window.open("https://github.com/Madhavaraochalla", "_blank");
});

// linkedin and github
document.getElementById("linkedin").addEventListener("click", function () {
  window.open(
    "https://www.linkedin.com/in/madhavaraochalla",
    "_blank"
  );
});
document.getElementById("gitprofile").addEventListener("click", function () {
  window.open("https://github.com/Madhavaraochalla", "_blank");
});

GitHubCalendar(".calendar", "yendasivakumar");

// or enable responsive functionality:
GitHubCalendar(".calendar", "yendasivakumar", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "yendasivakumar", {
  proxy(username) {
    return fetch(`https://your-proxy.com/github?user=${yendasivakumar}`);
  },
}).then((r) => r.text());


