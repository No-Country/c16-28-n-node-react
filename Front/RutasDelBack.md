Gente voy a ir dejando las rutas para que cuando tengan todo armado puedan hacer peticiones al back ♥ 
Si necesitan mas avisen al grupo de whatsap!

de momento la URL = http://localhost:3001 del back 

Rutas Reviews:

URL + /reviews/      ===> Obtiene todas las reviews    
    + /reviews/:id_prove    ===> Obtiene las reviews de un solo proveedor. 
    + /reviews/post     ===> Para crear una review 
    + /reviews/put:id_review     ===> Para actualizar una review (solo puede cambiar el score(estrellitas), y description)
     
    (Las reviews NO se eliminan)

Rutas user:

URL + /users/        =>>> Obtiene todos los usuarios 
    + /users/post          =>>> Crea un usuario
    + /users/put:id_user        =>> Actualiza email, password, name e isActive

    (Los Usuarios NO se eliminan)