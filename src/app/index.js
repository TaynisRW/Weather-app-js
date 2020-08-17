// Esto lo podemos hacer gracias a que en el archivo webpack.config.js configuramos el proyecto para que pudieramos escribir css dentro de javascript
require('./index.css');
// Importamos la clase Weather de nuestro módulo api.js
const { Weather } = require('./api');
// Importamos la clase DOM de nuestro módulo dom.js
const { DOM }= require('./dom');
// Importamos la clase Storage de nuestro módulo storage.js
const { Storage }= require('./storage');
// Instanciamos las clases que acabamos de llamar y las guardamos en una constante para poder utilizarlas
const dom = new DOM();
const storage = new Storage();
// Empezamos a almacenar y a obtener los datos
// En cuanto empieza la app vamos a obtener la ciudad y el código por defecto
const { city, countryCode } = storage.getLocationData();
// Pasamos los valores obtenidos a la API
const weather = new Weather(city, countryCode);
// Función asincrona para obtener el clima
async function fetchWeather(){
    // Una vez importada e instanciada la clase ejecutamos su método getWeather() y la almacenamos
    const data = await weather.getWeather();
    console.log(data);
    // Llamamos al método render() de nuestra clase DOM
    dom.render(data);
}
// Vamos a escuchar un evento para saber cuando el usuario a dado click en nuestro formulario
document.getElementById('weather_btnForm').addEventListener('click', (e) =>{
    // Evitamos que el evento por defecto del formulario para evitar que la página se recarge
    e.preventDefault(); 
    // Obtenemos y capitalizamos el valor que tengamos en nuestro input del formulario y lo guardamos en una constante
    const city = document.getElementById('weather_city').value[0].toUpperCase() + document.getElementById('weather_city').value.slice(1);
    // Obtenemos y ponemos en masyúscula el valor que tengamos en nuestro input del formulario y lo guardamos en una constante
    const countryCode = document.getElementById('weather_countryCode').value.toUpperCase();
    console.log(city,countryCode)
    // Obtenemos la localización que se nos pase en el formulario
    weather.changeLocation(city,countryCode);
    // Antes de obtener los nuevos datos lo alamacenamos en el LocalStorage
    storage.setLocationData(city, countryCode);
    // Mandamos a llamar a la funcion fetchWeather() para que nos muestre los nuevos datos
    fetchWeather();
}) 
// Esto me permite saber cuando el contenido a sido cargado y poder cargar correctamente los elementos
document.addEventListener('DOMContentLoaded', fetchWeather());