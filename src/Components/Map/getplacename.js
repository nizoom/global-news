
export default async function getPlaceName(latlng, userFilter, localityFeatureStatus){ //waitToReturn

  const LAT = latlng.lat
  const LNG = latlng.lng
  //const apiKey = "AIzaSyDgwqGtBnrgdxp38lz0ad8NLg3nN_-3LbU"// your google apikey


  let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${LAT},${LNG}&key=${process.env.REACT_APP_G_KEY}`



  const response = await fetch(url)
  .then(response => response.json())
  .then(data => {
    //console.log("callback from fetch");
    // TODO: Implement scope slider to let user decide which to select
    if(data.results.length === 0){
      //console.log("NO RESULTS FROM GOOGLE API")
    }
    return data.results

  })

    return response;
    //console.log(localityName, countryName, userFilter);
}
