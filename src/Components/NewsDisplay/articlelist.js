import React from "react";
import {makeStyles} from "@material-ui/core/styles"


const ArticleList = ( props ) => {

  //console.log(props.articlesToDisplay);
  //console.log(props.articlesToDisplay[0]);

  let readyToDisplay = false
  //console.log(props.articlesToDisplay);
  if(props.articlesToDisplay !== undefined){
      //console.log("we got something");
      readyToDisplay = true;

  }

  const useStyles = makeStyles({
    typographyStyle: {
      //color : "linear-gradient(#EA7C14, #A43DE2)"

      margin: "2vh",
      border: "solid",
      padding: ".8vh",
      overflowWrap: "break-word",
      borderRadius: "16px",
      backgroundColor: "#65DFB8",
      '&:hover': {
      color: '#8759A9'
      }
    }
  })
  const classes = useStyles();


  return(
    <div>
    {/*for each article list the source name and title which is also a hyperlink to
      the article */}
      <div name = "results_bar">
      { readyToDisplay ?
         <ul> {
              props.articlesToDisplay[0].map(function(article, index) {
                //console.log(article);
                return <li  key = {props.articlesToDisplay[0].indexOf(article).toString()}
                        className = {classes.typographyStyle} >
                        {article.provider[0].name} -
                        <a href = {article.url} target="_blank" rel="noreferrer"
                        > {article.name} </a> </li>
              })

         }  </ul> : <h1> Nothing to Display </h1>
       }

      </div>
    </div>

  )
}

export default ArticleList;
