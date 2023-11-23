import { MouseEventHandler } from 'react';
import { Dayjs } from 'dayjs';

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: 'button' | 'submit';
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
}

export interface BasicDatePickerProps {
  label: string;
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
}

export interface selectProps {
  minWidth: Number; // Adjusted the type for minWidth
  aria_label: string;
  label: string;
  value: String;
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => string;
  data: Array<{ value: string; label: string }>;
}
