import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useState } from 'react';

export const MuiDialog = () => {
    const[open, setOpen] = useState(false)
    return(
        <>
            <Button onClick={() => setOpen(true)}>Submit Test</Button>
            <Dialog open={open}>
                <DialogTitle>Submit the test?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You cannot edit after submitting.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={() => setOpen(false)}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}