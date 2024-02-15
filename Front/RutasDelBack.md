Gente voy a ir dejando las rutas para que cuando tengan todo armado puedan hacer peticiones al back ♥ 
Si necesitan mas avisen al grupo de whatsap!

de momento la URL = http://localhost:3001 del back 

                                                    
Rutas Reviews:                                             (requerimientos de cada ruta)

URL + /reviews/      ===> Obtiene todas las reviews    
    + /reviews/:id_prove    ===> Obtiene las reviews de un solo proveedor.  (req: id_prov(params))
    + /reviews/post     ===> Para crear una review     (req: id_user , id_prov , id_service , id_solicited, score, description )
    + /reviews/put:id_review     ===> Para actualizar una review \\solo puede cambiar el score(estrellitas), y description\\ (req: id_review(params), score, descriptiion )
     
    (Las reviews NO se eliminan)


Rutas users:                                             (requerimientos de cada ruta)

URL + /users/        =>>> Obtiene todos los usuarios 
    + /users/post          =>>> Crea un usuario (req: name ,email, password)
    + /users/put:id_user        =>> Actualiza email, password, name e isActive (req: id_user(params), name , email , password, isActive ) 

    * Recordatorio: isActive estará en true , o sea que el usuario puede entrar , si esta baneado tiene que cambiar a false  y no podra ingresar.

    (Los Usuarios NO se eliminan)



Rutas Services:                                             (requerimientos de cada ruta)

URL + /services/    ==>> Obtiene todos las Services 
    + /services/post    ==>>> Creamos un nuevo servicio (req : name , id_rubro , description)
    + /services/:id_rubro   ==>>  Obtiene de un rubro todos los servicios (req: id_rubro(params))
    + /services/put:id_service   ==>>  Actualizamos un servicio (req: id_service(params), name, description)
    + /services/delete:id_service    ==>> Elimina un servicio (req: id_service(params))



Rutas Rubros:                                (requerimientos de cada ruta)

URL + /rubros/   ==>> Obtiene todos los Rubros
    + /rubros/post   === >> Creamos un nuevo rubro  (req: name , description)
    + /rubros/put:id_rubro  ==>> Actualizamos un rubro  (req:id_rubro(params) name , description)
    + /rubros/delete:id_rubro    ==>> Elimina un rubro (req:id_rubro (params))


Rutas Providers:                              (requerimientos de cada ruta)

URL + /providers/ === >>> Obtiene todos los proveedores
     /providers/post ==>>>> Crea un proovedor (req: name , email , password, address , id_service , contact)
     /providers/:id_prov ==>>> Actualiza un proovedor (req: id_prov(params), adderess,password, id_service , contact, isActive)