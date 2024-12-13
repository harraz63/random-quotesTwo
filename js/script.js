const ArrOfQuotes = [
  {
    author: "--Moamen Eldeeb",
    quote: `“Be yourself; everyone else is already taken.”`,
  },
  { author: "--Frank Zappa", quote: `“So many books, so little time.”` },
  {
    author: "--Marcus Tullius Cicero",
    quote: `“A room without books is like a body without a soul.”`,
  },
  {
    author: "--Ahmed Nour Eldin",
    quote: `“You only live once, but if you do it right, once is enough.”`,
  },
  {
    author: "--NoBody",
    quote: `“Be the change that you wish to see in the world.”`,
  },
  {
    author: "--Mark Twain",
    quote: `“If you tell the truth, you don't have to remember anything.”`,
  },
  {
    author: "--Stephen Chbosky",
    quote: `“We accept the love we think we deserve.”`,
  },
  {
    author: "--Haha That is me",
    quote: `“Without Music, life would be a mistake.”`,
  },
  {
    author: "--Andre Gide",
    quote: `“It is better to be hated for what you are than to be loved for what you are not.”`,
  },
  {
    author: "--Saleh Selim",
    quote: `“Al-Ahly is above all”`,
  },
];

let lastQuote;

function getRandomQuotes() {
  let nowQuote;

  // Repeat Generating Process While lastQuote === nowQuote
  do {
    nowQuote = Math.floor(Math.random() * ArrOfQuotes.length);
  } while (lastQuote === nowQuote);

  lastQuote = nowQuote;

  document.getElementById("quote-caption").innerHTML =
    ArrOfQuotes[nowQuote].quote;
  document.getElementById("quote-author").innerHTML =
    ArrOfQuotes[nowQuote].author;
}
