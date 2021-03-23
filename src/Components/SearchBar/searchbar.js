import React from "react";
import { TextField } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import "./searchbar.css"

const SearchBar = ( props ) => {

  const theme = createMuiTheme({
    overrides: {
      MuiFilledInput : { root : { backgroundColor : "#58434E"}},
      MuiInputLabel : { root : { color : "#FAF2F6"}},

  }})

  /*
  const handleChange = ( e ) => {
    console.log(e.target.value);
  }  */



  return(
    <form>
      <MuiThemeProvider theme = {theme}>
      <TextField onChange = {props.typed}
       id = "filled-size-large" label = "Filter🔎" variant ="filled"
       style = {{position: "absolute", left: "40px", marginTop: "5vh",
       width: "50vh"}} color = "secondary"
       />
      </MuiThemeProvider>
    </form>
  )
}

export default SearchBar

//position: "fixed", left: "40px", marginTop: "5vh", width: "50vh"

//InputLabelProps = {{ className : textField__label }}
