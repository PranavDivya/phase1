import { TextField, MenuItem, Box } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
    const[country, setCountry] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string)
    }
    return(
        <Box width='250px'>
            <TextField label='Country' value={country} onChange={handleChange} select fullWidth>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='CN'>China</MenuItem>
                <MenuItem value='JN'>Japan</MenuItem>
            </TextField>
        </Box>
    )
} 