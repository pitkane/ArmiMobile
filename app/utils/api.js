import _ from 'lodash'

const rootUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=0b9f062bd15f3971b549d16ac93b8943'

let kelvinToF = function(kelvin) {
  return Math.round((kelvin - 273.15))
}

function fetchData(latitude, longitude) {
  const url = `${rootUrl}&lat=${latitude}&lon=${longitude}`
  console.log(url)
  return fetch(url) // return a promise
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      // console.log(json)
      return {
        city: json.name,
        temperature: kelvinToF(json.main.temp),
        description: _.capitalize(json.weather[0].description)
      }
    })
}

export default { fetchData }
