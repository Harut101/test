import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

function ProfileAvatar() {
 
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        bottom: "-30px",
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
      </Box>
    </Box>
  );
}

export default ProfileAvatar;
