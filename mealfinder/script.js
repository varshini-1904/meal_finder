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
                <input type="text" placeholder="Search recipies here.....">
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
            document.getElementById("sidebar")
            for(keys in data.categories){
                carts.innerHTML+=`<div>
                <img src="${data.categories[keys].strCategoryThumb}"></img>
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
                descriptionbox.innerHTML+=`<h2>${data.categories[keys].strCategory}</h2>
                <p>${data.categories[keys].strCategoryDescription}</p>`
            
            }
        })
        .catch(error => {
            console.error("Fetch error:", error);
  });
    
}
itemdescription()