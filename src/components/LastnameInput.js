import { TextField, Typography } from "@mui/material";
import { rootErrorMsgStyles, rootInputStyles } from "../rootStyles";
import { Controller } from "react-hook-form";

const LastnameInput = ({ control, errors }) => {
  return (
    <Controller
      name='lastname'
      control={control}
      defaultValue=''
      rules={{ required: "Last Name cannot be empty" }}
      render={({ field: { onChange, value } }) => (
        <TextField
          onChange={onChange}
          value={value}
          label='Last Name'
          variant='outlined'
          sx={{ ...rootInputStyles }}
          error={!!errors.lastname}
          helperText={
            <Typography sx={{ ...rootErrorMsgStyles }}>
              {errors.lastname?.message}
            </Typography>
          }
        />
      )}
    />
  );
};

export default LastnameInput;
