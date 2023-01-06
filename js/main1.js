let api1 = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
let api2 = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
let api3 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";
let api_random = "https://www.themealdb.com/api/json/v1/1/random.php";
let api5 = "https://www.themealdb.com/api/json/v1/1/randomselection.php";
let api6 = "https://www.themealdb.com/api/json/v1/1/categories.php";
let api7 = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
let api8 = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
let api9 = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
let api10 =
  "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
let api11 = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
let api12 = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian";
let api13 = "https:///images/media/meals/llcbn01574260722.jpg/preview";
let api14 = "https://www.themealdb.com/images/ingredients/Lime.png";
let api15 = "https:/www.themealdb.com/images/ingredients/Lime-Small.png";

// stard random carte
let arrDataCart = [];
for (let i = 0; i < 6; i++) {
  async function getApi2() {
    const DataApi2 = await fetch(api_random);
    const DataResolte2 = await DataApi2.json();
    arrDataCart.push(
      (person = {
        nam: DataResolte2.meals[0].strMeal,
        vidio: DataResolte2.meals[0].strYoutube,
        image: DataResolte2.meals[0].strMealThumb,
        paragraph: DataResolte2.meals[0].strInstructions,
      })
    );

    document.getElementById("container").innerHTML += `
            <div class="card" style="width: 18rem;">
            <img id="image1" src="${DataResolte2.meals[0].strMealThumb}" class="card-img-top" alt="image_${i}">
            <div class="card-body">
                <h5 class="card-title text-center ">${DataResolte2.meals[0].strMeal}</h5>
                <a value="val${i}"  onclick="popupModal(${i})" class="btn btn-primary w-100 " id="btn_${i}">Apprendre encore plus ${i}</a>
            </div>
        </div>
        `;
  }

  getApi2();
}

console.log(arrDataCart);

function popupModal(i) {
    document.getElementById("pop_up").style.display="grid"
    document.getElementById("pop_up").innerHTML = `

    <div class="box h4">
        <h4>${arrDataCart[i].nam}</h4>
    </div>
    <div class="box image">
        <img src="${arrDataCart[i].image}" height="400" width="300" alt="image_${i}">
    </div>
    <div class="box vidio">
        <iframe width="640" height="390" src="${arrDataCart[i].vidio.replace("https://www.youtube.com/watch?v=" , "https://www.youtube.com/embed/" )}"
        title="Fetching API data and displaying API data inside table." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
        gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
    </div>
    <div class="box paragraph">
        <p>${arrDataCart[i].paragraph}</p>
    </div>

    `;

}




async function search() {

    let inp =document.getElementById("search")
    
    document.getElementById("container").innerHTML +=""
    const searchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=a`)
    const searchData = await searchApi.json()

 for(let k=0 ; k< searchData.meals.length ; k++){

    console.log(searchData.meals[k].strMeal)

}
//     console.log(searchData)


//     document.getElementById("container").innerHTML += `
//     <div class="card" style="width: 18rem;">
//     <img id="image1" src="${searchData.meals[k].strMealThumb}" class="card-img-top" alt="image_${k}">
//     <div class="card-body">
//         <h5 class="card-title text-center ">${searchData.meals[k].strMeal}</h5>
//         <a value="val${k}"  onclick="popupModal(${k})" class="btn btn-primary w-100 " id="btn_${k}">Apprendre encore plus ${k}</a>
//     </div>
// </div>
// `;
}






search()



async function ccc() {
    let inp = document.getElementById("search")
    let searchValue = inp.value    

    const searchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    const searchData = await searchApi.json()
    
    // document.getElementById("tjriba").innerHTML=""
    document.getElementById("container").innerHTML =""
    if(inp.onblur === true){
        for (let index = 0; index < 6; index++) {
            console.log(searchData.meals[index])
        
            document.getElementById("container").innerHTML +=
            `
                <div class="card" style="width: 18rem;">
                    <img id="image1" src="${searchData.meals[index].strMealThumb}" class="card-img-top" alt="image_${index}">
                <div class="card-body">
                    <h5 class="card-title text-center ">${searchData.meals[index].strMeal}</h5>
                    <a value="val${index}"  onclick="popupModal(${index})" class="btn btn-primary w-100 " id="btn_${index}">Apprendre encore plus ${index}</a>
                </div>
                </div>
        `;
        
        
        }
    }
}


ccc()


