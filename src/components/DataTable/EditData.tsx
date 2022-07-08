import { useState } from "react"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"


const EditData = ({ element, handleEdit }: any) => {
    const [open, setOpen] = useState<boolean>(false)

    const [goldMedals, setGoldMedals] = useState<string>(element.goldMedals)
    const [silverMedals, setSilverMedals] = useState<string>(element.silverMedals)
    const [bronzeMedals, setBronzeMedals] = useState<string>(element.bronzeMedals)

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
                break
        }
    }

    const handleEditOpen = () => {
        setOpen(true)
    }
    const handleEditClose = () => {
        setOpen(false)
    }

    const editedMedalData = {
        chosenCountry: element.chosenCountry,
        chosenCountryCode: element.chosenCountryCode,
        goldMedals: Number(goldMedals),
        silverMedals: Number(silverMedals),
        bronzeMedals: Number(bronzeMedals),
        totalMedals: Number(goldMedals) + Number(silverMedals) + Number(bronzeMedals)
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
                        handleEdit(editedMedalData)
                        setOpen(false)
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