'use client';

import { useEffect, useState } from 'react';
import BasicDatePicker from './DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import BasicSelect from './Selecter';
function RentalBox() {
  const nowDate = dayjs();
  const [selectedData, setSelectedData] = useState<Record<string, Dayjs>>({
    pickUpDate: nowDate,
    returnDate: nowDate,
  });

  useEffect(() => {
    console.log(selectedData);
  }, [selectedData]);

  return (
    <div className="flex justify-center items-center gap-8">
      <BasicSelect   data={[{ value: 'ldhdh', label: 'batna' }]} />
      <BasicDatePicker
        label="Pickup Date"
        value={selectedData.pickUpDate}
        onChange={(newPickUpDate: Dayjs | null) => {
          if (newPickUpDate)
            setSelectedData(prevState => ({
              ...prevState,
              pickUpDate: newPickUpDate,
            }));
        }}
      />

      <BasicDatePicker
        label="Return Date"
        value={selectedData.pickUpDate}
        onChange={(newPickUpDate: Dayjs | null) => {
          if (newPickUpDate) {
            setSelectedData(prevState => ({
              ...prevState,
              pickUpDate: newPickUpDate,
            }));
          }
        }}
      />
    </div>
  );
}

export default RentalBox;
