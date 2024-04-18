let temperature = document.querySelector("temperature") ;


var temperature = parseInt(document.getElementById("temperature").value);



console.log(temperature);

function checkWeather{
    if (temperature>= 15 && temperature<=30) {
        console.log("its a nice temp today");
    }
    else if (temperature<15){
        console.log("samui desu ne");
    }
    else if (temperature>30) {
        console.log("atatakai desu ne")
    }
}




