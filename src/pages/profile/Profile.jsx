import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ImageListItem from "@mui/material/ImageListItem";
import ProfileAvatar from "../../components/profileAvatar/ProfileAvatar";
import MenuCard from "../../components/menuCard/MenuCard";

function Profile() {
  return (
    <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: ["100%", "90%"],
          padding: "0 0 40px 0",
          backgroundColor: "#fff",
          boxShadow: "0px 0px 20px gray",
          borderRadius: "20px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <ImageListItem sx={{ height: "250px !important" }}>
            <img
              style={{ borderRadius: "20px 20px 0 0" }}
              alt="A"
              src="https://img.freepik.com/premium-vector/ethereum-cryptocurrency-digital-coin-presentation-computer-circuit-board-vector-blockchain_185386-777.jpg?w=2000"
            />
          </ImageListItem>
          <ProfileAvatar />
        </Box>
        <Box sx={{ marginTop: "80px", padding: ["10px 20px", "10px 40px"] }}>
          <Box>
            <Button variant="contained" color="primary">
              Invest
            </Button>
            <Button variant="contained" color="secondary" sx={{ ml: "10px" }}>
              withdraw
            </Button>
          </Box>
          <Box
            sx={{
              pt: "50px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <MenuCard image={"/images/team.jpg"} title='My Team'/>
            <MenuCard image={"/images/refer.jpg"} title='Refer a Friend'/>
            <MenuCard image={"/images/send-msg.webp"} title='Send a Message'/>
            <MenuCard image={"/images/wallet.webp"} title='Wallet'/>
            <MenuCard image={"/images/about-us.jpg"} title='About Us'/>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Profile;
