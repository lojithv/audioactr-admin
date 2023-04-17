import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  setDialogVisibility,
  useDialogVisibility,
} from "../store/DialogStateStore";

interface Props {
  TriggerElement: React.ReactNode;
  triggerElementMargin: string;
}

export default function ReusableDialogLayout({
  TriggerElement,
  triggerElementMargin,
}: Props) {
  const open = useDialogVisibility();

  const handleClickOpen = () => {
    setDialogVisibility(true);
  };

  const handleClose = () => {
    setDialogVisibility(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen} sx={{marginBottom:"10px"}}>
        {buttonText}
      </Button> */}
      <div
        onClick={handleClickOpen}
        style={{
          width: "fit-content",
          height: "fit-content",
          marginBottom: triggerElementMargin,
        }}
      >
        {TriggerElement}
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <div>Test</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
