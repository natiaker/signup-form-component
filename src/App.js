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

function App() {
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
          <TextField
            label='First Name'
            variant='outlined'
            sx={{ ...rootInputStyles }}
          />
          <TextField
            label='Last Name'
            variant='outlined'
            sx={{ ...rootInputStyles }}
          />
          <TextField
            label='Email Address'
            variant='outlined'
            sx={{ ...rootInputStyles }}
          />
          <TextField
            label='Password'
            variant='outlined'
            sx={{ ...rootInputStyles }}
          />
          <Button
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
        </FormControl>
      </Box>
    </Container>
  );
}

export default App;
