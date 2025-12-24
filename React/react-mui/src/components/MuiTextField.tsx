import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';

export const MuiTextField = () => {
    return(
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <TextField label='Name' variant="outlined" required></TextField>
                <TextField label='Email' variant="standard" error required></TextField>
                <TextField label='Password' variant="filled" type="password" slotProps={{input:{endAdornment:<InputAdornment position="end"><VisibilityIcon /></InputAdornment>}}} helperText='Do not share this password' required></TextField>
                <TextField label='Read only' slotProps={{input: {readOnly: true}}}></TextField>
            </Stack>
        </Stack>
    )
}