import React, { HTMLInputTypeAttribute } from "react";
import { clsx } from "shared/helpers";

interface Props {
  className?: string;
  inputClass?: string;
  label?: string;
  max?: string | number;
  min?: string | number;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  value?: string | number | readonly string[] | undefined;
}

export const InputField = React.forwardRef(
  (
    {
      className,
      inputClass,
      label,
      max,
      min,
      name,
      onChange,
      placeholder,
      type,
      value,
    }: Props,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={clsx("flex flex-col mb-2", className)}>
        <label className="mb-2 font-semibold">{label}</label>
        <input
          className={clsx("px-2 py-1 border-2 rounded", inputClass)}
          max={max}
          min={min}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          ref={ref}
          type={type}
          value={value}
        />
      </div>
    );
  }
);

InputField.displayName = "Input Field";
