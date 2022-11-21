import { ICar } from "./interfaces/ICar";

const fetch = require('node-fetch');




const arrayModels: string[] = ["camry", "a8", "corolla", "a4"]

interface Options {
    headers: Headers
}

interface Headers {
    'X-Api-Key': string
}

// https://api-ninjas.com/api/cars
// https://api.api-ninjas.com/v1/cars?limit=1&model=???????? Falta model, consultar docu
// Key DjQPZrkIBps8VzNuQuc+9A==cZm6vLMz0CON9CKb

// npm install & npm test

//"plate": string, //Validar los campos de matricula (formato: 1234ABC) e intriducirlos en la clase Car como nuevo parámetro en la segunda función, libre elección de crear otra función extra en este proceso
class Car implements ICar {
    
}

const arrayCars: Car[] = []

// En la primera función debes realizar las peticiones a la API de coches, docu más arriba
async function fetchData(url: string, options: Options, arrayModels:string[] ): Promise<ICar>  {
  // Recibes por parámetros los parámetros habituales de una API y un array de modelos, devulves un objeto con tipado ICar
    const soyElResultadoDeUnaPromesa: ICar = {"city_mpg": 18, "class": "midsize car", "combination_mpg": 21, "cylinders": 4, "displacement": 2.2, "drive": "fwd", "fuel_type": "gas", "highway_mpg": 26, "make": "toyota", "model": "camry", "transmission": "a", "year": 1993}
    return soyElResultadoDeUnaPromesa // Borrar
}
//Creas instancias de la Clase Car, añadiendo objetos tipados ICar, añadiendo el parámetro mencionado arriba con su validación
async function arrayCarsConstruct(stepsInArray: number): Promise<Car[]> {
    fetchData()
//Guardas en arrayCar los coches instanciados, sean los que sean
    return arrayCars
}


module.exports = {fetchData, arrayCarsConstruct};