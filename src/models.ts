import { RefObject } from "react";

export interface InputProps {
  inputName: string;
  inputLabel: string;
  requiredValue: boolean;
  readOnly?: boolean;
  inputType: string;
  inputRef?: RefObject<HTMLInputElement>;
  placeholder?: string;
  pattern?: string;
}
