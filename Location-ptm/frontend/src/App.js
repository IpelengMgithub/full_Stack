import * as React from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
import {Room, Star} from '@material-ui/icons';
import "./app.css";

function App() {
  const [showPopup, setShowPopup] = React.useState(true);

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
      <Marker longitude={31.0459} latitude={29.8673} anchor = "bottom">
      <img src="./pin.png" alt = "pin"/>
      <Room style={{fontSize: Marker.zoom *7 ,color: "red"}}/>
    </Marker>

    {/* {showPopup && (
      <Popup longitude={31.0459} latitude={29.8673}
        anchor="bottom"
        onClose={() => setShowPopup(false)}>
        <div className="card">
        <label>Place</label>
        <h4 className='place'>Somewhere in the world</h4>
        <label>Review</label>
        <p className='desc'>One spot I like going too</p>
        <label>Rating</label>

        <div className='stars'>
        <Star className='stars'/>
        <Star className='stars'/>
        <Star className='stars'/>
        <Star className='stars'/>
        <Star className='stars'/>
        </div>
        
        <label>Information</label>
        <span className='username'>Created by <b>ipeleng</b></span>
        <span className='date'>1 hour ago</span>
        </div> 
      </Popup>)}; */}
    </Map>
    </div>
  );
}
export default App;
