

export default async function getNews ( localityName, country, topic ) {
  //console.log(`${topic} ${localityName} ${country} `);

  let allArticles = []

  class ArticleInfo {
    constructor(title, source, link){
      this.title = title
      this.source = source
      this.link = link
      }
    }



  //const apiKey = "88ca3643d7a24654899d3689ebfedcd8"
  //work on generating FROM based on present date
  //toggle off/on local  new
  //max number of articles shown

  //let qStr = `(${localityName}AND${country}AND${topic})`
  let  url = `https://newsapi.org/v2/everything?q=${topic} ${localityName} ${country} &from=2021-00-00&sortBy=relevency&apiKey=88ca3643d7a24654899d3689ebfedcd8`;


  let req = new Request(url);



  let response = await fetch(req)
      .then(response => response.json())
      .then(data => {
        let parts = data.articles;
        parts.forEach( part => {
          //console.log(`${part.title}, ${part.url}, ${part.source}` );
          let newArticleInstance = new ArticleInfo(part.title, part.source, part.url)
          allArticles.push(newArticleInstance)
        })
      })
      .then(result => {
        return allArticles
      })
      .catch(err => console.warn(err))



  return await [allArticles, localityName, country, topic];

}
