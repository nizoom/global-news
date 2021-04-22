import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const About = ( props ) => {

  return(
    <div name = "Stuart">
      <Typography variant = "h2" style = {{color: "white"}}> About </Typography>

      <CssBaseline />
      <Container maxWidth = "md" style = {{backgroundColor : "#DD8F8F", padding : "1vh",
        marginTop: "1em", marginBottom: "1em"}} >
        <p style = {{fontSize : "1.2em"}}> This web app was inspired by the convenience and
        subsequently narrowing format of modern news consumption.
        The majority of news sites convey a preselected list of articles that inform
        you of what important events have occurred that day. Yet often this reporting is
        specific to your city or country, while other areas are deemed irrelevant, and fated to
         be excluded from your news feed day after day.
         This app encourages geographic and social exploration.
         Through using the Google Maps API, Leaflet JS library, and Azure News API
         the app allows you to be as local or macro as your interest demands.
         By clicking on places you’ve never heard of before, you get a glimpse of
         the victories and challenges of people living in these places.
         I hope it is a springboard for your curiosity!  </p>
       </Container>
    </div>
  )
}

export default About;
