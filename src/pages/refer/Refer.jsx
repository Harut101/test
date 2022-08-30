import { useState } from "react";
import Box from "@mui/material/Box";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Typography from "@mui/material/Typography";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Tooltip from "@mui/material/Tooltip";
import ImageListItem from "@mui/material/ImageListItem";

function Refer() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState(false);
  const invitationLink = `${window.location.origin}/registration?ref=${2020}`;
  return (
    <Box>
      <Box sx={{ mb: "20px" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", fontSize: "px", textAlign: "center" }}
        >
          Refer a Friend
        </Typography>
      </Box>
      <Box sx={{ borderRadius: 10, boxShadow: "18px 13px 18px 3px #888888" }}>
        <Box>
          <ImageListItem sx={{ height: "250px !important" }}>
            <img
              style={{ borderRadius: "20px 20px 0 0" }}
              alt="A"
              src="/images/refer.jpg"
            />
          </ImageListItem>
        </Box>
        <Box
          sx={{
            height: 200,
            background: "#fff",
            borderRadius: "0 0 10px 10px",
            padding: "20px",
            fontSize: ["12px", "14px", "16px"],
          }}
        >
          <Box sx={{ mb: "20px" }}>
            <Box sx={{ display: "flex", mb: "5px" }}>
              <Typography variant="p" sx={{ fontWeight: "bold", mr: "10px" }}>
                Invitation Link
              </Typography>
              <CopyToClipboard
                text={invitationLink}
                onCopy={() => {
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1000);
                }}
              >
                <Tooltip open={copied} arrow={true} title="Copied">
                  <ContentCopyIcon sx={{ cursor: "pointer", width: "20px" }} />
                </Tooltip>
              </CopyToClipboard>
            </Box>
            <Box
              sx={{
                borderRadius: 2,
                border: "2px solid gray",
                padding: "10px 10px ",
              }}
            >
              <Typography variant="p" sx={{ fontWeight: "bold" }}>
                {invitationLink}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box sx={{ display: "flex", mb: "5px" }}>
              <Typography variant="p" sx={{ fontWeight: "bold", mr: "10px" }}>
                Invitation ID
              </Typography>
              <CopyToClipboard
                text={"2020"}
                onCopy={() => {
                  setCopiedId(true);
                  setTimeout(() => setCopiedId(false), 1000);
                }}
              >
                <Tooltip open={copiedId} arrow={true} title="Copied">
                  <ContentCopyIcon sx={{ cursor: "pointer", width: "20px" }} />
                </Tooltip>
              </CopyToClipboard>
            </Box>

            <Box
              sx={{
                borderRadius: 2,
                border: "2px solid gray",
                padding: "10px 10px ",
              }}
            >
              <Typography variant="p" sx={{ fontWeight: "bold" }}>
                {2020}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Refer;
