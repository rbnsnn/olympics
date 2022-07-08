import { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteData from './DeleteData'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'

import sortMedals from './sortData';
import EditData from './EditData';

import MedalDataType from '../../types/MedalDataType'

interface Props {
    medals: MedalDataType[],
    handleDelete: (id: string) => void,
    handleEdit: (editedElement: MedalDataType) => void
}

const DataTable = ({ medals, handleDelete, handleEdit }: Props): JSX.Element => {

    const [sortBy, setSortBy] = useState<string>('goldMedalsDescending')
    const [active, setActive] = useState<string>('goldDescending')

    const dataToDisplay = sortMedals(medals, sortBy)

    const handleSort = (medal: string) => {
        switch (medal) {
            case 'gold':
                sortBy === 'goldMedalsDescending' ? setSortBy('goldMedalsAscending') : setSortBy('goldMedalsDescending')
                active === 'goldDescending' ? setActive('goldAscending') : setActive('goldDescending')
                break

            case 'silver':
                sortBy === 'silverMedalsDescending' ? setSortBy('silverMedalsAscending') : setSortBy('silverMedalsDescending')
                active === 'silverDescending' ? setActive('silverAscending') : setActive('silverDescending')
                break

            case 'bronze':
                sortBy === 'bronzeMedalsDescending' ? setSortBy('bronzeMedalsAscending') : setSortBy('bronzeMedalsDescending')
                active === 'bronzeDescending' ? setActive('bronzeAscending') : setActive('bronzeDescending')
                break

            case 'total':
                sortBy === 'totalMedalsDescending' ? setSortBy('totalMedalsAscending') : setSortBy('totalMedalsDescending')
                active === 'totalDescending' ? setActive('totalAscending') : setActive('totalDescending')
                break
        }
    }

    const arrows = (element: string) => (
        <div style={{ marginLeft: '5px', display: 'inline-block', width: '20px' }}>
            {active === `${element}Descending` ? <AiOutlineArrowDown /> : null}
            {active === `${element}Ascending` ? <AiOutlineArrowUp /> : null}
        </div>
    )

    return (
        <Table sx={{ margin: '0 auto', width: '40%', minWidth: '900px' }}>
            <TableHead>
                <TableRow>
                    <TableCell>Country</TableCell>
                    <TableCell>
                        <img
                            style={{ marginLeft: '30px' }}
                            onClick={() => handleSort('gold')}
                            width="30"
                            src={`https://cdn-icons-png.flaticon.com/512/179/179249.png`}
                            alt="Gold medals"
                        />
                        {arrows('gold')}
                    </TableCell>
                    <TableCell>
                        <img
                            style={{ marginLeft: '30px' }}
                            onClick={() => handleSort('silver')}
                            width="30"
                            src={`https://cdn-icons-png.flaticon.com/512/179/179251.png`}
                            alt="Silver medals"
                        />
                        {arrows('silver')}
                    </TableCell>
                    <TableCell>
                        <img
                            style={{ marginLeft: '30px' }}
                            onClick={() => handleSort('bronze')}
                            width="30"
                            src={`https://cdn-icons-png.flaticon.com/512/179/179250.png`}
                            alt="Bronze medals"
                        />
                        {arrows('bronze')}
                    </TableCell>
                    <TableCell>
                        <img
                            style={{ marginLeft: '30px' }}
                            onClick={() => handleSort('total')}
                            width="30"
                            src={`https://cdn-icons-png.flaticon.com/512/7436/7436796.png`}
                            alt="Gold medals"
                        />
                        {arrows('total')}
                    </TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {dataToDisplay ? dataToDisplay.map((element: any) => (
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
                        <TableCell align="center">{element.totalMedals}</TableCell>
                        <TableCell align="center">
                            <EditData element={element} handleEdit={handleEdit} />
                        </TableCell>
                        <TableCell align="center">
                            <DeleteData element={element} handleDelete={handleDelete} />
                        </TableCell>

                    </TableRow>
                )) : null}
            </TableBody>
        </Table>
    )
}

export default DataTable