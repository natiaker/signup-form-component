import { TextField, Typography } from "@mui/material";
import { rootErrorMsgStyles, rootInputStyles } from "../rootStyles";
import { Controller } from "react-hook-form";

const EmailInput = ({ control, errors }) => {
  return (
    <Controller
      name='email'
      control={control}
      defaultValue=''
      rules={{
        required: "Email cannot be empty",
        pattern: {
          value: /\S+@\S+\.\S+/i,
          message: "Looks like this is not an email",
        },
      }}
      render={({ field: { onChange, value } }) => (
        <TextField
          onChange={onChange}
          value={value}
          label='Email Address'
          variant='outlined'
          sx={{ ...rootInputStyles }}
          error={!!errors.email}
          helperText={
            <Typography sx={{ ...rootErrorMsgStyles }}>
              {errors.email?.message}
            </Typography>
          }
        />
      )}
    />
  );
};

export default EmailInput;
