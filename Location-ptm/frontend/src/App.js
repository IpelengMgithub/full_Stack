import * as React from 'react';
import Map from 'react-map-gl';


function App() {
  // const [viewport, setViewport] = useState({
  //   width: "100vw",
  //   height: "100vh",
  //   longitude: -122.4,
  //   latitude: 37.8,
  //   zoom: 8
  // });
  return (
    <div className="App">
     <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX}
    />
    </div>
  );
}
export default App;
