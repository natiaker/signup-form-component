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
  display: "flex",
  bgcolor: "#38CC8B",
  paddingTop: "15px",
  paddingBottom: "15px",
  ":hover": { bgcolor: "#77E2B3" },
};

export {
  rootContainerStyles,
  rootInputStyles,
  rootFormControlStyles,
  rootFormHeadingStyles,
  rootSubmitButtonStyles,
};
