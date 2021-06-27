import { useRef } from 'react';
import '../styles/ChangeLocation.css';

function ChangeLocation() {
  const locationRef = useRef();

  const closeCLW = () => {
    const $changeLocation = document.querySelector("#clw");
    $changeLocation.classList.toggle("is-active");
  }

  const showWeatherXLocation = (location) => {
    const $fetch = document.getElementById("fetch");
    const $fragment = document.createDocumentFragment();
  
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
        let message = "Ups... ocurrio un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
      });
  }

  const browseLocation = () => {
    const location = locationRef.current.value;
    if (location === '') return;


    locationRef.current.value = null;

    showWeatherXLocation(location);
    localStorage.setItem("currentLocation", JSON.stringify(location));
    closeCLW();
  }
  
  return(
    <section id="clw" className="change-location-window">
      <button className="close-clw" onClick={closeCLW}>X</button>

      <div>
        <input type="text" name="location" ref={locationRef} />
        <input type="submit" value="Browse" onClick={browseLocation} />
      </div>
    </section>
  );
}

export default ChangeLocation;