[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10405337&assignment_repo_type=AssignmentRepo)
# *Práctica Microservicios*: descripción de la aplicación

Pablo García del Moral

Key: fnAE-85iN0AAzP2jHvqwnZZ6KKjIiNFmVLwUll-K

## Capturas de Fauna de principio de la practica:
*Home*
<img src='assets/capturas/homeFauna.png' withd='200px'>

*Inicio Base de Datos*
<img src='assets/capturas/bdFauna.png' withd='200px'>

*Coleccion*
<img src='assets/capturas/coleccionFauna.png' withd='200px'>

## Primer Incremento

*Trello*
<img src='assets/capturas/trello_1_1.png' withd='200px'>
<img src='assets/capturas/trello_1_2.png' withd='200px'>

*HU Realizadas*
En este primer incremento he realizado las HU 01, 02 y 03. Estas consisten en cambiar la info de Acerca De,
mostrar un listado de competidores y mostrar un listado de competidores ordenado alfabeticamente.

<img src='assets/capturas/evidencia01.png' withd='200px'>
<img src='assets/capturas/evidencia02.png' withd='200px'>
<img src='assets/capturas/evidencia03.png' withd='200px'>

## Segundo Incremento

*Trello*
<img src='assets/capturas/trello_2_1.png' withd='200px'>

## Documentos creados en Fauna:
{
  "ref": Ref(Collection("Competidores"), "358542902268264653"),
  "ts": 1678729872260000,
  "data": {
    "name": "Javier Fernandez",
    "birthdate": {
      "day": 12,
      "month": 5,
      "year": 1998
    },
    "country": "España",
    "club": "Club Piragüismo Pontevedra",
    "yearsWin": [
      2017,
      2019
    ],
    "participation": [
      2016,
      2017,
      2018,
      2019,
      2021
    ],
    "timesOlimpic": 1
  }
}

{
  "ref": Ref(Collection("Competidores"), "359106945417740493"),
  "ts": 1678729920700000,
  "data": {
    "name": "Sara Lopez",
    "birthdate": {
      "day": 28,
      "month": 9,
      "year": 1994
    },
    "country": "España",
    "club": "Club Náutico Sevilla",
    "yearsWin": [
      2018,
      2022
    ],
    "participation": [
      2017,
      2018,
      2019,
      2021,
      2022
    ],
    "timesOlimpic": 0
  }
}

{
  "ref": Ref(Collection("Competidores"), "359106994243633357"),
  "ts": 1678729967270000,
  "data": {
    "name": "Luisa Martinez",
    "birthdate": {
      "day": 17,
      "month": 6,
      "year": 2001
    },
    "country": "España",
    "club": "Club Náutico Banyoles",
    "yearsWin": [
      2019,
      2021
    ],
    "participation": [
      2018,
      2019,
      2021,
      2022
    ],
    "timesOlimpic": 0
  }
}

{
  "ref": Ref(Collection("Competidores"), "359107194198687949"),
  "ts": 1678730157966000,
  "data": {
    "name": "Maria Lopez",
    "birthdate": {
      "day": 11,
      "month": 7,
      "year": 1998
    },
    "country": "España",
    "club": "C.N. Oliva",
    "yearsWin": [
      2020,
      2022
    ],
    "participation": [
      2019,
      2020,
      2021,
      2022
    ],
    "timesOlimpic": 1
  }
}

{
  "ref": Ref(Collection("Competidores"), "359107227678671053"),
  "ts": 1678730189880000,
  "data": {
    "name": "Carlos Perez",
    "birthdate": {
      "day": 2,
      "month": 4,
      "year": 1995
    },
    "country": "Portugal",
    "club": "Clube Naval Setubalense",
    "yearsWin": [
      2017,
      2019
    ],
    "participation": [
      2016,
      2017,
      2018,
      2019
    ],
    "timesOlimpic": 1
  }
}

{
  "ref": Ref(Collection("Competidores"), "359107262378148044"),
  "ts": 1678730222980000,
  "data": {
    "name": "Sofia Gomez",
    "birthdate": {
      "day": 18,
      "month": 9,
      "year": 2001
    },
    "country": "España",
    "club": "C.D. Aranjuez",
    "yearsWin": [
      2020
    ],
    "participation": [
      2019,
      2020,
      2021,
      2022
    ],
    "timesOlimpic": 0
  }
}

{
  "ref": Ref(Collection("Competidores"), "359107292163997901"),
  "ts": 1678730251390000,
  "data": {
    "name": "Hugo Gonzalez",
    "birthdate": {
      "day": 25,
      "month": 6,
      "year": 1997
    },
    "country": "España",
    "club": "C.N. Altea",
    "yearsWin": [
      2018,
      2022
    ],
    "participation": [
      2017,
      2018,
      2021,
      2022
    ],
    "timesOlimpic": 0
  }
}

{
  "ref": Ref(Collection("Competidores"), "359107320870863053"),
  "ts": 1678730278760000,
  "data": {
    "name": "Paola Fernandez",
    "birthdate": {
      "day": 13,
      "month": 2,
      "year": 1999
    },
    "country": "España",
    "club": "C.D. Sevilla",
    "yearsWin": [
      2021
    ],
    "participation": [
      2018,
      2019,
      2020,
      2021
    ],
    "timesOlimpic": 0
  }
}

{
  "ref": Ref(Collection("Competidores"), "359107351425319117"),
  "ts": 1678730307900000,
  "data": {
    "name": "Andres Sanchez",
    "birthdate": {
      "day": 27,
      "month": 12,
      "year": 1994
    },
    "country": "España",
    "club": "C.N. Vilanova",
    "yearsWin": [
      2019,
      2022
    ],
    "participation": [
      2017,
      2018,
      2019,
      2022
    ],
    "timesOlimpic": 0
  }
}

{
  "ref": Ref(Collection("Competidores"), "359107376180101325"),
  "ts": 1678730331510000,
  "data": {
    "name": "Elena Rodriguez",
    "birthdate": {
      "day": 9,
      "month": 1,
      "year": 2000
    },
    "country": "España",
    "club": "C.N. Banyoles",
    "yearsWin": [
      2020
    ],
    "participation": [
      2018,
      2019,
      2020,
      2021
    ],
    "timesOlimpic": 0
  }
}

{
  "ref": Ref(Collection("Competidores"), "359107434033184972"),
  "ts": 1678730386680000,
  "data": {
    "name": "Pablo Martin",
    "birthdate": {
      "day": 8,
      "month": 11,
      "year": 1997
    },
    "country": "España",
    "club": "Club Piragüismo Tajo",
    "yearsWin": [
      2019,
      2021
    ],
    "participation": [
      2017,
      2018,
      2019,
      2021,
      2022
    ],
    "timesOlimpic": 0
  }
}

{
  "ref": Ref(Collection("Competidores"), "359107462811353292"),
  "ts": 1678730414120000,
  "data": {
    "name": "Ana Gomez",
    "birthdate": {
      "day": 15,
      "month": 2,
      "year": 1999
    },
    "country": "Portugal",
    "club": "Clube de Canoagem de Setúbal",
    "yearsWin": [
      2018,
      2020
    ],
    "participation": [
      2017,
      2018,
      2019,
      2021,
      2022
    ],
    "timesOlimpic": 1
  }
}

## Arquitectura de la aplicación

La aplicación funciona gracias a la colaboración de **tres aplicaciones distintas** (en realidad, tres servidores web implementados con [Express ↗️](https://expressjs.com/) para [Node.js ↗️](https://nodejs.org/en/)).

![Esquema de comunicación entre las distintas aplicaciones ](./assets/img/esquema-comunicacion-apps.png) 

*Esquema de comunicación entre las distintas aplicaciones.* &#8593;

Como se puede observar, esta aplicación plantilla está formada por las siguientes aplicaciones web:
* Aplicación *front-end*: servidor para la página web
* Aplicación *api-gateway*: enrutador de peticiones a microservicios
* Aplicación *ms-plantilla*: microservicio

Se respetan siempre las siguientes reglas básicas:
1. El usuario solo interactúa con la aplicación *front-end*
2. La aplicación *front-end* solo interactúa con la aplicación *api-gateway*
3. La aplicación *api-gateway* recibe peticiones de *front-end* y las deriva al microservicio correspondiente. Dicho microservicio resuelve la petición y envía el resultado a la aplicación *front-end* a través de *api-gateway*
4. Los microservicios interactúan con una BBDD y con *api-gateway* y también entre ellos. 
5. En el caso de haber varios microservicios, cada uno de ellos puede interactuar con una BBDD distinta. Además, los microservicios pueden interactuar directamente entre ellos.
   
## Funcionamiento de la aplicación
La funcionalidad implementada en la plantilla es muy simple: hay dos botones que llaman, respectivamente, a la ruta raíz del microservicio (es decir, ```/plantilla/```) y a la ruta "Acerca de" (```/plantilla/acercade```) siempre usando como intermediario a la aplicación *api-gateway*.

Las siguientes imágenes muestran la interfaz de la aplicación una vez puesta en marcha:

![Pantalla de inicio de la aplicación al pulsar en el botón Home](./assets/img/front-end-index-home-sin-jasmine.png)

*Pantalla de inicio de la aplicación al pulsar en el botón **Home*** &#8593;

![Pantalla de inicio de la aplicación al pulsar en el botón Acerca De](./assets/img/front-index-acerca-de-sin-jasmine.png)

*Pantalla de inicio de la aplicación al pulsar en el botón **Acerca de*** &#8593;

![Pantalla de inicio de la aplicación cuando se está ejecutando con Jasmine para comprobación de TDD](./assets/img/front-end-index-con-jasmine.png)

*Pantalla de inicio de la aplicación cuando se está ejecutando con Jasmine para comprobación de TDD* &#8593;

## Puesta en marcha de de la aplicación: ```npm install```

Para facilitar la descarga del código como ejercicio de *Clasroom GitHub*, se han introducido las tres aplicaciones en un solo repositorio. En un proyecto real, tendríamos repositorios distintos para cada una de las aplicaciones.

Para poder poner en marcha el proyecto, debemos clonar el repositorio y, posteriormente, abrir un terminal de línea de órdenes e ir entrando en cada uno de los tres directorios que existen (es decir: ```front-end```, ```ms-plantilla``` y ```api-gateway```) escribiendo la siguiente instrucción en cada uno de ellos:

```
npm install
```

Para comprobar que la instalación ha funcionado correctamente, podemos ejecutar en cada uno de los directorios la siguiente instrucción:

```
npm test
```

Si el resultado es que se han ejecutado los tests (aunque sea con error), es que el proceso de instalación ha sido correcto y podemos pasar a ejecutar la aplicación.
## Ejecución de la aplicación: ```npm start```

Para poder disfrutar de toda la funcionalidad de la aplicación, necesitamos ejecutar **simultáneamente** las tres aplicaciones. Para ello, lo más adecuado es abrir tres consolas de línea de comandos distinas. En cada una de ellas, tendremos que meternos en un directorio correspondiente a una aplicación y posteriormene ejecutar:

```
npm start
```

El resultado debería ser muy similar a este:

**Consola de front-end:**
```
front-end % npm start

> front-end@1.0.0 start
> node server.js

Aplicación Front-End escuchando en puerto 8000!
```

**Consola de api-gateway:**
```
fapi-gateway % npm start

> api-gateway@1.0.0 start
> node server.js

[HPM] Proxy created: /  -> http://localhost:8002
[HPM] Proxy rewrite rule created: "^/plantilla" ~> ""
```

**Consola de ms-plantilla:**
```
ms-plantilla % npm start

> ms-plantilla@1.0.0 start
> node server.js

Microservicio PLANTILLA ejecutándose en puerto 8002!
```

Una vez inicializadas las 3 aplicaciones, debemos poder abrir un navegador web y solicitar que nos muestre la URL: http://localhost:8000 ↗️. Debería en ese momento cargarse la página web mostrando la siguiente imagen.

![Pantalla de inicio de la aplicación en la primera ejecución](./assets/img/front-end-index-con-jasmine.png)

*Pantalla de inicio de la aplicación en la primera ejecución* &#8593;

Para ejecutar la aplicación **SIN COMPROBACIÓN EN EL NAVEGADOR** de TDD, tendríamos que comentar (o eliminar) las siguientes líneas del fichero **index.html**:

**En la parte superior del fichero *index.html***:
```
    <link rel="stylesheet" href="lib/jasmine-4.5.0/jasmine.css">
    <script src="lib/jasmine-4.5.0/jasmine.js"></script>
    <script src="lib/jasmine-4.5.0/jasmine-html.js"></script>
    <script src="lib/jasmine-4.5.0/boot0.js"></script>
    <script src="lib/jasmine-4.5.0/boot1.js"></script>
```

**En la parte inferior del fichero *index.html***:
```
    <script src="js/front-end-spec.js"></script>
    <script src="js/ms-plantilla-spec.js"></script>
```

Hay que tener en cuenta que NO ES un fichero JavaScript, sino que es un fichero HTML; por tanto, para comentar esas líneas hay que usar: ```<!--``` y ```-->```.
## Organización del árbol de directorios de cada app

Las tres apps que forman el sistema completo tienen su código por separado y no comparten nada de dicho código.

No obstante, *ms-plantilla* y *front-end* tienen un conjunto de directorios y de ficheros con nombres idénticos (aunque con contenidos distintos). Solo la app *api-gateway* es un poco distinta, por el hecho de que se limita a redireccionar las llamadas que le llegan enviándolas al microservicio correspondiente.

![Estructura de directorios y ficheros de las aplicaciones](./assets/img/estructura-directorios-ficheros.png)

*Estructura de directorios y ficheros de las aplicaciones* &#8593;


Describimos brevemente los ficheros y directorios que se encuentran en estas apps:
* ```server.js```: fichero en el que se declara el objeto ```app```, el cual hace las veces de servidor web; es decir, recibe llamadas a través del protocolo *http* y devuelve un resultado que puede ser en JSON o como fichero HTML (este formato solo lo devuelve la app *front-end*). Las tres aplicaciones desarrolladas utilizan la biblioteca [Express ↗️](https://expressjs.com/) para [Node.js ↗️](https://nodejs.org/en/).
* ```routes.js```: fichero en el que se declaran las rutas que se van a atender dentro de la llamada *http* que se está realizando. En la aplicación *api-gateway* este fichero cambia su nombre a ```proxy-routes.js```.
* ```callbacks.js```: fichero en el que se encuentran las funciones con las que se va a procesar la llamada a cada una de las rutas definidas en *routes.js*. El fichero ```calbacks.js``` **no existe** en la aplicación *api-gateway* dado que no es necesario que esta aplicación genere ni procese resultados; solamente reenvía lo que recibe hacia y desde el *fron-end* hacia los microservicios.
* ```spec```: directorio en el que se encuentran las pruebas a realizar con el entorno [Jasmine ↗️](https://jasmine.github.io/), para realizar TDD con JavaScript.
* ```package.json```: fichero con la configuración de cada app, necesario para que *npm* pueda ejecutar el proyecto.


Pasemos a ver alguno de estos ficheros con algo más de detalle.

### Fichero ```server.js```

El fichero ```server.js``` es el que permite ejecutar el servidor web en cada aplicación. En realidad, apenas se compone de unas líneas para configurar el servidor ([Express ↗️](https://expressjs.com/)) y dejarlo escuchando en el puerto seleccionado:

```
/**
 * @file server.js
 * @description Define el servidor que aceptará las peticiones para esta aplicación.
 * @author Víctor M. Rivas <vrivas@ujaen.es>
 * @date 03-feb-2023
 */
const express = require("express")
const app = express()

// Necesario para poder obtener los datos en las llamadas POST
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Necesario para gestionar el conjunto de callbacks para las distintas funciones REST
const routes = require("./routes")
app.use("/", routes);




const port = 8002;
app.listen(port, () => {
    console.log(`Microservicio PLANTILLA ejecutándose en puerto ${port}!`);
});


module.exports = app
```
*Ejemplo de fichero ```server.js``` del microservicio Plantilla*

Hay que tener en cuenta que en la aplicación *api-gateway* este fichero NO EXISTE, y en su lugar se define un objeto *proxy* que redirige las llamadas a los distintos microservicios. 

### Fichero ```routes.js```

Como se observa en el fichero ```server.js```, el servidor hace uso del módulo *routes* el cual define las rutas (paths, URLs) a los que nuestro servidor va a responder.

En el caso de la aplicación *api-gateway* este fichero ```routes.js``` no existe, y en su lugar se utiliza un fichero ```proxy-routes.js``` en el que se indican las reglas que debe seguir el *proxy* para redirigir las llamadas que le llegan.

```
/**
 * @file routes.js
 * @description Define las rutas ante las que va a responder al MS Plantilla
 * @author Víctor M. Rivas <vrivas@ujaen.es>
 * @date 03-feb-2023
 */

const express = require("express");
const router = express.Router();
const { callbacks } = require("./callbacks");



/**
 * Ruta raíz: /
 */
router.get("/", async (req, res) => {
    try {
        await callbacks.home(req, res)
    } catch (error) {
        console.log(error);
    }
});

/**
 * Ruta Acerca De (es decir, About...)
 */
router.get("/acercade", async (req, res) => {
    try {
        await callbacks.acercaDe(req, res)
    } catch (error) {
        console.log(error);
    }
});



/**
 * Test de conexión a la BBDD
 */
router.get("/test_db", async (req, res) => {
    try {
        await callbacks.test_db(req, res)
    } catch (error) {
        console.log(error);
    }
});


// Exporto el módulo para poder usarlo en server
module.exports = router;

```
*Ejemplo del fichero ```routes.js``` del microservicio Plantilla*

Como se observa en el ejemplo, este fichero ```routes.js``` define todas las rutas que se van a poder procesar y delega en un método del objeto *callbacks* el conjunto de acciones a realizar. El objeto *callbacks* es por tanto fundamental para que se ejecuta realmente la funcionalidad que el usuario espera.

### Fichero ```callbacks.js```

Finalmente, el fichero ```callbacks.js``` define un objeto importantísimo dado que contiene las constantes y métodos que se van a usar para resolver las llamadas que el usuario está realizando a través de las conexiones que realiza mediante su navegador de páginas web.

Estos métodos son precisamente los encargados de conectar con la base de datos, por lo que son los que permiten recuperar y almacenar datos en la misma.

```
//**
 * @file callbacks.js
 * @description Callbacks para el MS Plantilla.
 * Los callbacks son las funciones que se llaman cada vez que se recibe una petición a través de la API.
 * Las peticiones se reciben en las rutas definidas en routes.js, pero se procesan aquí.
 * @author Víctor M. Rivas <vrivas@ujaen.es>
 * @date 03-feb-2023
 */



// Necesario para conectar a la BBDD faunadb
const faunadb = require('faunadb'),
    q = faunadb.query;

const client = new faunadb.Client({
    secret: '¿¿¿ CLAVE SECRETA EN FAUNA PARA ESTA BBDD???',
});

const COLLECTION = "¿¿¿ COLECCION ???"

// CALLBACKS DEL MODELO

/**
 * Función que permite servir llamadas sin importar el origen:
 * CORS significa Cross-Origin Resource Sharing
 * Dado un objeto de tipo respuesta, le añade las cabeceras necesarias para realizar CROS
 * @param {*} res Objeto de tipo response 
 * @returns Devuelve el mismo objeto para concatenar varias llamadas al mismo
 */
function CORS(res) {
    res.header('Access-Control-Allow-Origin', '*')
        .header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        )
    return res;
}


/**
 * Objeto que contiene las funciones callback para interactuar con el modelo (e.d., la BBDD)
 */
const CB_MODEL_SELECTS = {
    /**
     * Prueba de conexión a la BBDD: devuelve todas las personas que haya en la BBDD.
     * @param {*} req Objeto con los parámetros que se han pasado en la llamada a esta URL 
     * @param {*} res Objeto Response con las respuesta que se va a dar a la petición recibida
     */
    test_db: async (req, res) => {
        try {
            let personas = await client.query(
                q.Map(
                    q.Paginate(q.Documents(q.Collection(COLLECTION))),
                    q.Lambda("X", q.Get(q.Var("X")))
                )
            )
            res.status(200).json(personas)
        } catch (error) {
            res.status(500).json({ error: error.description })
        }
    },

}



// CALLBACKS ADICIONALES

/**
 * Callbacks adicionales. Fundamentalmente para comprobar que el ms funciona.
 */
const CB_OTHERS = {
    /**
     * Devuelve un mensaje indicando que se ha accedido a la home del microservicio
     * @param {*} req Objeto con los parámetros que se han pasado en la llamada a esta URL 
     * @param {*} res Objeto Response con las respuesta que se va a dar a la petición recibida
     */
    home: async (req, res) => {
        try {
            CORS(res).status(200).json({ mensaje: "Microservicio MS Plantilla: home" });
        } catch (error) {
            CORS(res).status(500).json({ error: error.description })
        }
    },

    /**
     * Devuelve un mensaje indicando que se ha accedido a la información Acerca De del microservicio
     * @param {*} req Objeto con los parámetros que se han pasado en la llamada a esta URL 
     * @param {*} res Objeto Response con las respuesta que se va a dar a la petición recibida
     */
    acercaDe: async (req, res) => {
        try {
            CORS(res).status(200).json({
                mensaje: "Microservicio MS Plantilla: acerca de",
                autor: "¿¿¿ AUTOR ???",
                email: "¿¿¿ EMAIL ???",
                fecha: "¿¿¿ FECHA ???"
            });
        } catch (error) {
            CORS(res).status(500).json({ error: error.description })
        }
    },

}

// Une todos los callbacks en un solo objeto para poder exportarlos.
// MUY IMPORTANTE: No debe haber callbacks con el mismo nombre en los distintos objetos, porque si no
//                 el último que haya SOBREESCRIBE a todos los anteriores.
exports.callbacks = { ...CB_MODEL_SELECTS, ...CB_OTHERS }

```

*Ejemplo de fichero ```callbacks.js``` del microservicio Plantilla*

**Es muy importante** notar que todos los métodos definidos en *callbacks* devuelven única y exclusivamente JSON. Los datos así devueltos se envían a la aplicación *front-end* que es la que tiene que procesarlos para mostrarlos al cliente.

### Las palabras reservadas *async* y *await*

Como se puede observar tanto en los *callbacks* como en *routes*, la inmensa mayoría de los métodos están definidos usando las palabras reservadas *async* y *await*:

```
// Dentro del fichero routes.js
// =============================

/**
 * Ruta raíz: /
 */
router.get("/", async (req, res) => {
    try {
        await callbacks.home(req, res)
    } catch (error) {
        console.log(error);
    }
});


----------------------------------------------

// Dentro del fichero callbacks.js
// ===============================

/**
     * Devuelve un mensaje indicando que se ha accedido a la información Acerca De del microservicio
     * @param {*} req Objeto con los parámetros que se han pasado en la llamada a esta URL 
     * @param {*} res Objeto Response con las respuesta que se va a dar a la petición recibida
     */
    acercaDe: async (req, res) => {
        try {
            CORS(res).status(200).json({
                mensaje: "Microservicio MS Plantilla: acerca de",
                autor: "¿¿¿ AUTOR ???",
                email: "¿¿¿ EMAIL ???",
                fecha: "¿¿¿ FECHA ???"
            });
        } catch (error) {
            CORS(res).status(500).json({ error: error.description })
        }
    },

```

Ambas palabras reservadas permiten trabajar mucho más cómodamente con "promesas" ([promise ↗️](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)). Una promesa se define como:
> Una promesa es un objeto que representa la *eventual* resolución (con éxito o no) de una operación asíncrona, así como el valor devuelto por dicha operación.

En esencia, una promesa es una operación que se lanza y que NO detiene la ejecución del programa, pero que se queda "escuchando" hasta que recibe una respuesta. Normalmente se utilizan para solicitar datos a servicios remotos, de modo que la promesa lanza la llamada y, cuando llega el resultado, lo procesa. Mientras tanto, la aplicación sigue recibiendo peticiones y contestando a las mismas.

La utilización de *async* y *await* facilita enormemente la programación con promesas, dando al programador/a la sensación de que su código es secuencial (mucho más fácil de escribir), aunque en realidad está lanzando procesos asíncronos en paralelo.

*Lo más reseñable* del uso de estas dos palabras reservadas es que: **el operador _await_ solo puede usarse dentro de funciones o métodos que hayan sido declarados como _async_**.

Para profundizar más en la programación con promesas pueden usarse los siguientes enlaces:
* [JavaScript Asíncrono](https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous) ↗️
* [async and await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await) ↗️

## Aplicación de ejemplo de la que obtener código
Finalmente, para la implementación de la funcionalidad requerida en la práctica, se puede hacer uso del código disponible en el siguiente repositorio: 

https://github.com/UJA-Desarrollo-Agil/descripcion-proyecto-microservicios-personas-proyectos ↗️

El código en ese repositorio muestra una aplicación similar, pero con mucha más funcionalidad que esta plantilla: acceso a base de datos remota, listado de documentos recuperados de la BBDD, peticiones entre distintos microservicios, etc.

Además, incluye documentación sobre dicho código y un vídeo descriptivo de cómo se ha realizado y cómo funciona la aplicación de ejemplo.