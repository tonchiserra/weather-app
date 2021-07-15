export function CurrentHightlightsTarget({weather, name, unit}){
  return(
    <div className="current-hightlights-target">
      <h3>{name}</h3>
      <div className="wind">{weather}<p>{unit}</p></div>
    </div>
  );
}