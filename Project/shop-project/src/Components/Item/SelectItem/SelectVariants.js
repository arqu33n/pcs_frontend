import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function GroupedSelect() {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">COLOR</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Color">
          <optgroup label="Choose color">
            <option value={1}>White</option>
            <option value={2}>Black</option>
            <option value={4}>Beige</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">SIZE</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Size">
          <ListSubheader>Choose size</ListSubheader>
          <MenuItem value={5}>XS</MenuItem>
          <MenuItem value={6}>S</MenuItem>
          <MenuItem value={7}>L</MenuItem>
          <MenuItem value={8}>M</MenuItem>
          <MenuItem value={9}>XL</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">QUANITY</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Quanity">
          <ListSubheader>Choose quanity</ListSubheader>
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={11}>2</MenuItem>
          <MenuItem value={12}>3</MenuItem>
          <MenuItem value={13}>4</MenuItem>
          <MenuItem value={14}>5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
