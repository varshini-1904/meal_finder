
function categeory(){
    sidebar.innerHTML=`<button onclick=closecategeory()><i class="fa-solid fa-circle-xmark"></i></button>`
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

function closecategeory(){
    document.getElementById("sidebar").innerHTML=""
}