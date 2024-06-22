export type FormActionType = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;
