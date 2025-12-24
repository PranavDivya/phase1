import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { useState } from 'react';

export const MuiRadio = () => {
    const[value, setValue] = useState('')
    console.log(value);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    return(
        <Box>
            <FormControl error>
                <FormLabel id='job-experience-group-label'>Years of experience</FormLabel>
                <RadioGroup value={value} onChange={handleChange}name='job-experience-grop' aria-labelledby='job-experience-group-label' row>
                    <FormControlLabel control={<Radio />} label='0-2' value='0-2'/>
                    <FormControlLabel control={<Radio />} label='3-6' value='3-6'/>
                    <FormControlLabel control={<Radio />} label='6 and above' value='6 and above'/>
                </RadioGroup>
            </FormControl>
        </Box>
    )
}