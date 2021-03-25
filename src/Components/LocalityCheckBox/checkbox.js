import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { purple } from "@material-ui/core/colors"
import { withStyles } from '@material-ui/core/styles';



const LocalityCheckBox = ( props ) => {

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
    <div>


    <FormControlLabel
         control={<CustomBox checked={props.status} onChange={props.boxClicked}
         name="Localized"/>}
         label="Localized"
         style = {{position: "absolute", marginTop: "5vh", backgroundColor: "#91CCE5",
                  right: "60px", paddingRight: "2vh", borderRadius: "16px",
                  fontWeight: "1000"}}
       />




    </div>
  )
}


export default LocalityCheckBox;
