import { Typography, FormControl, Button, Link } from "@mui/material";
import { rootFormControlStyles, rootSubmitButtonStyles } from "../rootStyles";
import { useForm } from "react-hook-form";

import FirstnameInput from "./FirstnameInput";
import LastnameInput from "./LastnameInput";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

const Form = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    reset();
  };
  const onErrors = errors => console.error(errors);

  return (
    <FormControl sx={{ ...rootFormControlStyles }}>
      <form onSubmit={handleSubmit(onSubmit, onErrors)}>
        <FirstnameInput
          control={control}
          errors={errors}
        />
        <LastnameInput
          control={control}
          errors={errors}
        />
        <EmailInput
          control={control}
          errors={errors}
        />
        <PasswordInput
          control={control}
          errors={errors}
        />
        <Button
          type='submit'
          variant='contained'
          sx={{ ...rootSubmitButtonStyles }}
        >
          CLAIM YOUR FREE TRIAL
        </Button>
        <Typography
          sx={{
            fontSize: "11px",
            textAlign: "center",
            mt: 1,
            color: "#BAB7D4",
          }}
        >
          By clicking the button, you are agreeing to our{" "}
          <Link
            href='#'
            underline='none'
            sx={{ color: "#FF7979" }}
          >
            Terms and Services
          </Link>
        </Typography>
      </form>
    </FormControl>
  );
};

export default Form;
