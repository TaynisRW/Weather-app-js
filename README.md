<p align="center"><img src="https://raw.githubusercontent.com/TaynisRW/Weather-app-js/master/docs/icon.png" alt="Logo" width="150" height="150" />
</p>
<h1 align="center">Weather App</h1>
<p align="center"><b>Aplicación del clima</b></br>
<sub>Para hacer este proyecto usaremos diversos conceptos modernos de javascript como async-await, fetch, constantes, clases, etc. Así como también usaremos la programación orientada a objetos que nos provee JavaScript, haremos uso de herramientas como webpack y bootstrap, almacenaremos los datos en el localstorage del navegador, todo esto gracias al uso de una API llamada **[OpenWeatherMap](https://openweathermap.org/)** con la cual a partir de la ciudad y el código de un país podremos mostrar la información sobre el estado del cielo, la termperatura, la humedad y el viento en esa ciudad.</sub>
</p>

## ➤ Sobre el proyecto

Este proyecto tiene como objetivo mostrar como hacer uso de una API con JavaScript para poder mostrar en tiempo real los datos climáticos de las ciudades y su respectivo país. 
![Demo](https://raw.githubusercontent.com/TaynisRW/Weather-app-js/master/docs/Demo.png "Demo")
## Comenzando
#### **WEBPACK**
Es un empaquetador de módulos, es decir cuando estemos desarrollando una aplicación de front-end quizá necesitemos usar un prepocesador de **CSS** como **SASS, Stylus, LESS,** etc y necesitamos convertir ese código nosotros no tendríamos que ejecutar comandos para eso a cada si tenemos una herramienta que lo hace por nosotros y no solo eso también nos puede ayudar por ejemplo a minificar archivos de **JS**, copiar los archivos de un lugar a otro, tener un servidor de desarrollo, etc. 
Todo eso y más lo tenemos con **[Webpack](https://webpack.js.org/)** convirtiendola en una herramienta bastante útil al desarrollar proyectos de front-end, frameworks modernos como **Angular, Vue** o **React** hacen uso de esta herramienta, nosotros la usaremos en este proyecto para realizar todas estas tareas típicas del front-end.

Para poder instalar **Webpack** necesitamos un entorno de ejecución de JavaScript en este caso usaremos **[Node.js](https://nodejs.org/es/)**, el cuál nos permite ejecutar herramientas de JS en el sistema operativo, si quieres saber como instalarlo en tu equipo puedes dar **[click aquí]()**
### ➤ Estructura del proyecto
En nuestro editor tendremos creada la carpeta del proyecto en este caso llamada **Weather-app-js**, dentro de ella crearemos una carpeta llamada ***src***, aquí se van a almacenar nuestros archivos para el desarrollo **(HTML, JS y CSS)** para posteriormente convertirlos en archivos de producción los cuales son los que deberías subir al servidor.
Dentro de la carpeta ***src*** vamos a crear otra carpeta llamada ***app*** la cual contendrá los archivos JS que necesitaremos para el proyecto:
- **index.js**: Será el archivo que pondrá en marcha nuestra app
- **storage.js**: Será el encargado de la lógica para almacenar los datos dentro de localstorage
- **dom.js**: Será el encargado de la manipulación del DOM
- **api.js**: Será el encargado de pedir los datos a la API

> NOTA: Estos archivos son los que serán converitdos posteriormente a código de producción a través de **Webpack**

Para eso debemos instalar Webpack en nuestro proyecto:
- Abrimos una terminal que esté ubicada dentro de nuestro proyecto, en nuestro caso al usar Visual Studio Code podemos abrirla sin problema presionando las teclas **Ctrl+ñ** *(por defecto se abre en la ruta de nuestro proyecto)*
- En la consola/terminal debemos escribir el siguiente comando 
`npm init --yes` lo que hace este comando es crear un **package.json** en nuestro proyecto el cual nos describe algunos datos de nuestro proyecto y posteriormente nos servirá para instalar los módulos necesarios
- Abrimos el archivo **package.json** y en la parte de 


    "scripts": {
    	"test": "echo \"Error: no test specified\" && exit 1
    } 
borramos `"test": "echo \"Error: no test specified\" && exit 1` ya que posteriormente pondremos nustros propios scripts allí  
- Instalamos el módulo **Webpack** con unos complementos en nuestro proyecto usando el comando 
`npm i webpack webpack-cli style-loader css-loader webpack-dev-server html-webpack-plugin`

 -  Módulos adicionales	
	- **webpack-cli**: Módulo para poder trabajar con webpack en sus últimas versiones y poder convertit código de JS
	- **style-loader/css-loader**: Módulo que nos ayudará a poder convertir código de CSS y trabajar con ese código dentro 				  de los archivos JS
	- **webpack-dev-server**: Este módulo nos va a permitir tener nuestro servidor de desarrollo en webpack
	- **html-webpack-plugin**: Este módulo nos permitirá poder copiar nuestro(s) archivos **HTML** a la carpeta de producción
- Usaremos una **CDN** de Bootstrap 4 modificada para tener un esilo y colores diferentes pero con la misma calidad que el original la cual podremos obtener en **[BootSwatch](https://bootswatch.com/)**, el tema que usaremos nosotros para este proyecto sera **[Darkly](https://bootswatch.com/4/darkly/bootstrap.min.css)**
![Demo](https://raw.githubusercontent.com/TaynisRW/Weather-app-js/master/docs/CDN%20de%20Bootswatch.png "CDN")
puedes usar la versión original de [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/) si lo deseas, para ello debemos agregar el siguiente código en nuestro archvio **index.html** 
```html
<link rel="stylesheet" href="link de nuestro CDN">
```
- Para poder darle instrucciones a Webpack debemos crear un archivo llamado **webpack.config.js** en el cuál por medio de un objeto le daremos las instrucciones necesarias *Ver el archivo webpack.config.js*
- Una vez creado el archivo **webpack.config.js** con sus respectivas configuraciones crearemos nuestro primer script en el archivo **package.json** en el apartado scripts escribimos el siguiente código
    
    	// Convierte a traves de webpack el código a producción
    	"build": "webpack -p"
- Vamos a la terminal para poder ejecutar el script que acabamos de hacer con `npm run build` esto nos generará una nueva carpeta en nuestro caso llamada **dist** en dónde estará el código que vamos a subir al servidor
> Recuerda que que la carpeta **src** es donde tenemos nuestro código para desarrollo
- Ahora crearemos nuestro entorno de desarrollo, el cuál nos ayudará a evitar poner el comando **webpack** cada vez que nosotros realicemos un cambio en nuestro servidor de desarrollo. Para eso crearemos otro script  `"dev": "webpack-dev-server -d"` junto con el primero que habíamos creado debría quedar de la siguiente manera:
```javascript
"scripts": {
	// Convierte a traves de webpack el código a producción
	"build": "webpack -p"
	// Creamos nuestro servidor de desarrollo para el proyecto
	"dev": "webpack-dev-server -d"
}
```
- Para levantar nuestro servidor en nuestra terminal de Visual Studio Code ponemos el siguiente comando `npm run dev`
- Para poder usar los datos de la **API OpenWeatherMap** debemos ingresar a su página y registrarnos así podemos obtener nuestra **API Key**, la cuál una vez logeados estará en la sección **[API Keys](https://home.openweathermap.org/api_keys)**
- Para poder hacer las peticiones debemos espcificarle a la **[API](https://openweathermap.org/current)** como vamos a pedir los datos para nuestro proyecto nosotros usaremos la siguiente forma de petición en donde le pasaremos la ciudad y el código del país en base a la [ISO 3166 ALPHA-2](https://laendercode.net/es/countries.html)
```bash
https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=APIKEY&units=metric 
```
- Por último haremos uso de **LocalStorage** para poder alamacenar nuestra última búsqueda y que al momento de recargar la página conserve los datos buscados 

### ➤ IDE de desarrollo
- **[Visual Studio Code](https://code.visualstudio.com/)**

## ➤ Licencia

Distribuido bajo la licencia MIT. Consulte [MIT](https://opensource.org/licenses/MIT) para obtener más información.

## ➤ Contacto
[ATIWalkers](https://atiwalkers.com.mx) - **atiwalkers7@gmail.com**
