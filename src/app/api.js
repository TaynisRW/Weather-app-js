// Exportamos y creamos una clase la cual tendrá los métodos para poder obtener el clima y sus datos
export class Weather{
    // Este método se ejecuta apenas la clase es creada
    constructor(city, countryCode){
        // Guardamos los parámetros en propiedades para poder guardar la ciudad, el código del país y la API Key
        this.apiKey = 'e2afb8f81b6dea63a30ea2866d811c91';
        this.city = city;
        this.countryCode = countryCode;
    }
    // Con este método podremos usar la API Key el cuál lo ejecutaremos cada vez que querramos obtener los datos de una determinada ciudad
    async getWeather(){
        // Guardamos la peticion de la API y le asignamos sus respectivos valores 
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
        // Para hacer la petición usamos el método fetch() pero al ser código asincrono lo manejaremos con asyn-await
        const response = await fetch(URI);
        // Convertimos esos datos en un JSON para poder leerlos de manera correcta
        const data = await response.json();
        // Retornamos los datos que nos regrese la API
        return data;
    }
    // Método para detectar el cambio de la locación
    changeLocation(city, countryCode){
        // Obtenemos las nuevas propiedades de nuestra clase
        this.city = city;
        this.countryCode = countryCode;
    }
} 