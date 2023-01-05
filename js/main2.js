async function getApi() {
  const DataApi = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
  );
  const DataResolte = await DataApi.json();
  console.log(DataResolte);

  for (let i = 0; i < DataResolte.meals.length; i++) {
    document.getElementById(
      "cantry"
    ).innerHTML += `<option>${DataResolte.meals[i].strCategory}</option>`;
  }
}
getApi();

fetch("https://www.breakingbadapi.com")
.then(function(ell){
    return ell.json()
}).then(function(data){
    console.log(data)
})



// async function getApi3() {
//     const DataApi3 = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
//     const DataResolte3 = await DataApi3.json()
//     console.log(DataResolte3)

//     for(let i=0 ;i<=DataResolte3.meals.length ;i++){
//         document.getElementById("select3").innerHTML +=
//         `<option>${DataResolte3.meals[i].strArea}</option>`
//     }

// }
// getApi3()

// document.getElementById("cantry").innerHTML+=
// async function getApi() {
//     const DataApi = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
//     const DataResolte = await DataApi.json()
//     console.log(DataResolte)

//         // for(let i=0 ;i<=DataResolte.meals.length ;i++){
//         //     document.getElementById("cantry").innerHTML +=
//         //     `<option>${DataResolte.meals[i].strCategory}</option>`
//         // }

// }
