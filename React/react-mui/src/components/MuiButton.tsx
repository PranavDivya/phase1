import { Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material";
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from "react";

export const MuiButton = () =>{
    const [formats, setFormats] = useState<string[]>([]);

    console.log({formats});

    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
        setFormats(updatedFormats)
    }

    return(
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant="text" href="https://google.com">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color='secondary'>Secondary</Button>
                <Button variant="contained" color="info">Info</Button>
                <Button variant="contained" color="warning">Warning</Button>
                <Button variant="contained" color="error">Error</Button>
                <Button variant="contained" color="success">Success</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant="contained" startIcon={<HomeFilledIcon />}>Home</Button>
                <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
            <IconButton aria-label="home" color="primary">
                <HomeFilledIcon />
            </IconButton>
            </Stack>
            <Stack direction='row'>
                <ButtonGroup variant="text" orientation="vertical">  
                    <Button>Up</Button>
                    <Button>Center</Button>
                    <Button>Down</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction='row'>
                <ButtonGroup variant="text">  
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction='row'>
                <ToggleButtonGroup value={formats} onChange={handleFormatChange}>  
                    <ToggleButton value='bold' aria-label="bold"><FormatBoldIcon /></ToggleButton>
                    <ToggleButton value='italic'><FormatItalicIcon /></ToggleButton>
                    <ToggleButton value='underlined'><FormatUnderlinedIcon /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}