import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { selectProps } from '../types/index';

export default function BasicSelect({
  minWidth,
  aria_label,
  value,
  label,
  onChange,
  data,
}: selectProps) {
  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{aria_label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          /*onChange={onChange}*/
        >
          {data.map(item => {
            return <MenuItem value={item.value}>{item.label}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
