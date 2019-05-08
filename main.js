const quotes = [
    {
        name: 'Tyrion Lannister',
        quote: 'I drink and I know things.'
    },
    {
        name: 'Aristotle',
        quote: 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.'
    },
    {
        name: 'David Goggins',
        quote: 'Be uncommon amongst uncommon people'
    },
    {
        name: 'T.S. Eliot',
        quote: 'Only those who will risk going to far can possibly find out how far one can go'
    },
    {
        name: 'Jimmy Carter',
        quote: "Go out on a limb. That's where all the fruit is "
    },
    {
        name: 'George R.R. Martin',
        quote: 'A mind needs books as a sword needs a whetstone, if it is to keep its edge.'
    },
    {
        name: 'Masta Ace',
        quote: 'I see a black man aiming a gun.. But I rather see a black man claiming his son.'
    },
    {
        name: 'Noah, The Notebook',
        quote: 'I am who I am because of you.'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {
    
    let number = Math.floor(Math.random() * quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
    
}