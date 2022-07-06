import React, { SyntheticEvent, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button'
import { countries } from '../countries'

interface MedalDataType {
    chosenCountry: string,
    chosenCountryCode: string,
    goldMedals: number,
    silverMedals: number,
    bronzeMedals: number,
}

const DataInput = () => {
    const [medalData, setMedalData] = useState<MedalDataType[]>([])

    const [chosenCountry, setChosenCountry] = useState<string>('')
    const [chosenCountryCode, setChosenCountryCode] = useState<string>('')
    const [goldMedals, setGoldMedals] = useState<number | ''>('')
    const [silverMedals, setSilverMedals] = useState<number | ''>('')
    const [bronzeMedals, setBronzeMedals] = useState<number | ''>('')
    const [autocompleteKey, setAutocompleteKey] = useState<number>(0)

    const handleCountryChange = (event: any, value: any): void => {
        setChosenCountry(value?.name)
        setChosenCountryCode(value?.code)
    }

    const handleMedalChange = (event: any): void => {
        const { id, value }: { id: string, value: number } = event.target

        switch (id) {
            case 'goldMedals':
                setGoldMedals(value)
                break

            case 'silverMedals':
                setSilverMedals(value)
                break

            case 'bronzeMedals':
                setBronzeMedals(value)
                break
        }
    }

    const submitHandle = (event: SyntheticEvent) => {
        event.preventDefault()
        const exists = medalData.find(element => element.chosenCountryCode === chosenCountryCode)
        if (exists) {
            console.log('duplikat!')
            return
        }


        if (goldMedals && silverMedals && bronzeMedals) {
            const currentMedalData: MedalDataType = {
                chosenCountry,
                chosenCountryCode,
                goldMedals,
                silverMedals,
                bronzeMedals
            }
            setMedalData(prevMedalData => ([
                ...prevMedalData,
                currentMedalData
            ]))

            setChosenCountry('')
            setGoldMedals('')
            setSilverMedals('')
            setBronzeMedals('')
            setAutocompleteKey(prev => prev += 1)

            console.log(autocompleteKey)
        }


    }

    const elements = medalData.map(element => <p key={element.chosenCountryCode}>{element.chosenCountry}</p>)

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
                            {...params}
                            value={chosenCountry}
                            label="Choose a country"
                        />
                    )}
                />

                <TextField
                    onChange={handleMedalChange}
                    value={goldMedals}
                    type="number"
                    id="goldMedals"
                    label="Gold medals"
                    variant="outlined"
                    InputProps={{ inputProps: { min: 0, max: 10 } }}
                    fullWidth
                />
                <TextField
                    onChange={handleMedalChange}
                    value={silverMedals}
                    type="number"
                    id="silverMedals"
                    label="Silver medals"
                    variant="outlined"
                    InputProps={{ inputProps: { min: 0, max: 10 } }}
                    fullWidth
                />
                <TextField
                    onChange={handleMedalChange}
                    value={bronzeMedals}
                    type="number"
                    id="bronzeMedals"
                    label="Bronze medals"
                    variant="outlined"
                    InputProps={{ inputProps: { min: 0, max: 10 } }}
                    fullWidth
                />

                <Button
                    variant="contained"
                    fullWidth
                    onClick={submitHandle}
                >
                    Submit
                </Button>



            </FormControl>
            {elements}
        </div>
    )
}

export default DataInput