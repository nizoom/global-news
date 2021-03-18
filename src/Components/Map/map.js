import React, { Component, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from "leaflet";
import markerPic from "../../Images/global_news_small.png"
//import Container from '@material-ui/core/Container';
//import "../../../node_modules/leaflet/dist/leaflet.css"

import NewsPull from ".././NewsPull/newspull"
import  getPlaceName from "./coordinate"


const AddMarker = ( props ) => {

  const [position, setPosition] = useState(null)

  useMapEvents({
    click : (e) => {
      setPosition(e.latlng)
      const placeName =  getPlaceName(e.latlng)
      


    }
  })

  return position === null ? null : ( <Marker position = {position}
    icon = {props.symbol}>
    <Popup>
      <NewsPull />
    </Popup>
     </Marker>)
}

class Map extends Component{
  constructor(props){
    super(props)
    this.state = {
      markers: [[19.4100819, -99.1630388]]
    }
  }

  /*
  addMarker = (e) => {
      console.log("fired");
      const {markers} = this.state;
      markers.push(e.latlng)
      this.setState({markers})
    }  */



  render(){
  const  markerIcon = new L.icon({
      iconUrl : markerPic,
      iconSize : [40,45],
    })






  return(
    <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false}>

      <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <AddMarker symbol = {markerIcon} >

        </AddMarker>
    </MapContainer>
    )
  }
}
export default Map;
