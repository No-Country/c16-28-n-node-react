Gente voy a ir dejando las rutas para que cuando tengan todo armado puedan hacer peticiones al back ♥ 
Si necesitan mas avisen al grupo de whatsap!

de momento la URL = http://localhost:3001 del back 

Ruta login (Tanto para Prov como User):               (requerimientos de cada ruta)

POST     URL + /login    ===> Loguerse (Req: email y password) Te da un token y un role

Rutas Reviews:                                             (requerimientos de cada ruta)

GET        URL + /reviews/      ===> Obtiene todas las reviews    
GET            + /reviews/:id_prove    ===> Obtiene las reviews de un solo proveedor.  (req: id_prov(params))
POST            + /reviews/post     ===> Para crear una review     (req: id_user , id_prov , id_service , id_solicited, score, description )
PUT            + /reviews/put:id_review     ===> Para actualizar una review \\solo puede cambiar el score(estrellitas), y description\\ (req: id_review(params), score, descriptiion )
            
            (Las reviews NO se eliminan)


Rutas users:                                             (requerimientos de cada ruta)

GET        URL + /users/        =>>> Obtiene todos los usuarios 
POST            + /users/post          =>>> Crea un usuario (req: name ,email, password y lastName)
PUT            + /users/put:id_user        =>> Actualiza email, password, name , contact , lastname, isActive (req: id_user(params), y el dato a actualizar : name , email , password, lastname, contact, isActive ) 

    * Recordatorio: 
        -isActive estará en true , o sea que el usuario puede entrar , si esta baneado tiene que cambiar a false  y no podra ingresar.
        -Contact se llenara posteriormente, por eso no se pide al crear un user 


    (Los Usuarios NO se eliminan)



Rutas Services:                                             (requerimientos de cada ruta)

GET        URL + /services/    ==>> Obtiene todos las Services 
POST            + /services/post    ==>>> Creamos un nuevo servicio (req : name , id_rubro , description)
GET             + /services/:id_rubro   ==>>  Obtiene de un rubro todos los servicios (req: id_rubro(params))
PUT             + /services/put:id_service   ==>>  Actualizamos un servicio (req: id_service(params), name, description)
DELETE          + /services/delete:id_service    ==>> Elimina un servicio (req: id_service(params))



Rutas ProvService:            (requerimientos de cada ruta)
Esta es una tabla intermedia entre Providers y servicios-

GET        URL + /ProvService/  ==>>> Obtiene todas las relaciones entre prov y servicios
GET            + /ProvService/:id_service ===>>> Obtiene todos los proveedores que ofrecen ese servicio (req:id_service(params))



Rutas Rubros:                                (requerimientos de cada ruta)

GET        URL + /rubros/   ==>> Obtiene todos los Rubros
POST            + /rubros/post   === >> Creamos un nuevo rubro  (req: name , description)
PUT            + /rubros/put:id_rubro  ==>> Actualizamos un rubro  (req:id_rubro(params) name , description)
DELETE            + /rubros/delete:id_rubro    ==>> Elimina un rubro (req:id_rubro (params))


Rutas Providers:                              (requerimientos de cada ruta)

GET       URL + /providers/ === >>> Obtiene todos los proveedores
POST            /providers/post ==>>>> Crea un proovedor (req: name , email , password, address , id_service)
PUT            /providers/:id_prov ==>>> Actualiza un proovedor (req: id_prov(params), name , lastname, email , img, horary, address, matriculation,otherCertif, password, contact, isActive )

Rutas SolicitedService:                             (requerimientos de cada ruta)

GET        URL + /solicited/ ====> Obtiene todas las solicitudes
POST            + /solicited/post ===>> Crear solicitud (req: id_user , id_prov , id_service, description)
GET            +/solicited/by/:parameter/:value   ===> Obtiene servicios solicitados por parámetro y valor específicos  (req: parameter (params),value(params))
PUT            +/solicited/:id ====> actualizar una solicitud por ID (req: id_user , id_prov , id_service ,description y id_solicited(params)  )
DELETE            +/solicited/:id (delete) ==> Elimina una solicitud por ID (req: id_solicited(params) )

Rutas para cargar imagenes: 

GET        URL + /img/  ===> Obtiene todas las imagenes
POST            + /img/post ===> "Crea"(sube) una imagen  (req: url , description, id_service, id_rubro)
PUT            + /img/:id  ==>> Actualiza una imagen (req :id (params), url , description, id_service , id_rubro)
GET            + /img/:id_prov/:id_service' ===>> Obtiene una imagen por id del servicio e id prov(req :id_service e id_prov(params))
DELETE            + /img/:id ===> Elimina la imagen (req :id (params))