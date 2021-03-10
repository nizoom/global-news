import './App.css';
import "fontsource-roboto"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import Instructions from "./Components/Instructions/instructions"
import SearchBar from "./Components/SearchBar/searchbar"
import Map from "./Components/Map/map"


const useStyles = makeStyles({
  typographyStyle: {
    color : "#DDE3EF"
  }
})


function App() {
  const classes = useStyles()
  return (
    <div className="App">

        <Typography variant = "h2" className = {classes.typographyStyle}>
          The Global News Source
        </Typography>
        <Typography variant = "h4" className = {classes.typographyStyle}> A new way to keep up </Typography>
        <Instructions/>
        <SearchBar/>
        <Map/>

    </div>
  );
}

export default App;
