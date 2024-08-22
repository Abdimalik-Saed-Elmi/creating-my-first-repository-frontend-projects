const Apikey = "bb39aa0ea3bcb59ef5ae4c2c8f8c9b6f"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=barlin"
const searchbox = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');

async function GetWeatherData(City){
   
    try{
   
    const response = await fetch(apiUrl + City  + `&appid=${Apikey}&units=metric`);
    const data = response.json();
    console.log(data)

    document.querySelector('.City').innerHTML = data.name;
    document.querySelector('.temp').innerHTML= Math.round(data.temp) + "°C";
    document.querySelector('.humidity').innerHTML= data.main.humidity + "%";
    document.querySelector('.wind').innerHTML= data.wind.speed + "km/h";
    }
    catch(e){
        console.error('Waxaa dhacay:', e)
    }
    
}
searchbtn.addEventListener("click", ()=>{
    GetWeatherData(searchbox.value);
})



