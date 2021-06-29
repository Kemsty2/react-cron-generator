import React, { useState } from "react";
import FormSelect from "../components/UIs/FormSelect/FormSelect.ui";

const HourlyCron = ({
  onChange,
  value = ["0", "0", "00", "1/1", "*", "?", "*"],
  translateFn,
  onError = null,
}) => {
  const [isEvery, setIsEvery] = useState(false);

  const handleEveryHourRadioChange = (e) => {
    e.preventDefault();

    setIsEvery(true);
    onChange(["0", "0", "0/1", "1/1", "*", "?", "*"]);
  };

  const handleHourChange = (e) => {
    e.preventDefault();
    const value = e.target.value;

    if (isEvery && ((value > 0 && value < 24) || value === "")) {
      let val = ["0", "0", "*", "*", "*", "?", "*"];
      val[2] = value ? `0/${value}` : value;
      val[3] = "1/1";
      onChange(val);
    } else {
      if (onError) onError("Invalid Value");
    }
  };

  const handleAtHourChange = (e) => {
    e.preventDefault();
    const value = e.target.value;

    let val = ["0", value[1], "*", "1/1", "*", "?", "*"];
    val[2] = value;
    onChange(val);
  };

  const handleAtMinuteChange = (e) => {
    e.preventDefault();
    const value = e.target.value;

    let val = ["0", "*", value[2], "1/1", "*", "?", "*"];
    val[1] = value;
    onChange(val);
  };

  const buildOptions = (range) => {
    let options = [];
    for (let i = 0; i < range; i++) {
      options.push({ label: (i < 10 ? "0" : "") + i, value: i });
    }

    return options;
  };

  return (
    <div className="tab-body">
      <div className="every-hour">
        <input
          type="radio"
          onChange={handleEveryHourRadioChange}
          checked={isEvery}
          name="every"
        />
        <span>{translateFn("Every")} </span>
        <input
          disabled={!isEvery}
          type="Number"
          onChange={handleHourChange}
          value={value[2].split("/")[1] ? value[2].split("/")[1] : ""}
        />
        <span>{translateFn("hour(s)")}</span>
      </div>
      <div>
        <input
          type="radio"
          onChange={handleEveryHourRadioChange}
          checked={!isEvery}
          name="every"
        />
        <span className="">{translateFn("At")}</span>
        <FormSelect
          disabled={isEvery}
          onChange={handleAtHourChange}
          value={value[2]}
          options={buildOptions(24)}
        />
        <FormSelect
          disabled={isEvery}
          onChange={handleAtMinuteChange}
          value={value[1]}
          options={buildOptions(60)}
        />
      </div>
    </div>
  );
};

export default HourlyCron;
