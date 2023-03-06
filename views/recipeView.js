import Traction from "fractional";
class Recipeview {
  #parentElement = document.querySelector(".product");
  #data;
  render(data) {
    this.#data = data;
    this.#parentElement.innerHTML = this._generateMarkup();
  }
  _generateMarkup() {
    const {
      image_url: avata,
      ingredients,
      publisher: name,
      servings,
      cooking_time: time,
      source_url: url,
      title,
    } = this.#data;
    return `
    <div class="product__avata">
  <img src=${avata} alt="${name}"/>
    <div class="recipe__fig"></div>
    <h1 class="recipe__title">
      <span>V${name}</span>
    </h1>
  </div>
  <div class="recipe__details">
    <div class="recipe__info">
      <i class="fa-regular fa-clock"></i>
      <span>${time}</span>
      <p class="recipe__info--des">MINUTES</p>
    </div>
  
    <div class="recipe__info">
      <i class="fa-solid fa-users"></i>
      <span>${servings}</span>
      <p class="recipe__info--des">SERVINGS</p>
    </div>
  
    <div class="recipe__info--btns">
      <button><i class="fa-solid fa-minus"></i></button>
      <button><i class="fa-solid fa-plus"></i></button>
    </div>
    <div class="recipe__info--bookmask">
      <button>
        <i class="fa-regular fa-bookmark"></i>
      </button>
    </div>
  </div>
  
  <div class="recipe__des">
    <h1 class="recipe__des--title">RECIPE INGREDIENTS</h1>
    <ul class="recipe__ingredient-list">
      ${ingredients
        .map((step, i) => {
          return `<li class="recipe__ingredient">
        <i class="fa-solid fa-check"></i>
        <div class="recipe__quantity">${servings} ${step.quantity ?? ""}</div>
        <div class="recipe__description">
          <span class="recipe__unit"></span>
         ${step.description}
        </div>
      </li>`;
        })
        .join("")}
    </ul>
  </div>
  
  <div class="recipe__des text-center">
    <h1 class="recipe__des--title">${title}</h1>
    <p class="fs-4 text-center px-5">
      This recipe was carefully designed and tested by All Recipes.
      Please check out directions at their website.
    </p>
    <a href="${url}" target="_blank" class="direction_btn">
      DIRECTION <i class="fa-solid fa-arrow-right ps-2"></i>
    </a>
  </div>
   `;
  }
  renderSpinner() {
    this.#parentElement.innerHTML = `<div class="text-center">
    <img class="loading" src="/img/loader-icon.svg" alt="" />
    </div>`;
  }
  renderNotFind() {
    this.#parentElement.innerHTML = `<p class="product_not--items">
    <i class="fa-regular fa-face-smile"></i> Start by searching for a
    recipe or an ingredient. Have fun!
  </p>`;
  }
}
export default new Recipeview();
