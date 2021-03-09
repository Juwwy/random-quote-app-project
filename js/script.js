var quoteMeArr = [
    ["Impossible is just an opinion", "Paulo Coelho", "rgb(127, 45, 126)"],
    ["The key to success is failure", "Michael Jordan", "rgb(168, 44, 44)"],
    ["We rise by lifting others", "Robert Ingersoll", "rgb(173, 255, 47)"],
    ["Don't let your happiness depend on something you may lose", "C.S. Lewis", "rgb(138, 43, 226)"],
    ["Not all of us can do great things. But we can do small things with great love.", "Mother Teresa", "rgb(216, 112, 147)"]
];


const mainPg= document.querySelector(".main");
const quoteBody = document.querySelector(".quote-body");
const quotePoints = document.querySelector(".quote-point");
const author = document.querySelector("#author")
const btn = document.querySelector("#btn");

btn.addEventListener("click", runThis);
setInterval(runThis, 5000)

function runThis(){
    let randomQuoteIndex = Math.floor(Math.random() * quoteMeArr.length);
    
    let randomQuotes = quoteMeArr[randomQuoteIndex][0];
    let randomAuthors = quoteMeArr[randomQuoteIndex][1];
    let randomButtonColor =quoteMeArr[randomQuoteIndex][2];

    mainPg.style.backgroundColor = randomButtonColor;
    quotePoints.textContent = randomQuotes;
    author.textContent = randomAuthors;
    btn.style.backgroundColor = randomButtonColor;
}