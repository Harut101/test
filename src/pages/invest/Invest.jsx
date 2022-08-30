import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useForm from "../../hooks/useForm";
import fv from "../../services/fieldValidators";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Typography from "@mui/material/Typography";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Tooltip from "@mui/material/Tooltip";

const { required, number } = fv;

function Registration() {
  const [copied, setCopied] = useState(false);
  const { register, errors, onSubmit } = useForm(formSchema, (formFields) => {
    console.log(formFields);
  });
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
        <Box sx={{ mb: "20px" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", fontSize: "px", textAlign: "center" }}
          >
            USDT fast deposit
          </Typography>
        </Box>
        <Box sx={{ mb: "20px" }}>
          <Typography variant="p" sx={{ fontWeight: "bold", fontSize: "13px" }}>
            TRON - TRC20 ADDRESS :
          </Typography>
          <br />
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                maxWidth: "90%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                53b744fed62bfdd6154326e04ab9ea7e05368b9753953eda8f54d2e5a9e195d5
              </Typography>
            </Box>
            <CopyToClipboard
              text={
                "53b744fed62bfdd6154326e04ab9ea7e05368b9753953eda8f54d2e5a9e195d5"
              }
              onCopy={() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1000);
              }}
            >
              <Tooltip open={copied} arrow={true} title="Copied">
                <ContentCopyIcon sx={{ cursor: "pointer" }} />
              </Tooltip>
            </CopyToClipboard>
          </Box>
        </Box>
        <TextField
          label="Amount"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
          error={!!errors["amount"]}
          helperText={errors["amount"]}
          {...register("amount")}
        />

        <TextField
          label="TxId"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
          error={!!errors["txId"]}
          helperText={errors["txId"]}
          {...register("txId")}
        />
        <Button
          onClick={onSubmit}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ padding: "10px" }}
        >
          Invest
        </Button>
      </Box>
    </Box>
  );
}

const formSchema = {
  initialValues: {
    amount: "",
    txId: "",
  },

  validators: {
    amount: [required(), number()],
    txId: [required()],
  },
};

export default Registration;
