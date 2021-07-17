export function ItemHistory({loc, browseWeatherByHistory}) {
  const {id, location} = loc

  const itemClick = () => {
    browseWeatherByHistory(id);
  }

  return(
    <button className="item-history" onClick={itemClick} >{location}</button>
  );
}