import getNews from "./getNews"
export default async function getPlaceName( latlng ){
  const LAT = latlng.lat
  const LNG = latlng.lng
  let localityName = ""
  let countryName = "";


  const apiKey = "AIzaSyDgwqGtBnrgdxp38lz0ad8NLg3nN_-3LbU"// your google apikey

  let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${LAT},${LNG}&key=${apiKey}`
  let successfulFetch = false;
  await fetch(url)
    .then(response => response.json() )
    .then(data => {
      let parts = data.results[0].address_components
      parts.forEach( part => {
        //LOCAL NAME
        if(part.types.includes("locality") && !successfulFetch ){
          if(part.long_name !== "Unnamed Road" && typeof(part.long_name)!= "number" ){
            successfulFetch = true;
            //console.log(part.long_name);
            localityName = part.long_name

          }
        } if("administrative_area_level_1" && !successfulFetch){
            if(part.long_name !== "Unnamed Road" && typeof(part.long_name)!= "number" ){
            //console.log(part.long_name);
            successfulFetch = true;
            localityName = part.long_name;
          }
        } if (part.types.includes("country")){
          //console.log(part.long_name);
          countryName = part.long_name;
        }
        })
      })
      .then(result => {
         let placeName = [localityName, countryName]
         return placeName
      })
    .catch(err => console.warn(err.message));

    getNews(localityName, countryName, )
    console.log(localityName, countryName);
}
