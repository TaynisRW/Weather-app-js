export class Storage{
    constructor(){
        // Estas propiedades las usaremos en caso de que el usuario haya realizado una búsqueda
        this.city;
        this.countryCode;
        // Estas propiedades serán las que mostraremos por defecto cuando un usuario entre por primera vez
        this.defaultCity = 'Mexico City';
        this.defaultCountryCode = 'MX';
    }
    // Método para obtener los datos
    getLocationData(){
        // Validamos si existe o no una búsqueda previa para poder mostrar los datos
        // Si no hay datos de búsqueda la propiedad city tendrá el valor por defecto
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } 
        // Si hay datos de búsqueda la propiedad city tendrá el valor de dicha búsqueda
        else{
            this.city = localStorage.getItem('city');
        }
        // Si no hay datos de búsqueda la propiedad countryCode tendrá el valor por defecto
        if (localStorage.getItem('countryCode') === null) {
            this.countryCode = this.defaultCountryCode;
        } 
        // Si hay datos de búsqueda la propiedad countryCode tendrá el valor de dicha búsqueda
        else{
            this.countryCode = localStorage.getItem('countryCode');
        }
        // Los retornamos para que se puedan utilizar
        return{
            city: this.city,
            countryCode: this.countryCode
        }
    }
    // Método que se encargará de almacenar la búsqueda
    setLocationData(city, countryCode){
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }
}