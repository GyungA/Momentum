const quotes = [
    {
      quote: "A successful individual typically sets his next goal somewhat but not too much above his last achievement.",
      author: "Kurt Lewin",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "When I am attacked by gloomy thoughts, nothing helps me so much as running to my books.",
      author: "Michel de Montaigne",
    },
    {
      quote: "If you would win a man to your cause, first convince him that you are his sincere friend.",
      author: "Abraham Lincoln",
    },
    {
      quote: "If you make it plain you like people, it's hard for them to resist liking you back.",
      author: "Lois McMaster Bujold",
    },
    {
      quote: "Regret for wasted time is more wasted time.",
      author: "Mason Cooley",
    },
    {
      quote: "Doing a thing well is often a waste of time.",
      author: "Robert Byrne",
    },
  ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;