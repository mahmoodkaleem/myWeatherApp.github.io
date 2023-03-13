//Api fetching function
async function fetchData(city = "delhi") {
    const cityName = document.querySelector("#city").value = ""
    let key = "27f59daa7c8f7947b5942adcbbd7699a"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    let Data = await fetch(url);
    let res = await Data.json();
    let icon = res.weather[0].icon;
    let unicodelink = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    let mainComp = document.querySelector(".main")
    mainComp.innerHTML = `<div class="box">
            <div class="tem-control">
                <h1>${res.main.temp} deg</h1>
            </div>
            <div class="icon-control">
                <span>${res.weather[0].description}</span>
                <div class="img">
                    <img src="${unicodelink}" alt="" id="image">
                </div>
            </div>
            <div class="cord-control">
                <div class="long">Long:
                    <span>${res.coord.lon}</span>
                </div>
                <div class="lat">Lat:
                    <span>${res.coord.lat}</span>
                </div>
            </div>
            <div class="name-control">
                <h1 id="name-count">${res.name} (${res.sys.country})</h1>
            </div>
    </div>`
}
fetchData()

//to stop default submit behavior of Form
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault()
});

//search button
const searchButton = document.querySelector("#btn")
searchButton.addEventListener("click", () => {
    const cityName = document.querySelector("#city").value;
    fetchData(cityName)

})