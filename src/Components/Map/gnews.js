//A function that returns what keywords to add the fetch
function createURL (topic, localityFeatureStatus){
  console.log("fireddd ho");
  console.log(topic);
  let urlStart = "https://gnews.io/api/v4/search?q="
  let urlEnd = "&sortby:relevance&lang=en&token=cdc1d1bfab00db5b2ace84407bc04e60"
  let urlMiddle = ""

  if(localityFeatureStatus){    //true?
    //add localityName and country to url
    const locality = localityName.includes("'") ? localityName.replace("'", "") : localityName;
    //deal with periods as well
    urlMiddle = `${locality} ${country}`
  } else { //
    //just add country
    urlMiddle = `${country}`
  }
  if(topic!== ""){
    //add topic to url
    urlMiddle += ` ${topic}`
  }
   let urlFinal = urlStart + urlMiddle + urlEnd
   console.log(urlFinal);
   return urlFinal
}
