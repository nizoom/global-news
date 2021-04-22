import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

import markerPic from "../../Images/global_news_small.png"
import  getPlaceName from "./getplacename"
import getNews from "./getNews"

const AddMarker = ( props ) => {
  // A component that creates a marker on leaflet map and conveys coordinates to
  //getPlaceName that will reverse geolocate that data and return a human readable address

  const [position, setPosition] = useState(null) // hook assists with setting marker position on
  // map


  useMapEvents({ // a hook from leaflet library
    click : (e) => {
      //console.log("Map clicked");
      setPosition(e.latlng)



      getPlaceName(e.latlng, props.userFilter, props.localityStatus)
      .then(response => {
        //declaring variables at top level of function to be updated further down
        let articles = [];
        let country = ""
        let nonNationalName = ""
        //console.log(response);
        //console.log(response[0])

        if(response.length === 0){ // If no results from google api
          //console.log("NO RESULTS FROM GOOGLE API")
          props.dataToMap(null)

        } else {
          //normal process flow


        let allLocalPlaceNames = [] // the getNews function will iterate through this list
        //once it is filled and perform a news search based on each element

        // Get address components from google maps API results
        // the name is based on google maps nested address categories/objects
        let addressComponents = response[0].address_components

        //console.log(addressComponents);

        // Filter google maps results based on entries containing Country
        let countryResults = addressComponents.filter(component => component.types.includes("country"))

        // Filter google maps results based on entries containing locality

        let localAreaResults = addressComponents.filter(component => component.types.includes("locality"))


        //console.log(localAreaResults.long_name);
        //this for each does the same as above but had to be adaptive because there could be
        //more than one administrative_area_ and the above function returned only one name
        //this for each pushes all names to the allLocalPlaceNames array
        let adminAreaResults = addressComponents.forEach(function(obj){
          let types = Object.values(obj.types).toString()
          if(types.includes("administrative_area_level")){
            //take long name
            //console.log(obj.long_name);
            allLocalPlaceNames.push(obj.long_name)
          }
        })

        //this function makes sure that placeName is valid, isolated from objec, and pushed to
        //allLocalPlaceNames array
        function checkForValidPlaceName(areaType){
          if(areaType.length > 0){
            let placeName = areaType[0].long_name
            allLocalPlaceNames.push(placeName)
          }
        }

        checkForValidPlaceName(localAreaResults)
        //checkForValidPlaceName(countryResults)




        //Next Steps: Merge longnames from locality and admin areas so that getNews is called with country
        // and more specific name



        //console.log(allLocalPlaceNames);
        //console.log("------------");


        //in case the click is not recognized to be within country
        // such as a body of water
          if(countryResults.length === 0){
            nonNationalName = addressComponents[0].long_name
          } else {
            country = countryResults[0].long_name;
          }

          (async function() {

            //console.log(country);
            //console.log(nonNationalName);

            const countryOrNonNationalName = await (country === "") ? nonNationalName : country
            if (nonNationalName.length > 0){
              allLocalPlaceNames.push("") // adds empty str to the for loop
              //to make sure there is no search criteria besides
              //countryOrNonNationalName
              //this blank str replaces locality name further down if there is no locality name
            }
            //console.log(countryOrNonNationalName);
            //console.log(allLocalPlaceNames);

            //Looping through placeNames to get articles from getNews function
            for(let x = 0; x < allLocalPlaceNames.length; x++ ){
              //console.log("This is x at top of loop " + x);
              let localityName = allLocalPlaceNames[x];
              //console.log(`${localityName} ` + x);

              // if country is blank then a body of water may have been clicked
              // in which case search for the nonNationalName

              //setTimeOUt to throttle API calls when iterating to next place name if no news


              await new Promise(resolve => setTimeout(resolve, 200));


              await getNews(localityName, countryOrNonNationalName, props.userFilter, props.localityStatus)
              .then(response => {
                //console.log(localityName, countryOrNonNationalName, props.userFilter, props.localityStatus);

                //console.log(response);
                if(response[0].length > 0){ // if news found
                  //console.log(response[1]);
                  let successfulPlaceName = response[1]
                  articles.push(response[0])
                  x+=500 // stops loop at next iteration
                  //console.log("Completed");
                  //console.log(articles);
                  if(nonNationalName.length > 0){ // passing data for body of water
                    // or nonnational click. Here country represents
                    props.dataToMap([articles, countryOrNonNationalName, props.userFilter])
                  } else {
                    //typical conutry click
                    if(props.localityStatus){ //checking if locality box is checked off
                      props.dataToMap([articles, successfulPlaceName, country, props.userFilter])

                    } else { // not checked exclude locality
                      props.dataToMap([articles, country, props.userFilter])

                    }
                  }
                }

              })



            } //if no news is found
            if(articles.length === 0){
              //console.log("No news");
              props.dataToMap(null)
            }
          }());
        }
      });
    }
  })


  return position === null ? null : ( <Marker position = {position}
    icon = {props.symbol}>


     </Marker>)
}

const Map = ( props ) => {


//Leaflet marker code
  const markerIcon = new L.icon({
      iconUrl : markerPic,
      iconSize : [40,45],
    })

//Brings data from marker level to map level and ultimately to app.js / root level
  const bringDataToTop = ( data ) => {
    //console.log("The data is in the Map");
    //console.log(data);
    props.dataBackToTop( data )
  }


  return(
    <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false}>

      <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <AddMarker symbol = {markerIcon} userFilter = {props.topicFilter}
        localityStatus = {props.localityStatus} dataToMap = {bringDataToTop}>

        </AddMarker>

    </MapContainer>
    )
  }

export default Map;
