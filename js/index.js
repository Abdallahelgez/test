let data = document.getElementById("data");
async function getCategories() {
  data.innerHTML = "";
  $(".inner-loading-screen").fadeIn(500);
  $("#search-container").css("display", "none");
  var response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  response = await response.json();
  let categories = response.categories;
  displayCategories(categories);
  $(".inner-loading-screen").fadeOut(500);
}
async function getIngredients() {
  data.innerHTML = "";
  $(".inner-loading-screen").fadeIn(500);
  $("#search-container").css("display", "none");
  var response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );
  response = await response.json();
  let ingredients = response.meals;
  displayIngredients(ingredients);
  $(".inner-loading-screen").fadeOut(500);
}
async function getAreas() {
  data.innerHTML = "";
  $(".inner-loading-screen").fadeIn(500);
  $("#search-container").css("display", "none");
  var response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  response = await response.json();
  let areas = response.meals;
  displayAreas(areas);
  $(".inner-loading-screen").fadeOut(500);
}
async function getAreaMeals(Area) {
  data.innerHTML = "";
  $(".inner-loading-screen").fadeIn(500);
  $("#search-container").css("display", "none");
  var response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${Area}`
  );
  response = await response.json();
  let area = response.meals.slice(0, 20);
  displayMeals(area);

  $(".inner-loading-screen").fadeOut(500);
}
async function getCategoryMeals(catego) {
  data.innerHTML = "";
  $(".inner-loading-screen").fadeIn(500);
  $("#search-container").css("display", "none");
  var response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${catego}`
  );
  response = await response.json();
  let categories = response.meals.slice(0, 20);
  displayMeals(categories);

  $(".inner-loading-screen").fadeOut(500);
}
async function getIngredientMeals(ingred) {
  data.innerHTML = "";
  $(".inner-loading-screen").fadeIn(500);
  $("#search-container").css("display", "none");
  var response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingred}`
  );
  response = await response.json();
  let ingredients = response.meals.slice(0, 20);
  displayMeals(ingredients);

  $(".inner-loading-screen").fadeOut(500);
}
async function getMealDetails(mealId) {
  data.innerHTML = "";
  $(".inner-loading-screen").fadeIn(500);
  $("#search-container").css("display", "none");
  var response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );
  response = await response.json();
  let meal = response.meals[0];
  displayDetailsMeal(meal);
  $(".inner-loading-screen").fadeOut(500);
}
async function searchByName(mealName) {
  data.innerHTML = "";
  $(".inner-loading-screen").fadeIn(500);
  $("#search-container").css("display", "none");
  var response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
  );
  response = await response.json();
  let meals = response.meals;
  displayMeals(meals);

  $(".inner-loading-screen").fadeOut(500);
}
async function searchByFLetter(firstLetter) {
  data.innerHTML = "";
  $(".inner-loading-screen").fadeIn(500);
  $("#search-container").css("display", "none");
  var response = await fetch(
    `http://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`
  );
  response = await response.json();
  let meals = response.meals;
  displayMeals(meals);

  $(".inner-loading-screen").fadeOut(500);
}

async function begainShow() {
  data.innerHTML = "";
  $(".inner-loading-screen").fadeIn(500);
  $("#search-container").css("display", "none");
  var response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=Egyptian`
  );
  var response1 = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=American`
  );
  var response2 = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=French`
  );
  response = await response.json();
  response1 = await response1.json();
  response2 = await response2.json();
  let area = response.meals;
  let area1 = response1.meals;
  let area2 = response2.meals;
  let areaa = area.concat(area1);
  let areaaa = areaa.concat(area2);
  displayMeals(areaaa);

  $(".inner-loading-screen").fadeOut(500);
}
begainShow();

function displayCategories(categories) {
  cartona = "";
  for (let i = 0; i < categories.length; i++) {
    cartona += ` <div class="col-lg-3 col-md-4 h-25" onclick="getCategoriesMeals('${
      categories[i].strCategory
    }')">
          <div class="dish bg-dark rounded-3 pointer  text-center position-relative overflow-hidden">
            <img class="w-100 dish-img " src="${
              categories[i].strCategoryThumb
            }" alt="${categories[i].strCategory}"/>
            <div class="overlay-dish position-absolute w-100 h-100  text-center ">
              <h5 class=" pt-2 fs-3 text-danger">${
                categories[i].strCategory
              }</h5>
              <p class="text-center pt-2 fs-5 text-dark" >${categories[
                i
              ].strCategoryDescription
                .split(" ")
                .slice(0, 20)
                .join(" ")}</p>
            </div>
          </div>
        </div>`;
  }
  data.innerHTML = cartona;
}

function displayIngredients(ingredients) {
  cartona = "";
  for (let i = 0; i < ingredients.length; i++) {
    cartona += ` <div class="col-lg-3 col-md-4  h-ingredients" onclick="getIngredientMeals('${ingredients[i].strIngredient}')">
          <div class="meal-ingredients bg-dark pointer rounded-3  text-center position-relative overflow-hidden">
              <h5 class=" pt-2 fs-3 text-danger">${ingredients[i].strIngredient}</h5>
              <p class="text-center pt-2 fs-5 text-white " >${ingredients[i].strDescription}</p>
            </div>
          </div>
        </div>`;
  }
  data.innerHTML = cartona;
}
function displayAreas(areas) {
  cartona = "";
  for (let i = 0; i < areas.length; i++) {
    cartona += ` <div class="col-lg-3 col-md-4 pointer h-25" onclick="getAreaMeals('${areas[i].strArea}')">
          <div class="dish bg-dark rounded-3   text-center position-relative overflow-hidden" >
          <i class="fa-solid fa-house h-house "></i>
              <h5 class=" pt-2 fs-3  text-danger">${areas[i].strArea}</h5>
              
            </div>
          </div>
        </div>`;
  }
  data.innerHTML = cartona;
}
function displayMeals(arr) {
  cartona = "";
  for (let i = 0; i < arr.length; i++) {
    cartona += ` <div class="col-lg-3 col-md-4   h-25">
          <div class="dish bg-dark rounded-3 pointer  text-center position-relative overflow-hidden" onclick="getMealDetails('${arr[i].idMeal}')">
            <img class="w-100 dish-img " src="${arr[i].strMealThumb}" alt="${arr[i].strMeal}"/>
            <div class="overlay-dish position-absolute w-100 h-100  text-center ">
              <h5 class=" pt-2 fs-3 text-danger m-40 text-center align-content-center">${arr[i].strMeal}</h5>
            </div>
          </div>
        </div>`;
  }
  data.innerHTML = cartona;
}
function displayDetailsMeal(meal) {
  let ingredients = ``;
  for (let i = 0; i < 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients += `<li class="alert alert-info m-2 p-1" >${
        meal[`strMeasure${i}`]
      } ${meal[`strIngredient${i}`]}</li>`;
    }
  }
  let tags = meal.strTags?.split(",");
  if (!tags) tags = [];
  let cartonaOfTags = ``;

  let boxTags = ``;
  if (tags) {
    boxTags = `<h3 class="text-white text-start">Tags :</h3>
<ul class="list-unstyled d-flex flex-wrap g-3">`;
    for (let i = 0; i < tags.length; i++) {
      cartonaOfTags += `<li class="alert alert-danger m-2 p-1">${tags[i]}</li>`;
    }
    boxTags += cartonaOfTags + "</ul>";
  }
  let youtube = "";
  if (meal.strYoutube) {
    youtube = `
<a href="${meal.strYoutube}" target="_blank" class=" m-1 btn btn-dark"><i class="fa-brands fa-youtube fs-1"></i></a>
  `;
  }
  let source = "";
  if (meal.strSource) {
    source = `
  <a href="${meal.strSource}" target="_blank" class="btn btn-success">Source</a>
  `;
  }

  cartona = ` <div class="col-md-4 h-100 d-flex flex-column">
   <img src="${meal.strMealThumb}"  class="w-100 h-25 img-fluid rounded-3" alt="${meal.strMeal}">
   <h3 class="text-center pt-2 text-white">${meal.strMeal}</h3>
 </div>
 <div class="col-md-8 h-100">
   <h2 class="text-white text-start">
     Instructions
   </h2>
   <p class="text-white"> 
   ${meal.strInstructions}
     </p>
     <h3 class="text-white text-start">area: <span>${meal.strArea}</span></h3>
     <h3 class="text-white text-start">Category: <span>${meal.strCategory}</span></h3>
     <h3 class="text-white text-start">Recipes :</h3>
     <ul class="list-unstyled d-flex flex-wrap g-3">
    ${ingredients}
     </ul>
    ${boxTags}

 </div> 
 <div class="text-center">
   ${youtube}
   ${source}
 </div>`;

  data.innerHTML = cartona;
}
function displayContactUS() {
  let contact = `
  <div class="contact min-vh-100 d-flex justify-content-center align-items-center">
  <div class="container w-75 text-center">
      <div class="row g-4">
          <div class="col-md-6">
              <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
              <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                  Special characters and numbers not allowed
              </div>
          </div>
          <div class="col-md-6">
              <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
              <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                  Email not valid *exemple@yyy.zzz
              </div>
          </div>
          <div class="col-md-6">
              <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
              <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                  Enter valid Phone Number
              </div>
          </div>
          <div class="col-md-6">
              <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
              <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                  Enter valid age
              </div>
          </div>
          <div class="col-md-6">
              <input id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
              <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                  Enter valid password *Minimum eight characters, at least one letter and one number:*
              </div>
          </div>
          <div class="col-md-6">
              <input id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Re-password">
              <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                  Enter valid repassword 
              </div>
          </div>
      </div>
      <button id="submitBtn" disabled="" class="btn btn-outline-danger pointer px-2 mt-3">Submit</button>
  </div>
`;
  data.innerHTML = contact;
}

function inputsValidation() {
  if (nameInputTouched) {
    if (nameValidation()) {
      document
        .getElementById("nameAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("nameAlert")
        .classList.replace("d-none", "d-block");
    }
  }
  if (emailInputTouched) {
    if (emailValidation()) {
      document
        .getElementById("emailAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("emailAlert")
        .classList.replace("d-none", "d-block");
    }
  }

  if (phoneInputTouched) {
    if (phoneValidation()) {
      document
        .getElementById("phoneAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("phoneAlert")
        .classList.replace("d-none", "d-block");
    }
  }

  if (ageInputTouched) {
    if (ageValidation()) {
      document
        .getElementById("ageAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("ageAlert")
        .classList.replace("d-none", "d-block");
    }
  }

  if (passwordInputTouched) {
    if (passwordValidation()) {
      document
        .getElementById("passwordAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("passwordAlert")
        .classList.replace("d-none", "d-block");
    }
  }
  if (repasswordInputTouched) {
    if (repasswordValidation()) {
      document
        .getElementById("repasswordAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("repasswordAlert")
        .classList.replace("d-none", "d-block");
    }
  }

  if (
    nameValidation() &&
    emailValidation() &&
    phoneValidation() &&
    ageValidation() &&
    passwordValidation() &&
    repasswordValidation()
  ) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", true);
  }
}

function nameValidation() {
  return /^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value);
}

function emailValidation() {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    document.getElementById("emailInput").value
  );
}

function phoneValidation() {
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
    document.getElementById("phoneInput").value
  );
}

function ageValidation() {
  return /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(
    document.getElementById("ageInput").value
  );
}

function passwordValidation() {
  return /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(
    document.getElementById("passwordInput").value
  );
}

function repasswordValidation() {
  return (
    document.getElementById("repasswordInput").value ==
    document.getElementById("passwordInput").value
  );
}

$(".icon").on("click", function () {
  $(this).parentsUntil(".side-bar").parent(".side-bar").toggleClass("is-visible");
  if (!$(this).parentsUntil(".side-bar").parent(".side-bar").hasClass("is-visible")) {
    $(this).parentsUntil(".side-bar").parent(".side-bar").animate({
          left:
            "-" +$(this).parentsUntil(".side-bar").parent(".side-bar").outerWidth(true),
        },
        1000
      );
      $(this).find(".toggle").removeClass("fa-xmark").addClass("fa-bars");
  } else {
    $(this).parentsUntil(".side-bar").parent(".side-bar").animate(
      {
        left: 0,
      },
      1000
    );
    
    $(this).find(".toggle").removeClass("fa-bars").addClass("fa-xmark");
  }
});

$(".Search").on("click", () => {
  $("#search-container").css("display", "block");
  $(".contact").css("display", "none");
  data.innerHTML = "";
});
$(".Categories").on("click", () => {
  $("#search-container").css("display", "none");
  getCategories();
});
$(".Areas").on("click", () => {
  $("#search-container").css("display", "none");
  getAreas();
});
$(".Ingredients").on("click", () => {
  $("#search-container").css("display", "none");
  getIngredients();
});
$(".Contact-us").on("click", () => {
  $("#search-container").css("display", "none");
  displayContactUS();
});
