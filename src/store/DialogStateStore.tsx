import { bind } from "@react-rxjs/core";
import { createSignal } from "@react-rxjs/utils";
import React from "react";

export const [dialogVisibilityChange$, setDialogVisibility] = createSignal<{
  open: boolean;
  body: React.ReactNode;
  title: string;
}>();
export const [useDialogVisibility, dialogVisibility$] = bind<{
  open: boolean;
  body: React.ReactNode;
  title: string;
}>(dialogVisibilityChange$, { open: false, body: null, title: "" });
