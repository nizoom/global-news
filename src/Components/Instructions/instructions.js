import React from "react";
import Typography from "@material-ui/core/Typography"
import {makeStyles} from "@material-ui/core/styles"



const Instructions = ( ) => {

  const useStyles = makeStyles({
    typographyStyle: {
      color: "#DEF0ED",
      marginTop: "5vh",
      margin: "5px",
      fontWeight: "900"
    }
  })
  const classes = useStyles();

  return (
    <div>

      <Typography variant = "h3" className = {classes.typographyStyle}>
        Here's how it works </Typography>

        <Typography variant = "h5" className = {classes.typographyStyle}>
           Click on 👆 a location to see what is being reported in
           that part of the world.
        </Typography>

      <Typography variant = "h5" className = {classes.typographyStyle}>
        Use the Topic Filter field  🔎 below before clicking the map
        to include a filter on the geographically
        generated news. This is an optional feature.
      </Typography>

      <Typography variant = "h6" className = {classes.typographyStyle}>
        Given our web search capabilities at this time it is possible that a geographically localized search
        won't yield any articles. If this occurs please feel free to toggle off ✅ the local feature in order
        to broaden the search results to a country-wide level. You may still pair this with the Topic Filter.
      </Typography>


    </div>
  )
}

export default Instructions
