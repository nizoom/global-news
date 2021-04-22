import React, { useState } from "react";
import './globalnews.css';
import "fontsource-roboto"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Grid from '@material-ui/core/Grid';


import Instructions from "./Components/Instructions/instructions"
import SearchBar from "./Components/SearchBar/searchbar"
import Map from "./Components/Map/map"
import LocalityCheckBox from "./Components/LocalityCheckBox/checkbox"
import NewsDisplay from "./Components/NewsDisplay/newsdisplay"
import About from "./Components/About/about"




function Globalnews() {


// Material UI Styling
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,

    },
    allItems : {
      textAlign: "center",
      padding : theme.spacing(2),
      justifyContent : "center",

    }, //padding: theme.spacing(2),

    typographyStyle: {
      color : "#DDE3EF",
      marginTop : "3vh",
      textAlign: "center"
    }
  }));


//useState hooks to track different changes

//Tracks user input
  const [input, setInput] = useState("")

//Tracks whether the LocalityCheckBox has been checked
  const [checked, setChecked] = useState(true)

//sets news info when either articles or null is found
  const [newsData, setNewsData] = useState("")


//activates setNews hook to store the data from map.js
  const dataBackToTop = ( data ) => {
    //console.log(data);

    data == null ? setNewsData("NOTHINGFOUND") : setNewsData(data);

  }


//handles user input change

  const handleChange = ( e ) => {
    let userInput = e.target.value;
    setInput(userInput)
  }

//handles locality checkbox being clicked/unclicked
  const handleBoxClick = (e) => {
    console.log("fired");
    setChecked(e.target.checked)
  }


  const classes = useStyles()




  return (
    <div className= {classes.root} >
      <Grid container>

        <Grid item xs = {12}>
          <Typography variant = "h2" className = {classes.typographyStyle}>
            The Global News Source
          </Typography>
          <Typography variant = "h4" className = {classes.typographyStyle}> A new way to keep up </Typography>
        </Grid>

        <Grid item xs = {12} className = {classes.allItems} >
          <Instructions />
        </Grid>




          <Grid item md = {6}  xs = {12}>     {/* break points for mobile and desktop formats */}

              <SearchBar typed = {handleChange} className = {classes.allItems}

              />

          </Grid>

          <Grid item md = {6} xs = {12}> {/* Searchbar and locality checkbox should be side-to-side
            in desktop and then stacked in mobile */}
            <LocalityCheckBox className = {classes.allItems}
            boxClicked = {handleBoxClick} status = {checked}/>
          </Grid>


        <Grid item xs = {12} className = {classes.allItems} >
          <Map topicFilter = {input} localityStatus = {checked}
            dataBackToTop = {dataBackToTop}
          />
        </Grid>
         {/* Conditional rendering of newsDisplay if there is something to be displayed based
           on the newsData hook */}
        {newsData ==="" ? null:
          <Grid item xs = {12} className = {classes.allItems}>
            <NewsDisplay

            dataForDisplay = {newsData} localityStatus = {checked}
             />
          </Grid>
        }

        <Grid item xs = {12} className = {classes.allItems}>
          <About  />
        </Grid>

      </Grid>
    </div>
  );
}

export default Globalnews;
