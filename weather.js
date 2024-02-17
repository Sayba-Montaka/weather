let cityName = document.querySelector(".city");
let temp = document.querySelector(".temp");
let weatherIcons =document.querySelector(".weather i");
console.log(weatherIcons)
let humidity = document.querySelector(".Humidity");
let wind = document.querySelector(".wind");
let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector("button"); 





const apiKey = "ee5da0d0afbeb7edd8af8c579f90e754";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkWeather(city){
    const response = await fetch(apiUrl + `${city}` + `&appid=${apiKey}`);
    var data = await response.json();
 
    console.log(data);

 
    cityName.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp)+ "°c";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " " +"km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcons.innerHTML ='<i class="fa-solid fa-cloud"></i>'; 
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcons.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcons.innerHTML = '<i class="fa-solid fa-cloud-rain"></i>';
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcons.innerHTML = '<i class="fa-light fa-cloud-drizzle"></i>';
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcons.innerHTML ='<i class="fa-light fa-cloud-drizzle"></i>' ;
    }
    
  
}
searchBtn.addEventListener("click", ()=> {
     checkWeather(searchBox.value);
  
    
   
});
