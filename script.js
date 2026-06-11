const searchInput = document.getElementById("searchInput");
const gameCards = document.querySelectorAll(".game-card");

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();

  gameCards.forEach(card => {
    const gameName = card.dataset.name;

    if (gameName.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

