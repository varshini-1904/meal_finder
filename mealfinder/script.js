
function categeory(){
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            document.getElementById("sidebar")
            for(i in data.categories){
                sidebar.innerHTML+=`<p>${data.categories[i].strCategory}</P>`
            }
        })
        .catch(error => {
            console.error("Fetch error:", error);
  });
}

