
function categeorylist(){
    sidebar.innerHTML=`<button onclick=closecategeorylist()><i class="fa-solid fa-circle-xmark"></i></button>`
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            document.getElementById("sidebar")
            for(keys in data.categories){
                sidebar.innerHTML+=`<p>${data.categories[keys].strCategory}</P>`
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