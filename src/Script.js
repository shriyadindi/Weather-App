const apikey="cf82c4f5ab8dd35d584e413bcfae6873";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city)
{
    const response = await fetch( apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else
    {
        var data = await response.json();


document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

if(data.weather[0].main == "Clouds")
{
    weatherIcon.src="https://github.com/shriyadindi/Weather-App/blob/main/clouds.png?raw=true";
}
else if(data.weather[0].main == "Clear")
{
    weatherIcon.src="https://github.com/shriyadindi/Weather-App/blob/main/clear.png?raw=true";
}
else if(data.weather[0].main == "Rain")
{
    weatherIcon.src="https://github.com/shriyadindi/Weather-App/blob/main/rain.png?raw=true";
}
else if(data.weather[0].main == "Drizzle")
{
    weatherIcon.src="https://github.com/shriyadindi/Weather-App/blob/main/drizzle.png?raw=true";
}
else if(data.weather[0].main == "Mist")
{
    weatherIcon.src="https://github.com/shriyadindi/Weather-App/blob/main/mist.png?raw=true";
}
document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";
} 
}
    

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
checkWeather();
