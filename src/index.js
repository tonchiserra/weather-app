import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

(() => {
  const $fetch = document.getElementById("fetch");
  const $fragment = document.createDocumentFragment();

  let location = JSON.parse(localStorage.getItem("currentLocation"));
  console.log(location)
  if(location === null){location = "Rosario"}  //Cambiar esta linea por el gps del usuario.

  let myRequest = new Request(`http://api.openweathermap.org/data/2.5/find?q=${location}&units=metric&appid=1bc031be45fada06ac09b44c3665f8de`);

  fetch(myRequest)
    .then((res) => {
      //console.log(res);
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then(json => {
      //console.log(json);

      const $li = document.createElement("li");
      $li.innerHTML = `${json.list[0].weather[0].main} -- ${json.list[0].weather[0].description} -- ${json.list[0].name} -- ${json.list[0].main.temp} -- ${json.list[0].main.temp_min} -- ${json.list[0].main.temp_max}`;
      $fragment.appendChild($li);

      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      //console.log(err);
      let message = err.message || "Ocurrio un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    });

})();