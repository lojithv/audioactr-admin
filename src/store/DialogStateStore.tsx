import { bind } from "@react-rxjs/core";
import { createSignal } from "@react-rxjs/utils";

export const [dialogVisibilityChange$, setDialogVisibility] =
  createSignal<boolean>();
export const [useDialogVisibility, dialogVisibility$] = bind<boolean>(
  dialogVisibilityChange$,
  false
);
