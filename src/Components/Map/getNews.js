
export default async function getNews (localityName, country, topic, localityFeatureStatus) {

// the search query takes in the above criteria in the arguement. Locality feature status is whether or not the user has toggled the national news only checkbox.

let response = fetch(`${process.env.REACT_APP_EP_STARTER}?q=${localityName} ${country} ${topic}`, {
  headers: {
    "Ocp-Apim-Subscription-Key": process.env.REACT_APP_UNSPLASH_KEY
  }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
  

        //returns the articles object that is returned from bing
        return [ data.value, localityName ]
    })

    return response;

 }
