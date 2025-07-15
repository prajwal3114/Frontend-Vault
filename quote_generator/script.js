const copy = document.getElementById("copy");
const quote = document.getElementById("quote");
const tweet = document.getElementById("tweet");
const texthere = document.getElementById("texthere");

let final = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
];

// Click handler for Get Quote
quote.addEventListener("click", (e) => {
  const len = final.length;
  const index = Math.floor(Math.random() * len);
  const selected = final[index];
  texthere.innerHTML = `"${selected.text}" <br> -${selected.author}`;
});
// Click handler to copy quote;
copy.addEventListener("click", () => {
    const textToCopy = texthere.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      copy.innerText = "Copied!";
      setTimeout(() => {
        copy.innerText = "Copy";
      }, 1500);
    }).catch((err) => {
      console.error("❌ Copy failed:", err);
    });
});
// now lets go with tweet 
tweet.addEventListener("click", () => {
    const quoteText = texthere.innerText;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)}`;
    window.open(tweetUrl, "_blank");
  });
  

  