import * as React from 'react';
import Map, {Marker} from 'react-map-gl';
import {Room} from '@material-ui/icons';


function App() {

  return (
    <div className="App">
    
     <Map

      mapboxAccessToken = {process.env.REACT_APP_MAPBOX}
      initialViewState={{
        longitude: 34.5085,
        latitude: 8.7832,
        zoom: 5
      }}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="mapbox://styles/ipeleng21/cl759rp36001415lp7o28wdpp"
      
    >
      <Marker longitude={31.0459} latitude={29.8673} anchor="bottom" >
      <img src="./pin.png" alt = "pin"/>
      <Room style={{fontSize: Marker.zoom *7 ,color: "red"}}/>
    </Marker>
    </Map>
    </div>
  );
}
export default App;
