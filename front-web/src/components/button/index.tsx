import React from "react";
import { ButtonProps } from "../../interfaces/buttonProps";

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center bg-green-600 border-2 text-white text-sm uppercase ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;