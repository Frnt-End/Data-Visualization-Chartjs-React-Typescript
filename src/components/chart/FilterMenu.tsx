import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SelectRangeStyles } from "../../styles/FilterMenu.styles";

interface FilterMenuProps {
  onYearsChange: (startYear: number, endYear: number) => void;
  startYear: number;
  endYear: number;
}

const FilterMenu: React.FC<FilterMenuProps> = ({
  onYearsChange,
  startYear: initialStartYear,
  endYear: initialEndYear,
}) => {
  const [startYear, setStartYear] = useState<number>(initialStartYear);
  const [endYear, setEndYear] = useState<number>(initialEndYear);

  const handleYearChange = (e: SelectChangeEvent<string | number>) => {
    const { name, value } = e.target;
    const selectedYear = typeof value === "number" ? value : parseInt(value);

    if (name === "startYear") {
      setStartYear(selectedYear);
      onYearsChange(selectedYear, endYear);
    } else if (name === "endYear") {
      setEndYear(selectedYear);
      onYearsChange(startYear, selectedYear);
    }
  };

  return (
    <SelectRangeStyles>
      <h2>Displaying data </h2>
      <FormControl className="form-control">
        <InputLabel id="start-year-label">From</InputLabel>
        <Select
          name="startYear"
          labelId="start-year-label"
          value={startYear}
          label="From"
          onChange={handleYearChange}
        >
          {Array.from(
            { length: 2023 - 2001 + 1 },
            (_, index) => 2001 + index
          ).map((year) => (
            <MenuItem key={year} value={year} disabled={year >= endYear}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="end-year-label">To</InputLabel>
        <Select
          name="endYear"
          labelId="end-year-label"
          value={endYear}
          label="To"
          onChange={handleYearChange}
        >
          {Array.from(
            { length: 2023 - 2001 + 1 },
            (_, index) => 2001 + index
          ).map((year) => (
            <MenuItem key={year} value={year} disabled={year <= startYear}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </SelectRangeStyles>
  );
};

export default FilterMenu;
