let all = document.getElementById('all');
let breakfast = document.getElementById('breakfast');
let lunch = document.getElementById('lunch');
let dinner = document.getElementById('dinner');
let shakes = document.getElementById('shakes');
let sectionCenter = document.querySelector('.section-center');

// get all the food
const getFood = async (url) => {
  try {
      const response = await fetch(url);
      let food = await response.json();
      food = food.map((item) => {
          return `
          <article class="menu-item">
                <p class="category">${item.category}</p>
                <img src="${item.img}" alt="food image" class="photo">
              <div class="item-info">
                  <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">$${item.price}</h4>
                  </header>
                  <p class="item-text">${item.desc}</p>
              </div>
          </article>
          `;
      });
      sectionCenter.innerHTML = food.join("");
    } catch (error) {
      console.log(error);
    }
}

// call the function getFood
getFood('data.json');

// when the user click on the all button
all.addEventListener('click', () => {
  getFood('data.json');
});

//when the user click on the breakfast button
breakfast.addEventListener("click", () => {
  const test = "breakfast";
  filterByCategory(test)
})

// when the user click on the lunch button
lunch.addEventListener("click", () => {
  const test = "lunch";
  filterByCategory(test)
})

// when the user click on the dinner button
dinner.addEventListener("click", () => {
  const test = "dinner";
  filterByCategory(test)
})

// when the user click on the shakes button
shakes.addEventListener("click", () => {
  const test = "shakes";
  filterByCategory(test)
})

// filter the food by category
function filterByCategory(test) {
  const categorys = document.querySelectorAll(".menu-item");
  categorys.forEach((category) => {
    const title = category.children[0].innerHTML.toLowerCase();;
    if (title === test) {
      category.style.display = "grid";
    } else {
      category.style.display = "none";
    }
  })
}