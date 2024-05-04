import React from "react";
import { InputProps } from "../../interfaces/inputProps";

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  label,
  placeholder,
  type,
  className,
  maxLength,
}) => {
  return (
    <div className="flex flex-col justify-start items-start gap-2">
      <label className="text-black text-xl dark:text-white ">{label}</label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        className={`flex w-full p-2 bg-white border-2 text-gray-500 text-sm ${className}`}
        maxLength={maxLength}
      />
    </div>
  );
};
export default Input;
