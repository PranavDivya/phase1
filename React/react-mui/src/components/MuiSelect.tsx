import { Select, Button, Menu, MenuItem, Box, FormControl, InputLabel, type SelectChangeEvent } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
    const[anchorEl, setAncorEl] = useState<null | HTMLElement>(null)
    const[country, setCountry] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setCountry(event.target.value as string)
    }
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAncorEl(event.currentTarget)
    }
    const hanldeClose = () => {
        setAncorEl(null)
    }
    const open = Boolean(anchorEl)
    return(
        <Box width='250px'>
            <FormControl fullWidth>
                <InputLabel>Country</InputLabel>
                <Select label='Country' value={country} onChange={handleChange}>
                    <MenuItem value='IN'>India</MenuItem>
                    <MenuItem value='CN'>China</MenuItem>
                    <MenuItem value='JP'>Japan</MenuItem>
                </Select>
            </FormControl><br /><br />

            <Button id="menu-button" onClick={handleClick} aria-controls={open? 'menu-tab' : undefined} aria-haspopup='true' aria-expanded={open? 'true' : undefined}>Menu</Button>
            <Menu id="menu-tab" anchorEl={anchorEl} open={open} onClose={hanldeClose} slotProps={{list:{'aria-labelledby':'menu-button'}}}>
                <MenuItem onClick={hanldeClose}>Products</MenuItem>
                <MenuItem onClick={hanldeClose}>Services</MenuItem>
            </Menu>
        </Box>
    )
} 