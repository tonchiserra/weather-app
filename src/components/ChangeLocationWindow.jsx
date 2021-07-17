import { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ItemHistory } from "./ItemHistory.jsx";

export function ChangeLocationWindow({locHistory, browseWeatherByLocation, showCLWindow, setLocHistory}){

  const locationRef = useRef();

  const BrowseCurrentWeather = () => {
    const location = locationRef.current.value;
    if(location === '') return;

    locationRef.current.value = null;

    browseWeatherByLocation(location);
    showCLWindow();

    const newLocHistory = {
      location: location,
      id: uuidv4()
    }

    let history = JSON.parse(localStorage.getItem("locHistory"));
    if(history === null){
      history = [newLocHistory];
    }else{
      if(history.length === 7){
        history.shift();
      }
      history.push(newLocHistory);
    }
    localStorage.setItem("locHistory", JSON.stringify(history));
    setLocHistory(history);
  }

  const browseWeatherByHistory = (id) => {
    const historyStored = JSON.parse(localStorage.getItem("locHistory"));
    const currentLocHistory = historyStored.find((currentLocHistory) => currentLocHistory.id === id);

    browseWeatherByLocation(currentLocHistory.location);
    showCLWindow();
  }

  return(
    <div className="change-location-window">
      <div className="second-nav">
        <input className="input-text" type="text" name="location" placeholder="Enter location" ref={locationRef} />
        <input className="btn-search" type="submit" value="Browse" onClick={BrowseCurrentWeather} />
        <button className="btn-close" onClick={showCLWindow}>X</button>
      </div>
      <div className="location-history">
        {locHistory.map((loc) => (<ItemHistory key={loc.id} loc={loc} browseWeatherByHistory={browseWeatherByHistory} />))}
      </div>
    </div>
  );
}