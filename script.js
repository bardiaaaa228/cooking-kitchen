
const recipes = [
  {
    name: "Grilled Steak",
    image: "https://images.unsplash.com/photo-1555992336-cbf8b5f1be12",
    servings: "1–8",
    description: "Juicy grilled steak with garlic butter.",
  },
  {
    name: "Chocolate Cake",
    image: "https://images.unsplash.com/photo-1601979031925-54f5b3c07fef",
    servings: "1–8",
    description: "Rich and moist dark chocolate cake.",
  }
];

const list = document.getElementById("recipe-list");
const searchInput = document.getElementById("search");

function renderRecipes(filter = "") {
  list.innerHTML = "";
  recipes
    .filter(r => r.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(recipe => {
      const div = document.createElement("div");
      div.className = "recipe";
      div.innerHTML = `
        <h2>${recipe.name}</h2>
        <img src="${recipe.image}" style="max-width: 100%; border-radius: 8px;" />
        <p>${recipe.description}</p>
        <p><strong>Servings:</strong> ${recipe.servings}</p>
      `;
      list.appendChild(div);
    });
}

searchInput.addEventListener("input", (e) => {
  renderRecipes(e.target.value);
});

renderRecipes();
