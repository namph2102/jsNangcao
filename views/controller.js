import recipeView from "./recipeView.js";
import fetchData from "./model.js";

const controlRecipe = async () => {
  recipeView.renderSpinner();
  try {
    const id = window.location.hash.slice(1);
    const data = await fetchData(id);
    recipeView.render(data.data.recipe);
    if (!data.status) throw new Error("Invalid Empty");
  } catch {
    recipeView.renderNotFind();
  }
};

// recipe("5ed6604591c37cdc054bc886");

window.addEventListener("hashchange", controlRecipe);
window.addEventListener("load", controlRecipe);
