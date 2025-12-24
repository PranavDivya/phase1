import { Box, FormControlLabel, Checkbox } from "@mui/material"
// import { useState } from "react";

export const MuiCheckBox = () => {
    // const[acceptTnC, setAcceptTnC] = useState(false);
    // console.log(acceptTnC);
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setAcceptTnC(event.target.checked);
    // }
    return(
        <Box>
            <FormControlLabel label='I accept Terms and Conditions' control={<Checkbox />} />            
        </Box>
    )
}