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
  TriggerElement: JSX.Element;
  triggerElementMargin: string;
  DialogBody: JSX.Element;
  title: string;
}

export default function ReusableDialogLayout() {
  const dialogVisibility = useDialogVisibility();

  const handleClickOpen = () => {
    setDialogVisibility({ open: true, body: null, title: "" });
  };

  const handleClose = () => {
    setDialogVisibility({ open: false, body: null, title: "" });
  };

  return (
    <div>
      <div
        onClick={handleClickOpen}
        style={{
          width: "fit-content",
          height: "fit-content",
        }}
      ></div>
      <Dialog open={dialogVisibility.open} onClose={handleClose} fullWidth>
        <DialogTitle>
          {dialogVisibility.title ? dialogVisibility.title : ""}
        </DialogTitle>
        <DialogContent>
          {dialogVisibility.body ? dialogVisibility.body : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
