const quoteContainer = document.getElementById('quote-generator');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// global variables
let apiQuotes = [];

// Show new quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //   check if Author field is blank, replace with Unknown if blank
  //   const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  if (!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }
  // Check quote length (if long, use long-quote styling)
  if ((quoteText, length > 120)) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  quoteText.textContent = quote.text;
}

// Get quotes from API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();

    newQuote();
  } catch (error) {
    //   catch and handle error here
  }
}

// Tweet quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

// Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On load
getQuotes();
