import { FC } from "react";
import { InputProps } from "../../models";

import styles from "./CustomInput.module.css";

const CustomInput: FC<InputProps> = ({
  inputLabel,
  inputName,
  requiredValue,
  inputType,
  inputRef,
  placeholder,
  pattern,
}) => {
  return (
    <div className={styles.inputPair}>
      <label
        className={`${styles.label} ${
          inputRef?.current?.value ? styles.shrink : ""
        } `}
        htmlFor={inputName}
      >
        {inputLabel}{" "}
      </label>
      <input
        className={`${styles.input}`}
        type={inputType}
        required={requiredValue}
        ref={inputRef}
        name={inputName}
        placeholder={placeholder}
        pattern={pattern}
      />
    </div>
  );
};

export default CustomInput;
