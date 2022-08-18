import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function ImgMediaCard({ image, title, desc }) {
  return (
    <Box
      sx={{
        padding: "10px",
        maxWidth: ["100%", "100%", "100%", 400],
        width: "100%",
        cursor: "pointer",
      }}
    >
      <Card sx={{ width: "100%" }}>
        <CardMedia component="img" alt="team" height="140" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
