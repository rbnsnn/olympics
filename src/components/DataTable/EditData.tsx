import { useState } from "react"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

import MedalDataType from '../../types/MedalDataType'

const EditData = ({ element, handleEdit }: any): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false)

    const [goldMedals, setGoldMedals] = useState<string>(element.goldMedals)
    const [silverMedals, setSilverMedals] = useState<string>(element.silverMedals)
    const [bronzeMedals, setBronzeMedals] = useState<string>(element.bronzeMedals)

    const [isGoldMedalsInvalid, setGoldMedalsInvalid] = useState<boolean>(false)
    const [isSilverMedalsInvalid, setSilverMedalsInvalid] = useState<boolean>(false)
    const [isBronzeMedalsInvalid, setBronzeMedalsInvalid] = useState<boolean>(false)

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

    const handleEditOpen = (): void => {
        setOpen(true)
    }
    const handleEditClose = (): void => {
        setOpen(false)
    }

    const handleEditedMedalData = (): void | MedalDataType => {
        if (goldMedals === '' || silverMedals === '' || bronzeMedals === '') {

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
            const editedMedalData = {
                chosenCountry: element.chosenCountry,
                chosenCountryCode: element.chosenCountryCode,
                goldMedals: Number(goldMedals),
                silverMedals: Number(silverMedals),
                bronzeMedals: Number(bronzeMedals),
                totalMedals: Number(goldMedals) + Number(silverMedals) + Number(bronzeMedals)
            }
            setOpen(false)
            return editedMedalData
        }
    }

    return (
        <>
            <Button
                variant="contained"
                onClick={handleEditOpen}
                style={{ width: '50px' }}
            >
                Edit
            </Button>
            <Dialog
                open={open}
                onClose={handleEditClose}>
                <DialogTitle id="edit">
                    Editing medals for: {element.chosenCountry}
                </DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
                    <TextField
                        sx={{ marginTop: '20px' }}
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

                </DialogContent>
                <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" onClick={handleEditClose}>Cancel</Button>
                    <Button variant="contained" color="secondary" onClick={() => {
                        handleEdit(handleEditedMedalData())
                    }
                    } autoFocus>
                        Edit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default EditData