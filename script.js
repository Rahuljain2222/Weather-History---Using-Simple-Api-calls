const button = document.getElementById("searchWeather");
const input = document.getElementById("city");
const city = document.getElementById("city_location");
const time = document.getElementById("localtime");
const temp = document.getElementById("temperature")

const key = "YOUR_KEY_GOES_HERE";

async function getData(cityName){
   const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${cityName}&aqi=yes`);
   return await promise.json();
}

button.addEventListener("click",async()=>{
    const value = input.value;
    const result = await getData(value);
    city.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    time.innerText = result.location.localtime;
    temp.innerText = `${result.current.temp_c} degree celsius`;
});