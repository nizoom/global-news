import React from "react";
import { TextField } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import "./searchbar.css"

const SearchBar = ( props ) => {

//Material UI styling
  const theme = createMuiTheme({
    overrides: {
      MuiFilledInput : { root : { backgroundColor : "#58434E"}},
      MuiInputLabel : { root : { color : "#FAF2F6"}}
  }
})






  return(
    <form style = {{textAlign : "center", marginTop : "5vh"}}>
      <MuiThemeProvider theme = {theme}>
      {/* passes in function that tracks user input
       to textField*/}
      <TextField onChange = {props.typed} className = "searchbar"
      id = "filled-size-large" label = "Filter🔎" variant ="filled"
       style = {{width: "50vh", color: "white"}} color = "secondary" InputProps={{
    className: theme.multilineColor
  }}
       />
      </MuiThemeProvider>
    </form>
  )
}

export default SearchBar
