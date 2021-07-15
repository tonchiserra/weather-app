import { useRef } from "react";

export function ChangeLocationWindow({locHistory, browseWeatherByLocation, showCLWindow, setLocHistory}){

  const locationRef = useRef();

  const BrowseCurrentWeather = () => {
    const location = locationRef.current.value;
    if(location === '') return;

    locationRef.current.value = null;

    browseWeatherByLocation(location);
    showCLWindow();

    let history = JSON.parse(localStorage.getItem("locHistory"));
    if(history === null){
      history = [location]
    }else{
      history.push(location)
    }
    localStorage.setItem("locHistory", JSON.stringify(history));
    setLocHistory(history);
  }

  return(
    <div className="change-location-window">
      <div className="second-nav">
        <input className="input-text" type="text" name="location" placeholder="Enter location" ref={locationRef} />
        <input className="btn-search" type="submit" value="Browse" onClick={BrowseCurrentWeather} />
        <button className="btn-close" onClick={showCLWindow}>X</button>
      </div>
      <div className="location-history">
        {locHistory.map((loc) => (<button className="item-history">{loc}</button>))}
      </div>
    </div>
  );
}