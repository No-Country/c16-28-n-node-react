
//Aca van a ir los controller de la ruta Users , (Cada routa tiene su propio controlador)

async function getUsers(req, res) {
    console.log("No tenemos base :c"); //Cuando tengamos base vamos a pedirle a la base la data de los usuarios
    return;
}
 //Con postman o thunder pueden probar la  ruta : http://localhost:3001/users >>> Les va a salir "no tenemos base" en la consola
 

//Aca van a seguir los /POST y demas funciones ...

module.exports = {
    getUsers };

