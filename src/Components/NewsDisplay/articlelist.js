import React from "react";

const ArticleList = ( props ) => {

  return(
    <div>

      <div name = "results_bar">
      {
        props.dataForDisplay.map(article => (

          <div key = {props.dataForDisplay.indexOf(article).toString()}>

            <p> <a href = {article.link} target = "_blank" rel = "noopener noreferrer">
            {article.title}</a>-{article.source.name}</p>


          </div>
        ))}
      </div>
    </div>

  )
}

export default ArticleList;
