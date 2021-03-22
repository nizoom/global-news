import React from "react";
import ArticleList from "./articlelist"


const NewsPopup = ( props ) => {


  return(
    <div>
    { props.dataForDisplay > 0 ?
      <div>
        <p> Here is the news from {props.metaData}: </p>

        <ArticleList dataForDisplay = {props.dataForDisplay} />
      </div>
      : <p> This search did not yield results. Try clicking a city or town close by!</p>
    }
    </div>
  )
}

export default NewsPopup
