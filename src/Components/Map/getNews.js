

export default async function getNews ( localityName, country, topic ){
  console.log(country);
  const apiKey = "88ca3643d7a24654899d3689ebfedcd8"
  let  url = `https://newsapi.org/v2/everything?
  q=${country}&
  from=2021-03-17&
  sortBy=popularity&
  apiKey=${apiKey}`;


  let req = new Request(url);

  /*
  fetch(req)
      .then(function(response) {
          console.log(response.json());
      })
      .catch(err => console.warn(err))  */



}
