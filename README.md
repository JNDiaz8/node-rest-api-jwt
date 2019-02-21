
     <-- Proyecto de Back-End de la asignatura de PSS. -->
     
        <- Descripción del Proyecto ->
Este proyecto consta de las tecnologías node.js, express, mongoose y jwt. Tenemos una base de datos creada con mongo 
en la que tenemos importados los datos de car.json. Nuestro proyecto tratará sobre una base de datos en la que tendremos 
una lista de coches, en la que podemos añadir, modificar, borrar los coches. Para acceder a la base de datos tienes que crear 
un usuario y autenticarte con el token que este proceso te facilite.

       <- Tabla Arquitectura REST ->

*-- HTTP Web --*
*-- Definición --*
*-- Ruta --*
POST
Creación de nuevo usuario.
http://localhost:3000/users/register 
POST
Autenticación del usuario.
http://localhost:3000/users/authenticate 
POST
Creación de nuevo coche.
http://localhost:3000/cars 
GET
Obtención de lista completa de los coches.
http://localhost:3000/cars/ 
GET
Obtención de un coche, realizando una búsqueda por el Id del coche.
http://localhost:3000/cars/{id}  
PUT
Modificación de un coche localizado por su Id.
http://localhost:3000/cars/{id} 
DELETE
Borrado de un coche localizado por su ID
http://localhost:3000/cars/ {id} 

      <- Descripción del Modelo ->

const CarSchema = new Schema({
	Make: {
		type: String,
		trim: true, 
		required: true,
	},
	Model: {
		type: String,
		trim: true,
		required: true
	},
	Color: {
		type: String,
		trim: true,
		required: true
	}
});

El modelo consta de 3 atributos tipo String llamados Make (Marca), Model (Modelo) y Color del coche. Tendremos también un 
ID que se nos generará solo para que que cada coche sea único. Los atributos están como required porque necesita que cada 
coche lleve obligatoriamente esos campos. El trim es para que elimine los espacios en blanco del String.

      <- Registro ->
Para poder registrarnos y obtener la lista de coches, necesitaremos un nombre de usario, un correo electrónico y una contraseña. 

      <- Autenticación ->
Para poder autenticarnos y obtener la lista de coches, necesitaremos el correo electrónico y la contraseña y copiaremos el 
token que nos facilita el acceso durante 1 hora. 


