import React from "react";

const FormSelect = ({ disabled, onChange, value, options = [], className }) => {
  return (
    <select
      disabled={disabled}
      className={className}
      onChange={onChange}
      value={value}
    >
      {options.map((option, index) => {
        return (
          <option key={`option-${index}`} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default FormSelect;
