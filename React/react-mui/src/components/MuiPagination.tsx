import { Typography, Stack, Pagination} from '@mui/material';
import { useState } from 'react';

export const MuiPagination = () => {
    const[page, setPage] = useState(1)
    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }
    return (
        <Stack spacing={1}>
            <Typography>Page: {page}</Typography>
            <Pagination count={10} page={page} onChange={handleChange} />
        </Stack>
    )
}