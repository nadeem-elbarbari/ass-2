var arrayOfQuotes = [
  {
    quote: "Be yourself; everyone else is already taken",
    author: "Oscar Wilde",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    author: "Albert Einstein",
  },
  {
    quote: "So many books, so little time",
    author: "Frank Zappa",
  },
  {
    quote: "A room without books is like a body without a soul",
    author: "Marcus Tullius Cicero",
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind",
    author: "Bernard M. Baruch",
  },
  {
    quote: "You only live once, but if you do it right, once is enough",
    author: "Mae West",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever",
    author: "Mahatma Gandhi",
  },
];

var randomNumber = Math.floor(Math.random() * arrayOfQuotes.length);
console.log(randomNumber);
// Function to generate random number
function generateRandomNumber() {
  randomNumber = (randomNumber + 1) % arrayOfQuotes.length;
  document.getElementById("quoteDisplay").innerHTML =
    '"' + arrayOfQuotes[randomNumber].quote + '"';
  document.getElementById("authorDisplay").innerHTML =
    "-- " + arrayOfQuotes[randomNumber].author;

  console.log(randomNumber);
}
// Function to display new quote

// Button click event
document.getElementById("newQuote").onclick = function () {
  generateRandomNumber();
};