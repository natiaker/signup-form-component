import { TextField } from "@mui/material";
import { rootInputStyles } from "../rootStyles";
import { Controller } from "react-hook-form";

const PasswordInput = ({ control, errors }) => {
  return (
    <Controller
      name='password'
      control={control}
      defaultValue=''
      rules={{ required: "Password cannot be empty" }}
      render={({ field: { onChange, value } }) => (
        <TextField
          onChange={onChange}
          value={value}
          type='password'
          label='Password'
          variant='outlined'
          sx={{ ...rootInputStyles }}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      )}
    />
  );
};

export default PasswordInput;
