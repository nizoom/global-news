import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";
//import Container from '@material-ui/core/Container';
//import "../../../node_modules/leaflet/dist/leaflet.css"


class Map extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentPos : [0,0]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.setState({currentPos : e.latlng})
  }



  render(){
  const  markerIcon = new L.icon({
      iconUrl : require ("../../Images/global_news_small.png"),
      iconSize : [35,45]
    })

  return(
    <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false}
      onClick = {this.handleClick}>
      <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    <Marker position={this.state.currentPos} icon = {markerIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
      </Marker>
    </MapContainer>

    )
  }
}
export default Map;
