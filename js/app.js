// Card Hover Özelliği
const cards = document.querySelectorAll(".card-container");

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];

  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.1)";
    card.style.transition = "transform 0.3s";
    card.style.zIndex = "1";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
    card.style.transition = "transform 0.3s";
    card.style.zIndex = "0";
  });
}
