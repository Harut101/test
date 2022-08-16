import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Registration() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
        }}
      >
        <TextField label="Nick" variant="outlined" fullWidth sx={{ mb: 4 }} />

        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
        />
      </Box>
    </Box>
  );
}

export default Registration;
