// Creamos la clase que vamos a exportar
export class DOM{
    // Este método sera el encargado de seleccionar los elementos HTML para poder indicar dónde queremos pintar los datos
    constructor(){
        // Guardamos cada elemento en dónde querramos mostrar los datos de la petición
        this.lacation = document.getElementById('weather_location');
        this.desc = document.getElementById('weather_description');
        this.grades = document.getElementById('weather_string');
        this.humidity = document.getElementById('weather_humidity');
        this.wind = document.getElementById('weather_wind');
    }
    // Este método tomará los datos del clima y se los irá asignando a cada elemento del HTML
    render(weather){
        // Cambiamos el contenido de nuestros elementos HTML
        this.lacation.textContent = weather.name + ' / ' + weather.sys.country;
        this.desc.textContent = weather.weather[0]['description'];
        this.grades.textContent = weather.main.temp + ' °C';
        this.humidity.textContent = 'Humedad: ' + weather.main.humidity + ' %';
        this.wind.textContent = 'Viento: ' + weather.wind.speed + ' m/s';
    }
}