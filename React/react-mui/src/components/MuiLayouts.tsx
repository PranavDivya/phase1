import { Box, Grid, Paper } from '@mui/material';

export const MuiLayouts = () => {
    return(
        <Paper sx={{padding:'10px'}} elevation={4}>
            <Grid container my={2} width={500} spacing={1}>
                <Grid size={{xs:12, sm:6, md:3}}>
                    <Box bgcolor='primary.light' padding={1}>
                        Item 1
                    </Box>
                </Grid>
                <Grid size={{xs:12, sm:6, md:3}}>
                    <Box bgcolor='primary.light' padding={1}>
                        Item 2
                    </Box>
                </Grid>
                <Grid size={{xs:12, sm:6, md:3}}>
                    <Box bgcolor='primary.light' padding={1}>
                        Item 3
                    </Box>
                </Grid>
                <Grid size={{xs:12, sm:6, md:3}}>
                    <Box bgcolor='primary.light' padding={1}>
                        Item 4
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}