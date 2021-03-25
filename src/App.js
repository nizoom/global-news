import React, { useState } from "react";
import './App.css';
import "fontsource-roboto"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import Instructions from "./Components/Instructions/instructions"
import SearchBar from "./Components/SearchBar/searchbar"
import Map from "./Components/Map/map"
import LocalityCheckBox from "./Components/LocalityCheckBox/checkbox"

const useStyles = makeStyles({
  typographyStyle: {
    color : "#DDE3EF"
  }
})




function App() {


  const handleChange = ( e ) => {
    let userInput = e.target.value;
    setInput(userInput)
  }

  const [input, setInput] = useState("")

  const [checked, setChecked] = useState(true)

  const handleBoxClick = (e) => {
    console.log("fired");
    setChecked(e.target.checked)
  }

  const classes = useStyles()
  return (
    <div className="App">

        <Typography variant = "h2" className = {classes.typographyStyle}>
          The Global News Source
        </Typography>
        <Typography variant = "h4" className = {classes.typographyStyle}> A new way to keep up </Typography>
        <Instructions/>
        <SearchBar typed = {handleChange}/>
        <LocalityCheckBox boxClicked = {handleBoxClick} status = {checked}/>
        <Map topicFilter = {input} localityStatus = {checked}
        />

    </div>
  );
}

export default App;
