import { useState } from "react"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import DialogContentText from "@mui/material/DialogContentText"
import Button from "@mui/material/Button"


const EditData = ({ isOpen, setEditOpen }: any) => {

    const [dialog, setOpen] = useState<boolean>(isOpen)

    const handleClose = () => {
        setEditOpen(false)
    }

    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">
                {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose} autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditData