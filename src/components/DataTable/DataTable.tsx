import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button'

const DataTable = ({ medals, handleDelete }: any) => {

    // const columns: GridColDef[] = [
    //     { field: 'country', headerName: 'Country', width: 300 },
    //     { field: 'goldMedals', headerName: 'Gold medals', width: 300 },
    //     { field: 'silverMedals', headerName: 'Silver medals', width: 300 },
    //     { field: 'bronzeMedals', headerName: 'Bronze medals', width: 300 },
    //     { field: 'allMedals', headerName: 'All medals', width: 300 }
    // ]

    // const row = medals.map((country: any) => ({
    //     country: country.chosenCountry,
    //     goldMedals: country.goldMedals,
    //     silverMedals: country.silverMedals,
    //     bronzeMedals: country.bronzeMedals,
    //     allMedal: country.allMedals,
    // }))

    const medalsSorted = medals.sort((a: any, b: any) => {
        if (a.goldMedals > b.goldMedals) {
            return -1
        }
        if (a.goldMedals < b.goldMedals) {
            return 1
        }
        if (a.goldMedals === b.goldMedals) {
            if (a.silverMedals > b.silverMedals) {
                return -1
            }
            if (a.silverMedals < b.silverMedals) {
                return 1
            }
            if (a.silverMedals === b.silverMedals) {
                if (a.bronzeMedals > b.bronzeMedals) {
                    return -1
                }
                if (a.bronzeMedals < b.bronzeMedals) {
                    return 1
                }
                return 0
            }
            return 0
        }
        return 0
    })

    return (
        <Table aria-label="table" sx={{ margin: '0 auto', width: '40%', minWidth: '200px' }}>
            <TableHead>
                <TableRow>
                    <TableCell>Country</TableCell>
                    <TableCell>Gold medals</TableCell>
                    <TableCell>Silver medals</TableCell>
                    <TableCell>Bronze medals</TableCell>
                    <TableCell>All medals</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {medalsSorted.map((element: any) => (
                    <TableRow
                        key={element.chosenCountryCode}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row" sx={{ minWidth: '150px' }}>
                            <img
                                style={{ marginRight: '20px' }}
                                loading="lazy"
                                width="20"
                                src={`https://flagcdn.com/w20/${element.chosenCountryCode.toLowerCase()}.png`}
                                srcSet={`https://flagcdn.com/w40/${element.chosenCountryCode.toLowerCase()}.png 2x`}
                                alt=""
                            />
                            {element.chosenCountry}
                        </TableCell>
                        <TableCell align="center">{element.goldMedals}</TableCell>
                        <TableCell align="center">{element.silverMedals}</TableCell>
                        <TableCell align="center">{element.bronzeMedals}</TableCell>
                        <TableCell align="center">{element.allMedals}</TableCell>
                        <TableCell align="center">
                            <Button
                                variant="contained"
                                fullWidth
                            >
                                Edit
                            </Button>
                        </TableCell>
                        <TableCell align="center">
                            <Button
                                color="secondary"
                                variant="contained"
                                onClick={() => handleDelete(element.chosenCountryCode)}
                                fullWidth
                            >
                                Delete
                            </Button>
                        </TableCell>

                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default DataTable