import React from "react";
import Typography from "@material-ui/core/Typography"
import {makeStyles} from "@material-ui/core/styles"



const Instructions = ( ) => {

  const useStyles = makeStyles({
    typographyStyle: {
      //color : "linear-gradient(#EA7C14, #A43DE2)"
      color: "032536",
      marginTop: "5vh"
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
        Use the Filter field  🔎 below to include a filter on the geographically
        generated news.
      </Typography>


    </div>
  )
}

export default Instructions
