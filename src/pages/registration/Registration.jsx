import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
        />

        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
        />

        <TextField label="Nick" variant="outlined" fullWidth sx={{ mb: 4 }} />

        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
        />

        <TextField label="Phone" variant="outlined" fullWidth sx={{ mb: 4 }} />

        <TextField
          label="WhatsApp"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
        />

        <TextField
          label="Referral Id"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
        />
        <Button variant="contained" color="primary" fullWidth>
          register
        </Button>
      </Box>
    </Box>
  );
}

export default Registration;
