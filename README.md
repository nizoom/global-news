

# About 
Global News was inspired by the convenience and subsequently narrowing format of modern news consumption. The majority of news sites convey a preselected list of articles that inform you of what important events have occurred that day. Yet often this reporting is specific to your city or country, while other areas are deemed irrelevant, and fated to be excluded from your news feed day after day. This app encourages geographic and social exploration. Through using the Google Maps API, Leaflet JS library, and Azure News API the app allows you to be as local or macro as your interest demands. By clicking on places you’ve never heard of before, you get a glimpse of the victories and challenges of people living in these places. I hope it is a springboard for your curiosity!

## Use Deployed App 
To use the app please visit https://www.nissimram.com/#/globalnews

# Installation and set up instructions

After cloning this repo, run `npm install` to install all dependencies. Please note that in order for the app to get news you will need API keys for Google Cloud and Azure. These keys are used in two files. 1) `src/Components/Map/getNews.js` and 2) `src/Components/Map/getplacename.js`

## To Visit App locally on your machine:

 Make sure you're in the src folder and run `npm start`
 
 The React server should automatically start on: 

`localhost:3000`


# Reflection

This was a personal project to help grow my skills in web and software development. I wanted to become more familiar with React, learn about how to organize components and section off code for specific purposes. 

It was also a good excerise in using new APIs and reading documentation to impliment to the queries that I needed. One challenge was finding the right service for the job. There were many APIs to choose from and finding one that suited my purposes required many iterations of this app. 

Working with APIs was a good opportunity to get to know asynchronous javascript. Fetching and manipulating the returned data required researching and implimenting `async / await` functions. This certainly a complicated topic and something I hope to continue honing in future projects.

Please visit my blog to learn more about this project and my work: https://www.nissimram.com/#/Blog


