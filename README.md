# Prueba técnica Case && jenkins

Repo: [https://github.com/madoos/case-technical-test.git](https://github.com/madoos/case-technical-test.git)

----

----
## INSTALAR

##1. git clone https://github.com/madoos/case-technical-test.git

## 2. npm start

*¿Que hace npm start?*


1. Instala dependencias.
2. Transpila el servidor de es6 a es5 en la carpeta dist.
3. Levanta el servidor en el puerto 3005 con PM2
4. Añade registros de prueba a la base de datos remota

## 3. ir a http://localhost:3005/population/all/
----

----

----


## API

## Número de personas por ciudad y edad

1. GET:  /population/all/  
2. GET:  /population/max/
3. GET:  /population/min/
4. GET: /population/average/


----
## Número de personas por ciudad

1. GET:  /population/bycity/all/  `
2. GET:  /population/bycity/max/
3. GET:  /population/bycity/min/
4. GET: /population/bycity/average/


----
## Número de personas por edad

1. GET:  /population/byage/all/  
2. GET:  /population/byage/max/
3. GET:  /population/byage/min/
4. GET: /population/byage/average/


----

##Número de personas según último registro
1. GET: /population/byrecord/last/

----
## Añadir población

1. POST:  /population/add/census/  
``params
{
      date: {type: Date, required: true},
      ts: {type: Autocalculate, required: false},
      city: {type: String, required: true},
      population: [
        {
          age: {type: Number, required: true},
          count: {type: Number, required: true}
        }
      ]
    }
``

----

## Opción  para añadir censos de población falsos

1. GET:  /population/add/fakecensus/  


-
> No es necesario llamar a este endpoint para que se introduzcan datos en la base de datos, esto lo hace la aplicación de forma automática la primera vez.
----
# Contenedor de Docker
> En la raíz del proyecto.

1. docker build -t nombre_del_contenedor .
2. docker run -p puerto:3005 -d nombre_del_contenedor
3. ir al host en el puerto asignado

----
