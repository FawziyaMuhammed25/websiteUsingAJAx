var y ;
function getMeal(selected) 
{
    var xHttp = new XMLHttpRequest(); 
    xHttp.open("GET",`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selected}` );
    xHttp.send();
  xHttp.onreadystatechange =function(){
    if (this.readyState == 4 && this.status == 200)
    {
        y = JSON.parse(xHttp.response)
        y = y.meals
        console.log(y)  
        var hasalah = ``
        for(var i =0 ; i< y.length ; i++){
            hasalah += `
            <div class="col-md-3">
            <h2 class="text-white"> ${y[i].strMeal}</h2>
            <img src="${y[i].strMealThumb}" alt="" class="img-fluid">
             </div>
            `
            // if (y[i].strMealThumb == null) {
            //     y[i].strMealThumb = `./image/img1.webp`
            // }
        }   
        document.querySelector(".row").innerHTML = hasalah;
    }
  }
}
var allLinks = document.querySelectorAll(".nav-link")
for(var i =0 ; i<allLinks.length ; i++)
{
    allLinks[i].addEventListener("click" , function(e) 
    {
        getMeal(e.target.innerText)
    })
}

getMeal(Beef)