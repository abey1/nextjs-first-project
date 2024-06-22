"use client";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { FormActionType } from "../utils/types";

const initialState = {
  message: "",
};

const FormContainer = ({
  children,
  action,
}: {
  children: React.ReactNode;
  action: FormActionType;
}) => {
  const [state, formAction] = useFormState(action, initialState);
  useEffect(() => {
    console.log(state);
  }, [state]);
  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
