import React from "react";

const MinutesCron = ({
  onChange,
  value = ["0", "0/1", "*", "*", "*", "?", "*"],
  translateFn,
  onError,
}) => {
  const handleChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    value = e.target.value;
    if (value > 0 && value < 60) {
      let val = ["0", "*", "*", "*", "*", "?", "*"];
      val[1] = value ? `0/${value}` : val[1];
      this.props.onChange(val);
    } else {
      if (onError) onError("Invalid Value");
    }
  };

  return (
    <div>
      <span>{translateFn("Every")}</span>
      <input
        type="Number"
        onChange={handleChange}
        value={value}
        min={1}
        max={60}
      />{" "}
      {translateFn("minute(s)")}
    </div>
  );
};

export default MinutesCron;
