function header(){
    document.getElementById("head")
    head.innerHTML+=`<div class="headtext">
                <h2><i class="fa fa-cutlery" aria-hidden="true"></i>MEAL FINDER</h2>
                <button onclick="categeorylist()"><i class="fa fa-bars" aria-hidden="true"></i></button>
            </div>`
}
header()

function heroimg(){
    document.getElementById("heroimage")
    heroimage.innerHTML+=`
                <img src="https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg" alt="image">
            <div class="imgtext">
                <input id="searchInput" type="text" placeholder="Search recipies here.....">
                <button id="searchBtn"><i class="fa fa-search"></i></button>
                <h3>What are your favourite cuisines?</h3>
                <p>PERSONALIZE YOUR EXPERIENCE</p>
            </div> `
}

heroimg()

function categeorylist(){
    sidebar.innerHTML=`<button onclick=closecategeorylist()><i class="fa-solid fa-circle-xmark"></i></button>`
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            document.getElementById("sidebar")
            for(keys in data.categories){
                sidebar.innerHTML+=`<p><a href="./${data.categories[keys].strCategory}.html">${data.categories[keys].strCategory}</a></P>`
            }
        })
        .catch(error => {
            console.error("Fetch error:", error);
  });
}

function closecategeorylist(){
    document.getElementById("sidebar").innerHTML=""
}

function categoriescarts(){
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            document.getElementById("carts")
            for(keys in data.categories){
                carts.innerHTML+=`<div>
                <a href="./${data.categories[keys].strCategory}.html"><img src="${data.categories[keys].strCategoryThumb}"></a>
                <p>${data.categories[keys].strCategory}</p>
                </div>`
            }
        })
        .catch(error => {
            console.error("Fetch error:", error);
  });
}
categoriescarts()

function itemdescription(){
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            for(keys in data.categories){
                descriptionbox=document.getElementById(`description-${data.categories[keys].strCategory}`)
                if(descriptionbox)
                {
                descriptionbox.innerHTML=`<h2>${data.categories[keys].strCategory}</h2>
                <p>${data.categories[keys].strCategoryDescription}</p>`
                }
            }
        })
        .catch(error => {
            console.error("Fetch error:", error);
  });

}
itemdescription()

    function meals(categoryName) {
      const mealscart = document.getElementById("mealscart");
      mealscart.innerHTML = "Loading...";

      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${categoryName}`)
        .then(res => res.json())
        .then(mealsdata => {
          mealscart.innerHTML = "";
          if (mealsdata.meals) {
            for (const meal of mealsdata.meals) {
              mealscart.innerHTML += `
                <div>
                <a href="mealsdetail.html?id=${meal.idMeal}">
                  <img src="${meal.strMealThumb}" ></a>
                  <p>${meal.strMeal}</p>
                
                </div>
              `;
            }
          }
        })
        .catch(() => mealscart.innerHTML = "<p>Failed to load meals.</p>");
    }

  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const searchResults = document.getElementById("searchResults");

  function fetchMeals(query) {
    searchResults.innerHTML = "<p>Loading...</p>";
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then(response => response.json())
      .then(data => {
        displayMeals(data.meals);
      })
      .catch(error => {
        console.error("Error fetching meals:", error);
        searchResults.innerHTML = "<p>Error fetching meals!</p>";
      });
  }

  function displayMeals(meals) {
    if (!meals) {
      searchResults.innerHTML = "<p>No results found.</p>";
      return;
    }
    searchResults.innerHTML = "";
    meals.forEach(meal => {
      const mealDiv = document.createElement("div");
      mealDiv.classList.add("meal");
      mealDiv.innerHTML = `
        <img id="mealimg"src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h3>${meal.strMeal}</h3>
      `;
      searchResults.appendChild(mealDiv);
    });
  }

  
  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
      fetchMeals(query);
    }
  });


  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchBtn.click();
    }
  });


