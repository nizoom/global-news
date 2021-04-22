
export default async function getNews (localityName, country, topic, localityFeatureStatus) {

  //console.log(localityName)
  //console.log(country);
  //console.log(topic);



let response = fetch(`${process.env.REACT_APP_EP_STARTER}?q=${localityName} ${country} ${topic}`, {
  headers: {
    "Ocp-Apim-Subscription-Key": process.env.REACT_APP_UNSPLASH_KEY
  }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        //console.log(data);
        //console.log(data.value);

        //console.log("results from news API");

        //returns the articles object that is returned from bing
        return [ data.value, localityName ]
    })

    return response;

 }
