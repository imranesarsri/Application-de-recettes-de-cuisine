async function categorie() {
  const DataApi = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
  );
  const DataResolte = await DataApi.json();
  // console.log(DataResolte);
  for (let i = 0; i < DataResolte.meals.length; i++) {
    document.getElementById("select1").innerHTML +=
    `<option>${DataResolte.meals[i].strCategory}</option>`;
  }
}
categorie();




async function reqion() {
    const DataApi2 = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    const DataResolte2 = await DataApi2.json()
    // console.log(DataResolte2)

    for (let i = 0; i < DataResolte2.meals.length; i++) {
      document.getElementById("select2").innerHTML +=
      `<option>${DataResolte2.meals[i].strArea}</option>`;
    }

}
reqion()


