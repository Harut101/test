import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function ProfileAvatar() {
 
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        bottom: "-70px",
        left: "35px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            width: "100px",
            height: "100px",
            border: "5px solid #fff",
          }}
        />
        <Box sx={{ width: "70%", margin: "20px 0 0 20px" }}>
          <Typography variant="p" sx={{ fontWeight: "bold", fontSize: "20px" }}>
            Brat
          </Typography>
          <br />
          <Typography variant="p" sx={{ fontWeight: "bold" }}>Coins: 0</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileAvatar;
