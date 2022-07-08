import { useState } from "react"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"

import DialogActions from "@mui/material/DialogActions"
import Button from "@mui/material/Button"

import MedalDataType from '../../types/MedalDataType'

const DeleteData = ({ element, handleDelete }: { element: MedalDataType, handleDelete: (id: string) => void }): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false)

    const handleDeleteOpen = () => {
        setOpen(true)
    }
    const handleDeleteClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleDeleteOpen}
                style={{ width: '50px' }}>
                Delete
            </Button>
            <Dialog
                open={open}
                onClose={handleDeleteClose}>
                <DialogTitle id="edit">
                    Are you sure you want to remove: {element.chosenCountry}?
                </DialogTitle>
                <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" onClick={handleDeleteClose}>No</Button>
                    <Button variant="contained" color="secondary" onClick={() => handleDelete(element.chosenCountryCode)} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default DeleteData