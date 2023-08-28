
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apiKey="c61a30decd65b00fe3d5d189ef6d9e9f"

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")
const errorMessage=document.querySelector(".error")
async function checkWeather(city){
    const response= await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status==404){
        errorMessage.style.display="block"
        document.querySelector(".weather").style.display="none"
    }else{
    let data=await response.json();
    console.log("data",data);
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector('.wind').innerHTML=data.wind.speed+"km/h";
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
    }else if(data.weather[0].main=="Snow"){
        weatherIcon.src="images/snow.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
    }
    document.querySelector(".weather").style.display="block"
    errorMessage.style.display="none"
}}
searchBtn.addEventListener("click",()=>{checkWeather(searchBox.value)})

