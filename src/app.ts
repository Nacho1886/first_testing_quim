const fetch = require('node-fetch');


interface ICars { // Interfaz para la clase
    "cylinders": number,
    "fuel_type": string,
    "plate": string, //Validar los campos de matricula (formato: 1234ABC)
    "make": string,
    "model": string,
    "year": number,

}

// https://api-ninjas.com/api/cars
// https://api.api-ninjas.com/v1/cars?limit=2&model=???????? Falta model, consultar docu
// Key DjQPZrkIBps8VzNuQuc+9A==cZm6vLMz0CON9CKb


// npm install & npm test







module.exports = {fetchData, arrayCarsConstruct};