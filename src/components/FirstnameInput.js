import { TextField } from "@mui/material";
import { rootInputStyles } from "../rootStyles";
import { Controller } from "react-hook-form";

const FirstnameInput = ({ control, errors }) => {
  return (
    <Controller
      name='firstname'
      control={control}
      defaultValue=''
      rules={{ required: "First Name cannot be empty" }}
      render={({ field: { onChange, value } }) => (
        <TextField
          onChange={onChange}
          value={value}
          label={"First Name"}
          variant='outlined'
          sx={{ ...rootInputStyles }}
          error={!!errors.firstname}
          helperText={errors.firstname?.message}
        />
      )}
    />
  );
};

export default FirstnameInput;
