// Nos permite acceder a donde estamos en las carpetas. Ya sea en local o en el servidor
const path = require('path');
// Archivo necesario para trabajar con HTML
const HtmlWebPackPlugin = require('html-webpack-plugin');

// Aquí se encuentra toda la configuración
module.exports = {
    // Punto de entrada con su dirección. Aquí vive el código inicial y de aquí parte el desarrollo
    entry: './src/index.js',
    // Donde se envia el compilado listo para producción
    output: {
        // Lugar donde se exportará el proyecto
        path: path.resolve(__dirname, 'dist'),
        // Este es el nombre del archivo final para producción
        filename: 'main.js'
    },
    resolve: {
        // Definimos las extensiones que vamos a utilizar
        extensions: ['.js']
    },
    // Modulo con las reglas que van a aplicar en el proyecto
    module: {
        rules: [{
            // Estructura de babel
            test: /\.js?$/,
            exclude: /node_modules/,
            // Utilizar un loader como configuración establecida
            use: {
                loader: 'babel-loader'
            }
        }]
    },

    // Establecemos los plugins que vamos a utilizar
    plugins: [
        new HtmlWebPackPlugin({
            // Como se va a inyectar valores a los archivos HTML
            inject: true,
            // Dirección donde se encuentra el template principal
            template: './public/index.html',
            //El nombre que tendrá el archivo
            filename: './index.html',
        })
    ]
}