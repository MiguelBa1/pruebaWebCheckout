# Prueba placetopay conexión a WebCheckOut
Este proyecto simula la conexión entre un comercio y el servicio de WebCheckOut de Placetopay.
## Instalación y requerimientos
Para ejecutar el proyecto en Windows necesita una instalación de [Xampp](https://www.apachefriends.org/download.html) y de [Node.js](https://nodejs.org/en/download/). Xampp se usará para el manejo de la base de datos de MySQL.
Luego de la instalación debe clonar este repositorio con el comando
```
git clone https://github.com/barramiguel/pruebaWebCheckout.git
```
### Instalación de las dependencias
Para instalar las librerias de npm que usa el proyecto debe abrir la carpeta clonada `pruebaWebCheckout` y desde una terminal ejecutar el comando `npm install`, esto intalará las dependencias.
### Base de datos
Después de activar Mysql y Apache en el panel de control de Xampp se debe generar la base de datos del proyecto.
Primero debe ingresar a phpmyadmin y crear una base de datos llamada `prueba` y cargar el script SQL que se encuentra en la carpeta del proyecto llamado `db.sql`, se deben haber creado 2 tablas `productos` y `usuarios`.
## Acceso al proyecto
Hechos estos pasos se debe iniciar el servidor con el comando `npm start` y luego ingresar a la pagina de login escribiendo en el navegador la ruta de [http://localhost:3000/login](http://localhost:3000/login)
Las credenciales para logearse son:
- Usuario : admin
- Contraseña: test123