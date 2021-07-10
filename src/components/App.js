import { useEffect, useRef, useState } from 'react';
import '../styles/App.css';

function App() {

  const [temperature, setTemperature] = useState();
  const [main, setMain] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [locName, setLocName] = useState();
  const [wind, setWind] = useState();
  const [humidity, setHumidity] = useState();
  const [airPressure, setAirPressure] = useState();
  const [flag, setFlag] = useState();
  const [icon, setIcon] = useState();

  const locationRef = useRef();

  const browseWeatherByLocation = (location) => {
    localStorage.setItem("currentLocation", JSON.stringify(location));

    let myRequest = new Request(`http://api.openweathermap.org/data/2.5/find?q=${location}&units=metric&appid=1bc031be45fada06ac09b44c3665f8de`);
    fetch(myRequest)
    .then((res) => {
      //console.log(res)
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      if(json.count <= 0){
        let message = "Oops... We couldn't find that location";
        //console.log(message);
      }else{
        //console.log(json);
        let fecha = new Date();
        setTemperature(Math.trunc(json.list[0].main.temp));
        setMain(json.list[0].weather[0].main);
        setDescription(json.list[0].weather[0].description);
        setDate(fecha.toDateString());
        setLocName(json.list[0].name);
        setWind(json.list[0].wind.speed);
        setHumidity(json.list[0].main.humidity);
        setAirPressure(json.list[0].main.pressure);

        switch(json.list[0].weather[0].icon){
          case '01d':
            setIcon(<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#FBFF37"/></svg>);
            break;
          case '01n':
            setIcon(<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#D1D1D1"/><circle cx="40.5" cy="20.5" r="7.5" fill="#BAB8B8"/><circle cx="25" cy="40" r="10" fill="#BAB8B8"/><circle cx="48" cy="40" r="6" fill="#BAB8B8"/></svg>);
            break;
          case '02d':
            setIcon(<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="70" cy="38" r="30" fill="#FBFF37"/><circle cx="24" cy="68" r="24" fill="white"/><circle cx="80" cy="72" r="20" fill="white"/><circle cx="43" cy="48" r="24" fill="white"/><circle cx="67" cy="51" r="17" fill="white"/><rect x="24" y="65" width="56" height="27" fill="white"/></svg>);
            break;
          case '02n':
            setIcon(<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="70" cy="38" r="30" fill="#D1D1D1"/><circle cx="64.3" cy="20.3" r="4.5" fill="#BAB8B8"/><circle cx="55" cy="32" r="6" fill="#BAB8B8"/><circle cx="68.7999" cy="32" r="3.6" fill="#BAB8B8"/><circle cx="24" cy="68" r="24" fill="white"/><circle cx="80" cy="72" r="20" fill="white"/><circle cx="43" cy="48" r="24" fill="white"/><circle cx="67" cy="51" r="17" fill="white"/><rect x="24" y="65" width="56" height="27" fill="white"/></svg>);
            break;
          case '03d':
          case '03n':
            setIcon(<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="60" r="24" fill="white"/><circle cx="80" cy="64" r="20" fill="white"/><circle cx="43" cy="40" r="24" fill="white"/><circle cx="67" cy="43" r="17" fill="white"/><rect x="24" y="57" width="56" height="27" fill="white"/></svg>);
            break;
          case '04d':
          case '04n':
            setIcon(<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="37.6157" cy="51.9622" r="19.6157" fill="#919191"/><circle cx="83.3858" cy="55.2315" r="16.3465" fill="#919191"/><circle cx="53.1449" cy="35.6157" r="19.6157" fill="#919191"/><circle cx="72.7606" cy="38.0677" r="13.8945" fill="#919191"/><rect x="37.6157" y="49.5102" width="45.7701" height="22.0677" fill="#919191"/><circle cx="19.6157" cy="62.9622" r="19.6157" fill="white"/><circle cx="65.3858" cy="66.2315" r="16.3465" fill="white"/><circle cx="35.1449" cy="46.6157" r="19.6157" fill="white"/><circle cx="54.7606" cy="49.0677" r="13.8945" fill="white"/><rect x="19.6157" y="60.5102" width="45.7701" height="22.0677" fill="white"/></svg>);
            break;
          case '09d':
          case '09n':
            setIcon(<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="37.6157" cy="38.9622" r="19.6157" fill="#919191"/><circle cx="83.3858" cy="42.2315" r="16.3465" fill="#919191"/><circle cx="53.1449" cy="22.6157" r="19.6157" fill="#919191"/><circle cx="72.7606" cy="25.0677" r="13.8945" fill="#919191"/><rect x="37.6158" y="36.5102" width="45.7701" height="22.0677" fill="#919191"/><circle cx="19.6157" cy="50.5843" r="19.6157" fill="white"/><circle cx="65.3858" cy="53.8536" r="16.3465" fill="white"/><circle cx="35.1449" cy="34.2378" r="19.6157" fill="white"/><circle cx="54.7606" cy="36.6898" r="13.8945" fill="white"/><rect x="19.6158" y="48.1323" width="45.7701" height="22.0677" fill="white"/><circle cx="20.5" cy="90.96" r="6.5" fill="white"/><path d="M26.48 88.36H14.52L20.5 79L26.48 88.36Z" fill="white"/><circle cx="64.5" cy="84.96" r="6.5" fill="white"/><path d="M70.48 82.36H58.52L64.5 73L70.48 82.36Z" fill="white"/><circle cx="39" cy="80.36" r="4" fill="white"/><path d="M42.68 78.76H35.32L39 73L42.68 78.76Z" fill="white"/><circle cx="87" cy="72.36" r="4" fill="white"/><path d="M90.68 70.76H83.32L87 65L90.68 70.76Z" fill="white"/></svg>);
            break;
          case '10d':
            setIcon(<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="69" cy="28" r="28" fill="#FBFF37"/><circle cx="25.56" cy="56.44" r="22.56" fill="white"/><circle cx="78.2" cy="60.2" r="18.8" fill="white"/><circle cx="43.42" cy="37.64" r="22.56" fill="white"/><circle cx="65.98" cy="40.46" r="15.98" fill="white"/><rect x="25.56" y="53.62" width="52.64" height="25.38" fill="white"/><circle cx="54" cy="88.36" r="4" fill="white"/><path d="M57.68 86.76H50.32L54 81L57.68 86.76Z" fill="white"/><circle cx="25" cy="93.36" r="4" fill="white"/><path d="M28.68 91.76H21.32L25 86L28.68 91.76Z" fill="white"/><circle cx="78" cy="95.36" r="4" fill="white"/><path d="M81.68 93.76H74.32L78 88L81.68 93.76Z" fill="white"/></svg>);
            break;
          case '10n':
            setIcon(<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="69" cy="28" r="28" fill="#D1D1D1"/><circle cx="63.6801" cy="11.48" r="4.2" fill="#BAB8B8"/><circle cx="55" cy="22.4" r="5.6" fill="#BAB8B8"/><circle cx="67.8799" cy="22.4" r="3.36" fill="#BAB8B8"/><circle cx="25.56" cy="56.44" r="22.56" fill="white"/><circle cx="78.2" cy="60.2" r="18.8" fill="white"/><circle cx="43.42" cy="37.64" r="22.56" fill="white"/><circle cx="65.98" cy="40.46" r="15.98" fill="white"/><rect x="25.5601" y="53.62" width="52.64" height="25.38" fill="white"/><circle cx="54" cy="88.36" r="4" fill="white"/><path d="M57.6799 86.76H50.3199L53.9999 81L57.6799 86.76Z" fill="white"/><circle cx="25" cy="93.36" r="4" fill="white"/><path d="M28.6799 91.76H21.3199L24.9999 86L28.6799 91.76Z" fill="white"/><circle cx="78" cy="95.36" r="4" fill="white"/><path d="M81.6799 93.76H74.3199L77.9999 88L81.6799 93.76Z" fill="white"/></svg>);
            break;
          case '11d':
          case '11n':
            setIcon(<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="37.6157" cy="37.9622" r="19.6157" fill="#919191"/><circle cx="83.3858" cy="41.2315" r="16.3465" fill="#919191"/><circle cx="53.1449" cy="21.6157" r="19.6157" fill="#919191"/><circle cx="72.7606" cy="24.0677" r="13.8945" fill="#919191"/><rect x="37.6158" y="35.5102" width="45.7701" height="22.0677" fill="#919191"/><circle cx="19.6157" cy="49.5843" r="19.6157" fill="white"/><circle cx="65.3858" cy="52.8536" r="16.3465" fill="white"/><circle cx="35.1449" cy="33.2378" r="19.6157" fill="white"/><circle cx="54.7606" cy="35.6898" r="13.8945" fill="white"/><rect x="19.6158" y="47.1323" width="45.7701" height="22.0677" fill="white"/><path d="M28 78.8387L34.9767 62H45.4419L38.4651 71.871H53L30.3256 98L38.4651 78.8387H28Z" fill="#FBFF37"/><circle cx="15.5" cy="87.96" r="6.5" fill="white"/><path d="M21.48 85.36H9.51999L15.5 76L21.48 85.36Z" fill="white"/><circle cx="63.5" cy="83.96" r="6.5" fill="white"/><path d="M69.48 81.36H57.52L63.5 72L69.48 81.36Z" fill="white"/><circle cx="87" cy="72.36" r="4" fill="white"/><path d="M90.68 70.76H83.32L87 65L90.68 70.76Z" fill="white"/></svg>);
            break;
          case '13d':
          case '13n':
            setIcon(<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M67.0001 51C67.0001 60.3888 59.3889 68 50.0001 68C40.6112 68 33.0001 60.3888 33.0001 51C33.0001 41.6112 40.6112 34 50.0001 34C59.3889 34 67.0001 41.6112 67.0001 51ZM41.7092 51C41.7092 55.5789 45.4211 59.2909 50.0001 59.2909C54.579 59.2909 58.291 55.5789 58.291 51C58.291 46.4211 54.579 42.7091 50.0001 42.7091C45.4211 42.7091 41.7092 46.4211 41.7092 51Z" fill="white"/><rect x="45.6066" y="4" width="8" height="34" rx="4" fill="white"/><rect x="62.5563" y="4.3934" width="8" height="22" rx="4" transform="rotate(45 62.5563 4.3934)" fill="white"/><rect x="31" y="10.0503" width="8" height="22" rx="4" transform="rotate(-45 31 10.0503)" fill="white"/><rect x="53.6066" y="96" width="8" height="34" rx="4" transform="rotate(-180 53.6066 96)" fill="white"/><rect x="36.6569" y="95.6066" width="8" height="22" rx="4" transform="rotate(-135 36.6569 95.6066)" fill="white"/><rect x="68.2131" y="89.9497" width="8" height="22" rx="4" transform="rotate(135 68.2131 89.9497)" fill="white"/><rect x="85.2291" y="21.965" width="8" height="34" rx="4" transform="rotate(55 85.2291 21.965)" fill="white"/><rect x="94.6288" y="36.075" width="8" height="22" rx="4" transform="rotate(100 94.6288 36.075)" fill="white"/><rect x="71.8951" y="13.4703" width="8" height="22" rx="4" transform="rotate(10 71.8951 13.4703)" fill="white"/><rect x="45.6066" y="4" width="8" height="34" rx="4" fill="white"/><rect x="62.5563" y="4.3934" width="8" height="22" rx="4" transform="rotate(45 62.5563 4.3934)" fill="white"/><rect x="31" y="10.0503" width="8" height="22" rx="4" transform="rotate(-45 31 10.0503)" fill="white"/><rect x="45.6066" y="4" width="8" height="34" rx="4" fill="white"/><rect x="62.5563" y="4.3934" width="8" height="22" rx="4" transform="rotate(45 62.5563 4.3934)" fill="white"/><rect x="31" y="10.0503" width="8" height="22" rx="4" transform="rotate(-45 31 10.0503)" fill="white"/><rect x="13.9667" y="78.0198" width="8" height="34" rx="4" transform="rotate(-125 13.9667 78.0198)" fill="white"/><rect x="4.56683" y="63.9098" width="8" height="22" rx="4" transform="rotate(-80 4.56683 63.9098)" fill="white"/><rect x="27.3006" y="86.5145" width="8" height="22" rx="4" transform="rotate(-170 27.3006 86.5145)" fill="white"/><rect x="89.8179" y="71.4666" width="8" height="34" rx="4" transform="rotate(125 89.8179 71.4666)" fill="white"/><rect x="79.7736" y="85.1253" width="8" height="22" rx="4" transform="rotate(170 79.7736 85.1253)" fill="white"/><rect x="93.2397" y="56.0313" width="8" height="22" rx="4" transform="rotate(80 93.2397 56.0313)" fill="white"/><rect x="9.37793" y="30.5182" width="8" height="34" rx="4" transform="rotate(-55 9.37793 30.5182)" fill="white"/><rect x="19.4222" y="16.8595" width="8" height="22" rx="4" transform="rotate(-10 19.4222 16.8595)" fill="white"/><rect x="5.95599" y="45.9535" width="8" height="22" rx="4" transform="rotate(-100 5.95599 45.9535)" fill="white"/></svg>);
            break;
          case '50d':
          case '50n':
            setIcon(<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="44" r="24" fill="white"/><circle cx="80" cy="48" r="20" fill="white"/><circle cx="43.0001" cy="24" r="24" fill="white"/><circle cx="67" cy="27" r="17" fill="white"/><rect x="24" y="41" width="56" height="27" fill="white"/><rect y="73" width="42" height="5" rx="2.5" fill="white"/><rect x="45" y="73" width="14" height="5" rx="2.5" fill="white"/><rect x="62" y="73" width="31" height="5" rx="2.5" fill="white"/><rect y="83" width="19" height="5" rx="2.5" fill="white" fill-opacity="0.5"/><rect x="13" y="93" width="49" height="5" rx="2.5" fill="white" fill-opacity="0.3"/><rect x="65" y="93" width="35" height="5" rx="2.5" fill="white" fill-opacity="0.3"/><rect x="22" y="83" width="19" height="5" rx="2.5" fill="white" fill-opacity="0.5"/><rect x="44" y="83" width="38" height="5" rx="2.5" fill="white" fill-opacity="0.5"/><rect x="85" y="83" width="15" height="5" rx="2.5" fill="white" fill-opacity="0.5"/></svg>);
            break;
          default:
            setIcon("Imagen no disponible");
        }
      }
    })
    .catch((err) => {
      let message = "Oops... We couldn't find that location";
      //console.log(message);
      //console.log(err);
    })
  }

  useEffect(() => {
    let storedLocation = JSON.parse(localStorage.getItem("currentLocation")); 
    if(storedLocation === null){
      //console.log("no hay nada kpo");
      setFlag(false)
    }else{
      browseWeatherByLocation(storedLocation);
      setFlag(true);
    }
  }, [])

  const ChangeCurrentWeather = () => {
    const location = locationRef.current.value;
    if(location === '') return;

    locationRef.current.value = null;

    browseWeatherByLocation(location)
  }

  return(
    <div className="App">
      <nav className="nav-main">
        <button className="btn-change-location">Change location</button>
      </nav>

      <div className="change-location-window">
        <input className="input-text" type="text" name="location" ref={locationRef} />
        <input className="btn-search" type="submit" value="Browse" onClick={ChangeCurrentWeather} />
      </div>

      <section className="weather-info">
        {flag
          ? <div>
              <p className="loc-name">{locName}</p>
              <h2 className="temperature">{temperature}</h2>
              <h2 className="main">{main}</h2>
              <h2 className="description">{description}</h2>
              <h2 className="date">{date}</h2>
              <h2 className="wind">{wind}</h2>
              <h2 className="humidity">{humidity}</h2>
              <h2 className="air-pressure">{airPressure}</h2>
              {icon}
            </div>
          : <h2 className="message">Select a location</h2>
        }
      </section>
    </div>
  );
}

export default App;
