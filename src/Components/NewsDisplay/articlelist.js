import React from "react";

/*
const parseForDisplay = () => {
  console.log(props.dataForDisplay);

  props.dataForDisplay.map(function(data, i){
    return(
    <div>
      <ul> <li key = { i }> {data.title} </li> </ul>
    </div>
   )}
  )*/

const ArticleList = ( props ) => {

  return(
    <div>
      {
        props.dataForDisplay.map(article => (

          <div key = {props.dataForDisplay.indexOf(article).toString()}>

            <p> <a href = {article.link} target = "_blank" rel = "noopener noreferrer">
            {article.title}</a>-{article.source.name}</p>


          </div>
        ))}
    </div>

  )
}

export default ArticleList;
