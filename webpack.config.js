// Para que funcione correctamente el enrutamiento debemos llamar el módulo path
const path = require('path');
// Importamos el Html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // Le decimos que archivos debe de tomar para transformalo en código de producción
    // Desde donde copiaremos los archivos
    entry: './src/app/index.js',
    // Generamos nuestra carpeta de salida
    output: {
        // En donde estrá la ruta de la carpeta que queremos colocar y como queremos que se llame
        path: path.join(__dirname, 'dist'),
        // Colocamos el nombre del archivo que va a generar dentro de nuestra carpeta
        filename: 'bundle.js'
    },
    // Configuramos nuestro servidor de desarrollo
    devServer: {
        port: 3000
    },
    // Colocamos las reglas de Webpack
    module: {
        rules: [
            {
                // Para que pueda cargar archivos que terminen en .css
                test: /\.css$/,
                // Para que pueda cargalos mandamos a llamar los módulos style-loader y css-loader
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    // Configuramos los plugins
    plugins: [
        // Nos ayuda a poder copiar archivos HTML de un directorio a otro
        new HtmlWebpackPlugin({
            // Le decimos en donde está el archivo HTML que tiene que copiar
            template: './src/index.html'
        })
    ]
}