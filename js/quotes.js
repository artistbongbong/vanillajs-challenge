const quotes = [
    {
        quote: "“Then Jesus declared, “I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty.”",
        author: "John‬ ‭6:35‬",
    },
    {
        quote: "“Unless the Lord builds the house, the builders labor in vain. Unless the Lord watches over the city, the guards stand watch in vain.”",
        author: "Psalms‬ ‭127:1‬",
    },
    {
        quote: "“Is anyone among you in trouble? Let them pray. Is anyone happy? Let them sing songs of praise.”",
        author: "‭‭James‬ ‭5:13‬",
    },
    {
        quote: "““Even now,” declares the Lord, “return to me with all your heart, with fasting and weeping and mourning.””",
        author: "‭‭Joel‬ ‭2:12‬",
    },
    {
        quote: "“Do not be overcome by evil, but overcome evil with good.”",
        author: "Romans‬ ‭12:21‬",
    },
    {
        quote: "“no weapon forged against you will prevail, and you will refute every tongue that accuses you. This is the heritage of the servants of the Lord, and this is their vindication from me,” declares the Lord.”",
        author: "Isaiah‬ ‭54:17‬",
    },
    {
        quote: "“For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world and against the spiritual forces of evil in the heavenly realms.”",
        author: "‭‭Ephesians‬ ‭6:12‬",
    },
    {
        quote: "“so is my word that goes out from my mouth: It will not return to me empty, but will accomplish what I desire and achieve the purpose for which I sent it.”",
        author: "‭‭Isaiah‬ ‭55:11‬",
    },
    {
        quote: "“Do your best to present yourself to God as one approved, a worker who does not need to be ashamed and who correctly handles the word of truth.”",
        author: "‭‭2 Timothy‬ ‭2:15‬",
    },
    {
        quote: "“But thanks be to God! He gives us the victory through our Lord Jesus Christ.”",
        author: "‭‭1 Corinthians‬ ‭15:57‬",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author= document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
