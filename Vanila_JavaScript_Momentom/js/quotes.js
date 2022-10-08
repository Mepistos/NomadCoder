// 003. quotes
const quotes = [
    {
        quote:"Be yourself; everyone else is already taken.",
        author:"Oscar Wilde",
    },
    {
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author:"Albert Einstein",
    },
    {
        quote:"So many books, so little time.",
        author:"Frank Zappa",
    },
    {
        quote:"A room without books is like a body without a soul.",
        author:"Marcus Tullius Cicero",
    },
    {
        quote:"You only live once, but if you do it right, once is enough.",
        author:"Mae West",
    },
    {
        quote:"Be the change that you wish to see in the world.",
        author:"Mahatma Gandhi",
    },
    {
        quote:"In three words I can sum up everything I've learned about life: it goes on.",
        author:"Robert Frost",
    },
    {
        quote:"If you tell the truth, you don't have to remember anything.",
        author:"Mark Twain",
    },
    {
        quote:"A friend is someone who knows all about you and still loves you.",
        author:"Elbert Hubbard",
    },
    {
        quote:"To live is the rarest thing in the world. Most people exist, that is all.",
        author:"Oscar Wilde",
    },
];

const quote = document.querySelector("#quote_body span");
const author = document.querySelector("#quote_author span");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;