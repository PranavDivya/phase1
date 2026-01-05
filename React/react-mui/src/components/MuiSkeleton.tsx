import { Stack, Skeleton, Box, Typography, Avatar } from "@mui/material";
import { useState, useEffect } from "react";

export const MuiSkeleton = () => {
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    })

    return(
        <Box sx={{width:'250px'}}>
            {
                loading ? (
                    <Skeleton variant="rectangular" width={256} height={144} animation='wave' />
                ) : (
                    <Box width={256} height={144} bgcolor={"#90caf9"}></Box>
                )
            }
            <Stack direction='row' spacing={1}sx={{width:'100%', marginTop:'12px'}}>
                {
                    loading ? (
                        <Skeleton variant="circular" width={40} height={40} animation='wave' />
                    ) : (
                        <Avatar src="https://randomuser.me/api/portraits/men/22.jpg" />
                    )
                }
                <Stack sx={{width:'80%'}}>
                    {
                        loading ? (
                            <Typography variant="body1">
                                <Skeleton variant='text' width='100%' animation='wave' />
                            </Typography>
                        ) : (
                            <Typography variant='body1'>React MUI Components</Typography>
                        )
                    }
                </Stack>
            </Stack>
        </Box>
    )
}