import React from "react";
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { purple } from "@material-ui/core/colors"
import { withStyles } from '@material-ui/core/styles';



const LocalityCheckBox = ( props ) => {

//Material UI Styling
  const CustomBox = withStyles({
  root: {
    color: purple[400],
    '&$checked': {
      color: purple[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

  return(
    <div style = {{textAlign: "center", marginTop: "7vh"}}>

    {/* below props pass the current checked status of the box and an onChange function
      for when it is clicked.*/}
    <FormControlLabel
         control={<CustomBox checked={props.status} onChange={props.boxClicked}
         name="Localized"/>}
         label="Localized"
         style = {{backgroundColor: "#91CCE5",
          paddingRight: "3vh", borderRadius: "16px",
                  fontWeight: "1000", marginRight: "0px"}}
       />




    </div>
  )
}


export default LocalityCheckBox;
