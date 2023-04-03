import {
  Container,
  Box,
  Typography,
  FormControl,
  TextField,
  Button,
  Link,
} from "@mui/material";
import {
  rootContainerStyles,
  rootInputStyles,
  rootFormControlStyles,
  rootFormHeadingStyles,
  rootSubmitButtonStyles,
} from "./rootStyles";
import { useForm, Controller } from "react-hook-form";

function App() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  const onErrors = errors => console.error(errors);

  return (
    <Container sx={{ ...rootContainerStyles }}>
      <Box
        sx={{
          maxWidth: "525px",
          color: "white",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography variant='h2'>Learn to code by watching others</Typography>
        <Typography>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </Typography>
      </Box>
      <Box sx={{ maxWidth: "540px", width: "100%" }}>
        <Typography sx={{ ...rootFormHeadingStyles }}>
          Try it free 7 days then $20/mo. thereafter
        </Typography>
        <FormControl sx={{ ...rootFormControlStyles }}>
          <form onSubmit={handleSubmit(onSubmit, onErrors)}>
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
                  helperText={errors.lastname?.message}
                />
              )}
            />
            <Controller
              name='email'
              control={control}
              defaultValue=''
              rules={{
                required: "Email cannot be empty",
                pattern: {
                  value: /^\S+@\S+$/i,
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
                  helperText={errors.email?.message}
                />
              )}
            />
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
      </Box>
    </Container>
  );
}

export default App;
