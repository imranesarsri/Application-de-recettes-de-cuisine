let api1 = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
let api2 = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
let api3 = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";
let api_random = "https://www.themealdb.com/api/json/v1/1/random.php";
let api5 = "https://www.themealdb.com/api/json/v1/1/randomselection.php";
let api6 = "https://www.themealdb.com/api/json/v1/1/categories.php";
let api7 = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
let api8 = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
let api9 = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
let api10 = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
let api11 = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
let api12 = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian";
let api13 = "https:///images/media/meals/llcbn01574260722.jpg/preview";
let api14 = "https://www.themealdb.com/images/ingredients/Lime.png";
let api15 = "https:/www.themealdb.com/images/ingredients/Lime-Small.png";


// chong pag 1 and pag 2
// function pag2() {
// document.getElementById("main").innerHTML = ` <div class="row ">

//     <select id="cantry" class="col-4 mt-5 ms-5" aria-label="Default select example">
//         <option selected>Open this select menu</option></select>

//     <button class="col-2 mt-5 ms-5 btn btn-primary">serche</button>

//     <select class="col-4 mt-5 ms-5" aria-label="Default select example">
//         <option selected>Open this select menu</option>
//         <option value="1">One</option>
//         <option value="2">Two</option>
//         <option value="3">Three</option>
//     </select>   

// </div>`;
// }

// function pag1() {
//   document.getElementById("main").innerHTML = `<main id="main">
    
//     <div class="search">
//         <div class="btn-inp">
//             <button class="button">hhdf</button>
//             <input type="text">
//         </div>
//     </div>`;
// }



for (let i = 0; i < 6; i++) {
    async function getApi2() {
    const DataApi2 = await fetch(api_random);
    const DataResolte2 = await DataApi2.json();
    console.log(DataResolte2);
        
    document.getElementById("contener").innerHTML += `
            <div class="card" style="width: 18rem;">
            <img id="image1" src="${DataResolte2.meals[0].strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center ">${DataResolte2.meals[0].strMeal}</h5>
                <a  onclick="popupModal()" class="btn btn-primary w-100 " id="btn_${i}">Apprendre encore plus ${i}</a>
            </div>
        </div>
        `;


}
function popupModal(){

    console.log("idMeal")
    // document.querySelectorAll(".btn").forEach(btn => {
    //     btn.addEventListener("click",(e)=>{
    //         e.preventDefault();
    //         let dataName = e.target.previousElementSibling;
    //         console.log(dataName);
    //     })
    // });
    submit()
}

getApi2();
}

// fin random carte
    

async function submit() {
    const DataApi2 = await fetch(api_random);
    const DataResolte2 = await DataApi2.json();
    console.log(DataResolte2);
    document.getElementById("pop-up").innerHTML =
    `
    <div>
        <img id="pup_img" src="${DataResolte2.meals[0].strMealThumb}" width="400" alt="">
        <iframe width="320" height="200" class="mt-2" src="${DataResolte2.meals[0].strYoutube.replace(
            "https://www.youtube.com/watch?v=",
            "https://www.youtube.com/embed/" )}
        "title="Tips For Using Async/Await in JavaScript" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    </div>
    <div>
        <p id="pup_p">${DataResolte2.meals[0].strInstructions}</p>
    </div>
`
}

// strInstructions

for(let j=0 ; j< 6 ;j++){
async function popupModal() {

    const DataApi2 = await fetch(api_random);
    const DataResolte2 = await DataApi2.json();
    console.log(DataResolte2);
    document.getElementById("pop-up").innerHTML =
    `
    <div>
        <img id="pup_img" src="${DataResolte2.meals[0].strMealThumb}" width="400" alt="">
        <iframe width="320" height="200" class="mt-2" src="${DataResolte2.meals[0].strYoutube.replace(
            "https://www.youtube.com/watch?v=",
            "https://www.youtube.com/embed/" )}
        "title="Tips For Using Async/Await in JavaScript" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    </div>
    <div>
        <p id="pup_p">${DataResolte2.meals[0].strInstructions}</p>
    </div>
`
}


}





