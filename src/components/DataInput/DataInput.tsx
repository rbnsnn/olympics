import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import { countries } from '../countries'
import DataTable from '../DataTable/DataTable'

import MedalDataType from '../../types/MedalDataType'

const DataInput: React.FC = () => {
    const [medalData, setMedalData] = useState<MedalDataType[]>([])

    const [chosenCountry, setChosenCountry] = useState<string>('')
    const [chosenCountryCode, setChosenCountryCode] = useState<string>('')
    const [goldMedals, setGoldMedals] = useState<string>('')
    const [silverMedals, setSilverMedals] = useState<string>('')
    const [bronzeMedals, setBronzeMedals] = useState<string>('')
    const [autocompleteKey, setAutocompleteKey] = useState<number>(0)

    const [isCountryInvalid, setCountryInvalid] = useState<boolean>(false)
    const [isGoldMedalsInvalid, setGoldMedalsInvalid] = useState<boolean>(false)
    const [isSilverMedalsInvalid, setSilverMedalsInvalid] = useState<boolean>(false)
    const [isBronzeMedalsInvalid, setBronzeMedalsInvalid] = useState<boolean>(false)

    const handleCountryChange = (event: any, value: any): void => {
        setChosenCountry(value?.name)
        setChosenCountryCode(value?.code)
        setCountryInvalid(false)
    }

    const handleMedalChange: React.ChangeEventHandler<HTMLInputElement> = (event): void => {
        const { id, value }: { id: string, value: string } = event.currentTarget

        switch (id) {
            case 'goldMedals':
                if (Number(value) > 100) {
                    setGoldMedals('100')
                    return
                }
                if (parseInt(value, 10) < 0) {
                    setGoldMedals('0')
                    return
                }
                setGoldMedals(value)
                setGoldMedalsInvalid(false)
                break

            case 'silverMedals':
                if (Number(value) > 100) {
                    setSilverMedals('100')
                    return
                }
                if (parseInt(value, 10) < 0) {
                    setSilverMedals('0')
                    return
                }
                setSilverMedals(value)
                setSilverMedalsInvalid(false)
                break

            case 'bronzeMedals':
                if (Number(value) > 100) {
                    setBronzeMedals('100')
                    return
                }
                if (parseInt(value, 10) < 0) {
                    setBronzeMedals('0')
                    return
                }
                setBronzeMedals(value)
                setBronzeMedalsInvalid(false)
                break
        }
    }

    const handleCountryValidation = (): void => {
        const exists = medalData.find((element: MedalDataType) => element.chosenCountryCode === chosenCountryCode)
        if (exists || chosenCountry === '') {
            setCountryInvalid(true)
        } else {
            setCountryInvalid(false)
        }
    }

    const handleMedalValidation: React.FocusEventHandler<HTMLInputElement> = (event): void => {
        const { id, value }: { id: string, value: string } = event.currentTarget

        switch (id) {
            case 'goldMedals':
                if (value === '') {
                    setGoldMedalsInvalid(true)
                } else {
                    setGoldMedalsInvalid(false)
                }
                break
            case 'silverMedals':
                if (value === '') {
                    setSilverMedalsInvalid(true)
                } else {
                    setSilverMedalsInvalid(false)
                }
                break
            case 'bronzeMedals':
                if (value === '') {
                    setBronzeMedalsInvalid(true)
                } else {
                    setBronzeMedalsInvalid(false)
                }
                break
        }
    }

    const handleSubmit = (): void => {
        const exists = medalData.find((element: MedalDataType) => element.chosenCountryCode === chosenCountryCode)
        if (exists || chosenCountry === '' || goldMedals === '' || silverMedals === '' || bronzeMedals === '') {
            if (chosenCountry === '') {
                setCountryInvalid(true)
            }
            if (goldMedals === '') {
                setGoldMedalsInvalid(true)
            }
            if (silverMedals === '') {
                setSilverMedalsInvalid(true)
            }
            if (bronzeMedals === '') {
                setBronzeMedalsInvalid(true)
            }

        } else {
            const currentMedalData: MedalDataType = {
                chosenCountry,
                chosenCountryCode,
                goldMedals: Number(goldMedals),
                silverMedals: Number(silverMedals),
                bronzeMedals: Number(bronzeMedals),
                totalMedals: Number(goldMedals) + Number(silverMedals) + Number(bronzeMedals)
            }
            setMedalData(prevMedalData => ([
                ...prevMedalData,
                currentMedalData
            ]))

            setChosenCountry('')
            setChosenCountryCode('')
            setGoldMedals('')
            setSilverMedals('')
            setBronzeMedals('')
            setAutocompleteKey(prev => prev += 1)
            setCountryInvalid(false)
            setGoldMedalsInvalid(false)
            setSilverMedalsInvalid(false)
            setBronzeMedalsInvalid(false)

        }
    }

    const handleDelete = (id: string): void => {
        const medalDataAfterDelete = medalData.filter(element => element.chosenCountryCode !== id)
        setMedalData(medalDataAfterDelete)
    }

    const handleEdit = (editedElement: MedalDataType): void => {
        const medalDataAfterEdit = medalData.map(element => {
            if (element.chosenCountryCode !== editedElement.chosenCountryCode) {
                return element
            }

            const { chosenCountry, chosenCountryCode, goldMedals, silverMedals, bronzeMedals } = editedElement

            return ({
                chosenCountry,
                chosenCountryCode,
                goldMedals: Number(goldMedals),
                silverMedals: Number(silverMedals),
                bronzeMedals: Number(bronzeMedals),
                totalMedals: Number(goldMedals) + Number(silverMedals) + Number(bronzeMedals)
            })
        })

        setMedalData(medalDataAfterEdit)
    }

    return (
        <div>
            <FormControl
                sx={{
                    margin: '100px auto',
                    width: '70%',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px',
                    justifyContent: 'center'
                }}
            >
                <Autocomplete
                    disableClearable
                    onChange={handleCountryChange}
                    fullWidth
                    key={autocompleteKey}
                    id="countrySelect"
                    options={countries}
                    autoHighlight
                    getOptionLabel={(option) => option.name}
                    renderOption={(props, option) => (
                        <Box component="li" {...props}>
                            <img
                                style={{ marginRight: '20px' }}
                                loading="lazy"
                                width="20"
                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                alt=""
                            />
                            {option.name} ({option.code})
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                            onBlur={handleCountryValidation}
                            error={isCountryInvalid}
                            helperText={isCountryInvalid ? 'Invalid or already exists' : ''}
                            {...params}
                            value={chosenCountry}
                            label="Choose a country"
                        />
                    )}
                />

                <TextField
                    onBlur={handleMedalValidation}
                    error={isGoldMedalsInvalid}
                    helperText={isGoldMedalsInvalid ? 'Input field must not be empty' : ''}
                    onChange={handleMedalChange}
                    value={goldMedals}
                    type="number"
                    id="goldMedals"
                    label="Gold medals"
                    variant="outlined"
                    InputProps={{ inputProps: { min: 0, max: 100 } }}
                    fullWidth
                />
                <TextField
                    onBlur={handleMedalValidation}
                    error={isSilverMedalsInvalid}
                    helperText={isSilverMedalsInvalid ? 'Input field must not be empty' : ''}
                    onChange={handleMedalChange}
                    value={silverMedals}
                    type="number"
                    id="silverMedals"
                    label="Silver medals"
                    variant="outlined"
                    InputProps={{ inputProps: { min: 0, max: 100 } }}
                    fullWidth
                />
                <TextField
                    onBlur={handleMedalValidation}
                    error={isBronzeMedalsInvalid}
                    helperText={isBronzeMedalsInvalid ? 'Input field must not be empty' : ''}
                    onChange={handleMedalChange}
                    value={bronzeMedals}
                    type="number"
                    id="bronzeMedals"
                    label="Bronze medals"
                    variant="outlined"
                    InputProps={{ inputProps: { min: 0, max: 100 } }}
                    fullWidth
                />

                <Button
                    sx={{ maxHeight: '55px' }}
                    variant="contained"
                    fullWidth
                    onClick={handleSubmit}
                >
                    Submit
                </Button>



            </FormControl>
            <div>
                {
                    medalData.length === 0 ?
                        <Typography variant="h2" gutterBottom component="div">
                            Add some data...
                        </Typography> :
                        <DataTable medals={medalData} handleDelete={handleDelete} handleEdit={handleEdit} />
                }
            </div>
        </div>
    )
}

export default DataInput