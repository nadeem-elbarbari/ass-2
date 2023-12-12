// * variables
var quotesArray = [
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
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up",
    author: "Thomas A. Edison",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything",
    author: "Mark Twain",
  },
  {
    quote: "A friend is someone who knows all about you and still loves you",
    author: "Elbert Hubbard",
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all",
    author: "Oscar Wilde",
  },
];
var lastIndex = null;
var quoteDisplay = document.getElementById("quoteDisplay");
var authorDisplay = document.getElementById("authorDisplay");
var newQuoteBtn = document.getElementById("newQuoteBtn");

// ! [I prefer to use expression functions 😅]

// * function to generate random number 
var randomIndex = function () {
  var newIndex = Math.floor(Math.random() * quotesArray.length);
  // & check if newIndex is same as lastIndex to avoid same index generation
  for (var i = 0; i < quotesArray.length; i++) {
    if (newIndex !== lastIndex) {
      return newIndex;
    } else {
      // & if newIndex is same as lastIndex, regenerate newIndex
      return randomIndex();
    }
  }
};


// * function to generate quote
var generateQuote = function () {
  var quoteRandom = randomIndex();
  var quoteShown = quotesArray[quoteRandom];
  quoteDisplay.innerHTML = `"${quoteShown.quote}"`;
  authorDisplay.innerHTML = `-- ${quoteShown.author}`;
  lastIndex = quoteRandom;
};

// * on click event
newQuoteBtn.onclick = function () {
  generateQuote();
  console.log(lastIndex); // ? for testing
};
