import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";

export default function Back({ url }) {
  let navigate = useNavigate();
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", cursor: "pointer", mb: "20px" }}
      onClick={() => navigate(url)}
    >
      <ArrowBack />
      <Typography variant="p" sx={{ fontWeight: "bold", ml: "10px" }}>
        Back
      </Typography>
    </Box>
  );
}
