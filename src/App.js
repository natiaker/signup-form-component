import { Container, Box, Typography } from "@mui/material";
import { rootContainerStyles, rootFormHeadingStyles } from "./rootStyles";
import Form from "./components/Form";

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
        <Form />
      </Box>
    </Container>
  );
}

export default App;
