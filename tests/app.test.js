const {fetchData, arrayCarsConstruct} = require('../src/app.js');

const ApiUrl = 'https://api.api-ninjas.com/v1/cars?limit=1&model=camry'

const options = {
  headers: {
      'X-Api-Key': 'DjQPZrkIBps8VzNuQuc+9A==cZm6vLMz0CON9CKb'
  }
}

const arrayModels = ["camry", "a8", "corolla", "a4"]


test('Función que retorna una promesa', async () => {
  expect(typeof fetchData).toBe('function');
  const data = await fetchData(ApiUrl, options, arrayModels[0]);
  expect(data).toStrictEqual([{"city_mpg": 18, "class": "midsize car", "combination_mpg": 21, "cylinders": 4, "displacement": 2.2, "drive": "fwd", "fuel_type": "gas", "highway_mpg": 26, "make": "toyota", "model": "camry", "transmission": "a", "year": 1993}]);
});// expect data Promise object

test('Función que retorna un Array de la clase Car', async () => {
  const data = await fetchData(ApiUrl, options, arrayModels[0]);
  expect(typeof arrayCarsConstruct).toBe('function');
  expect(arrayCarsConstruct(4) instanceof Array).toBe(true);
  expect(arrayCarsConstruct(4)).not.toEqual(data);
})