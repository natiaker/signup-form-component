import {
  Container,
  Box,
  Typography,
  FormControl,
  TextField,
  Button,
  Link,
} from "@mui/material";

const rootContainerStyles = {
  width: "100%",
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  gap: "45px",
  padding: { xs: "88px 24px 64px", md: "0px" },
};

const rootInputStyles = {
  border: "1px solid #DEDEDE",
  borderRadius: "5px",
  width: "100%",
  marginBottom: "20px",
};

const rootFormControlStyles = {
  padding: { xs: "24px", md: "40px" },
  marginTop: "24px",
  width: "100%",
  bgcolor: "white",
  boxShadow: "0px 8px 0px rgba(0, 0, 0, 0.14688)",
  borderRadius: "10px",
};

const rootFormHeadingStyles = {
  backgroundColor: "#5E54A4",
  boxShadow: "0px 8px 0px rgba(0, 0, 0, 0.14688)",
  borderRadius: "10px",
  padding: "17px 0",
  textAlign: "center",
  color: "white",
};

const rootSubmitButtonStyles = {
  bgcolor: "#38CC8B",
  paddingTop: "15px",
  paddingBottom: "15px",
  ":hover": { bgcolor: "#77E2B3" },
};

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
            variant='outlined'
            sx={{ ...rootInputStyles }}
          />
          <TextField
            variant='outlined'
            sx={{ ...rootInputStyles }}
          />
          <TextField
            variant='outlined'
            sx={{ ...rootInputStyles }}
          />
          <TextField
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
