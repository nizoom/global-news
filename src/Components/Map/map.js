import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from "leaflet";
import markerPic from "../../Images/global_news_small.png"
//import Container from '@material-ui/core/Container';
//import "../../../node_modules/leaflet/dist/leaflet.css"

import NewsPopup from ".././NewsDisplay/newspopup"
import  getPlaceName from "./getplacename"


const AddMarker = ( props ) => {

  const [position, setPosition] = useState(null)

  const [articles, setArticles] = useState("")

  const [metaData, setMetaData] = useState([])


  useMapEvents({
    click : (e) => {
      setPosition(e.latlng)
      //const placeName =  getPlaceName(e.latlng, props.userFilter)
      getPlaceName(e.latlng, props.userFilter)
        .then(response => {
            const [allArticles, localityName, country, topic] = response;
            console.log(allArticles);
            setArticles(allArticles)
            topic ? setMetaData(`${localityName}, ${country} and ${topic}`) :
            setMetaData(`${localityName}, ${country}`)

            //Index of returned array where the articles sit
          });
        }
      })


  return position === null ? null : ( <Marker position = {position}
    icon = {props.symbol}>
    <Popup>
      <NewsPopup  dataForDisplay = {articles} metaData = {metaData}/>
    </Popup>
     </Marker>)
}

const Map = ( props ) => {



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
        <AddMarker symbol = {markerIcon} userFilter = {props.topicFilter}>

        </AddMarker>
    </MapContainer>
    )
  }

export default Map;

/*
constructor(props){
  super(props)
  console.log(props.topicFilter);
  this.state = {
    markers: [[19.4100819, -99.1630388]],
    userFilter : props.topicFilter,
  }
}  */
