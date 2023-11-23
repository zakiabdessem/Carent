// BasicDatePicker.tsx

'use client';
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { BasicDatePickerProps } from "../types/index";

const BasicDatePicker = ({ label, value, onChange }: BasicDatePickerProps) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DatePicker']}>
      <DatePicker label={label} value={value} onChange={onChange} />
    </DemoContainer>
  </LocalizationProvider>
);

export default BasicDatePicker;
