let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", function() {
    console.log("test");
  });
});
