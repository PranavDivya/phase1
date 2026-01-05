import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";

const tableData = [{
    "id": 1,
    "first_name": "Lisbeth",
    "last_name": "Beavon",
    "email": "lbeavon0@google.it"
    }, {
    "id": 2,
    "first_name": "Tait",
    "last_name": "Boulsher",
    "email": "tboulsher1@godaddy.com"
    }, {
    "id": 3,
    "first_name": "Humfrid",
    "last_name": "Gladyer",
    "email": "hgladyer2@youtube.com"
    }, {
    "id": 4,
    "first_name": "Huntington",
    "last_name": "Bratty",
    "email": "hbratty3@fc2.com"
    }, {
    "id": 5,
    "first_name": "Coreen",
    "last_name": "Coram",
    "email": "ccoram4@1688.com"
    }, {
    "id": 6,
    "first_name": "Kelsey",
    "last_name": "Yellep",
    "email": "kyellep5@cloudflare.com"
    }, {
    "id": 7,
    "first_name": "Jennie",
    "last_name": "Roberds",
    "email": "jroberds6@clickbank.net"
    }, {
    "id": 8,
    "first_name": "Averill",
    "last_name": "Surgeon",
    "email": "asurgeon7@desdev.cn"
    }, {
    "id": 9,
    "first_name": "Heywood",
    "last_name": "Skurm",
    "email": "hskurm8@chron.com"
    }, {
    "id": 10,
    "first_name": "Sanderson",
    "last_name": "Windridge",
    "email": "swindridge9@hostgator.com"
}]

export const MuiTable = () => {
    return(
        <TableContainer component={Paper} sx={{margin:4, maxHeight:'300px'}}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First_Name</TableCell>
                        <TableCell>Last_Name</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tableData.map(row => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.first_name}</TableCell>
                                <TableCell>{row.last_name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}