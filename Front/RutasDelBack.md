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
    + /users/post          =>>> Crea un usuario (req: name ,email, password y lastName)
    + /users/put:id_user        =>> Actualiza email, password, name , contact , lastname, isActive (req: id_user(params), y el dato a actualizar : name , email , password, lastname, contact, isActive ) 

    * Recordatorio: 
        -isActive estará en true , o sea que el usuario puede entrar , si esta baneado tiene que cambiar a false  y no podra ingresar.
        -Contact se llenara posteriormente, por eso no se pide al crear un user 


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

Rutas SolicitedService:                             (requerimientos de cada ruta)

URL + /solicited/ ====> Obtiene todas las solicitudes
    + /solicited/post ===>> Crear solicitud (req: id_user , id_prov , id_service, description)
    +/solicited/by/:parameter/:value   ===> Obtiene servicios solicitados por parámetro y valor específicos  (req: parameter (params),value(params))
    +/solicited/:id ====> actualizar una solicitud por ID (req: id_user , id_prov , id_service ,description y id_solicited(params)  )
    +/solicited/:id (delete) ==> Elimina una solicitud por ID (req: id_solicited(params) )

Rutas para cargar imagenes: 

URL + /img/  ===> Obtiene todas las imagenes
    + /img/post ===> "Crea"(sube) una imagen  (req: url , description, id_service, id_rubro)
    + /img/:id  ==>> Actualiza una imagen (req :id (params), url , description, id_service , id_rubro)
    + /img/:id  ===>> Obtiene una imagen por id del servicio (req :id (params))
    + /img/:id ===> Elimina la imagen (req :id (params))