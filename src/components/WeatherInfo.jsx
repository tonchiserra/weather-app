import { CurrentHightlightsTarget } from "./CurrentHightlightsTarget";

export function WeatherInfo({weather, icon}){

  return(
    <div className="weather-info">
      <div className="current-principal">
        {icon}
        <div className="temperature">{weather.temperature}<p>°C</p></div>             
        <p className="main">{weather.main}</p>
        <p className="description">{weather.description}</p>
        <p className="date">{weather.date}</p>
        <p className="loc-name"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" y="0"/></g><g><path d="M12,2c-4.2,0-8,3.22-8,8.2c0,3.18,2.45,6.92,7.34,11.23c0.38,0.33,0.95,0.33,1.33,0 C17.55,17.12,20,13.38,20,10.2C20,5.22,16.2,2,12,2z M12,12c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2 C14,11.1,13.1,12,12,12z" enable-background="new"/></g></svg>{weather.locName}</p>
      </div>

      <div className="current-hightlights">
        <CurrentHightlightsTarget weather={weather.feelsLike} name={"Feels Like"} unit={"°C"} />
        <CurrentHightlightsTarget weather={weather.wind} name={"Wind"} unit={"m/s"} />
        <CurrentHightlightsTarget weather={weather.humidity} name={"Humidity"} unit={"%"} />
        <CurrentHightlightsTarget weather={weather.airPressure} name={"Air Pressure"} unit={"mb"} />
      </div>
    </div>
  );
}