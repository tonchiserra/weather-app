import '../styles/PrincipalWindow.css';
import ChangeLocation from './ChangeLocation';

function PrincipalWindow() {
  
  const showChangeLocation = () => {
    const $changeLocation = document.querySelector("#clw");
    $changeLocation.classList.toggle("is-active");
  }

  return (
    <section className="principal-window">
      <div className="principal-content">

        <header className="principal-header">
          <button className="location-btn" title="Change location" onClick={showChangeLocation}>Change location</button>
          <button className="gps-btn" title="My location">GPS</button>
        </header>

        <section id="fetch" className="current-weather-content">

        </section>

      </div>   
      <ChangeLocation />
    </section>
  );
}

export default PrincipalWindow;
