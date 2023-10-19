import { useState } from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  Button,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const Appointment = () => {
  const [mode, setMode] = useState("face to face");
  const handleChange = (e, value) => {
    setMode(value);
  };
  return (
    <div className="flex justify-center">
      <div className="w-[80%] p-5 flex flex-col gap-5">
        <h1 className="font-bold text-xl">Appointment</h1>
        <div className="flex flex-col gap-4">
          <ToggleButtonGroup
            value={mode}
            onChange={handleChange}
            color="primary"
            exclusive
          >
            <ToggleButton value="face to face">Face to Face</ToggleButton>
            <ToggleButton value="in person">Video Call</ToggleButton>
          </ToggleButtonGroup>
          <TextField label="Patient's Name" />
          <TextField label="Mobile Number" />
          <TextField label="Doctor" />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="flex gap-3">
              <DemoContainer components={["DatePicker"]}>
                <DatePicker label="Pick a Date" />
              </DemoContainer>
              <DemoContainer components={["TimePicker"]}>
                <TimePicker label="Basic time picker" />
              </DemoContainer>
            </div>
          </LocalizationProvider>
          <Button className="lg:w-fit" variant="contained">
            Get your Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
