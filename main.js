let cards = document.querySelectorAll(".card");
let clicked1 = []
let clicked2 = []

for(let i = 0 ; i < cards.length ; i++) {
  cards[i].addEventListener('click', () => {
  cards[i].classList.add("open")}); 
}




