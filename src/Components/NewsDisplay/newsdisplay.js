import React, { useRef, useEffect } from "react";
import ArticleList from "./articlelist"
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles"



const NewsDisplay = ( props ) => {



//Object that tracks properties about the data which inform what news header is to be displayed
  let displayDataObj =  {
     newsAvailable : false,
     topicWanted : false,
     localityWanted : props.localityStatus,
     dataAssessed : false
  }


  let newsArray, localityName, country, topic;

  //console.log(props.dataForDisplay);

  if(props.dataForDisplay === "NOTHINGFOUND"){
    newsArray = undefined //triggers no news display when newsArray is checked
  }

  if(Array.isArray(props.dataForDisplay)) { // successful click
    // / checking is an array rather than the "nothingfound" str

    if(props.dataForDisplay.length > 3){
      [newsArray, localityName, country, topic] = props.dataForDisplay
  } else { //nonnational click
    // here changing name of nonNationalName to country so that the WhatToDisplay
    //function knows what to pick up on
    [newsArray, country, topic] = props.dataForDisplay
    localityName = ""
    displayDataObj.localityWanted = false;

  }
}


//based on the news results this function will change the displayDataObj

const assessData = (displayDataObj) => {

  if(newsArray !== undefined){ //if there is news
     displayDataObj.newsAvailable = true
  }

  if(localityName !== "" || localityName === !undefined){ //if there is a locality

    displayDataObj.localityWanted = true;
    // local area searched
 
  }

  if(topic !== "" || undefined){ //if there is a topic
     //user added topic
  
    displayDataObj.topicWanted = true;
  }
  displayDataObj.dataAssessed = true;

  return displayDataObj
}

const assessedData = assessData(displayDataObj)


//WhatToDisplay -> based on assessed displayDataObj display the appropriate header

const WhatToDisplay = () => {

  //automatically scroll down to news
  useEffect(() => {
    scrollIntoView()



  },[props.dataForDisplay])


  if(!displayDataObj.newsAvailable){ //if no news
    // Firing no news display
    return <h3> There is no results based on this location
    or topic. Try clicking a city or town. You can also
    turn off Localized search to broaden your results to the national level</h3>

} //if there is news, its local, and topic/userfilter is used

  if(displayDataObj.localityWanted && displayDataObj.topicWanted){
    return <h1> Here is the news for {localityName}, {country} and {topic}</h1>
  }
  // 2. local news only
  if(!displayDataObj.topicWanted && displayDataObj.localityWanted){
    return <h1> Here is the news for {localityName}, {country} </h1>
  }
  //3. country news and topic / userfilter is used
  if(!displayDataObj.localityWanted && displayDataObj.topicWanted){
    return <h1> Here is the news for {country} and {topic} </h1>
  }

    // 4. country news only
  if(!displayDataObj.localityWanted && !displayDataObj.topicWanted){
    return <h1> Here is the news for {country} </h1>
  }

  displayDataObj.dataAssessed = false;
}


  const useStyles = makeStyles({
    typographyStyle: {
      color : "#040A5F",
      padding : "2vh",
      fontWeight: "700"
    }
  })

  const classes = useStyles()

  const scrollIntoView = ( ) => {
    newsDisplayRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start"
    })
  }

  const newsDisplayRef = useRef()



  return(
    <div>
        <CssBaseline />

        <Container
          style = {{alignItems : "stretch"}}>
            <Typography component="div" className = {classes.typographyStyle}
              style={{ backgroundColor: '#cfe8fc'}}  ref = {newsDisplayRef}>

              {WhatToDisplay()}


              {displayDataObj.newsAvailable ?  <ArticleList articlesToDisplay = {newsArray} /> : null}
            </Typography>
        </Container>

    </div>
  )
}

export default NewsDisplay
