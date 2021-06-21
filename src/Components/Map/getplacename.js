
export default async function getPlaceName(latlng, userFilter, localityFeatureStatus){ //waitToReturn

  const LAT = latlng.lat
  const LNG = latlng.lng
 


  let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${LAT},${LNG}&key=${process.env.REACT_APP_G_KEY}`



  const response = await fetch(url)
  .then(response => response.json())
  .then(data => {
 
    
  
    return data.results

  })

    return response;
    
}
