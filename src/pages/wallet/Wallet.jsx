import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useForm from "../../hooks/useForm";
import fv from "../../services/fieldValidators";
import Typography from "@mui/material/Typography";
import Back from "../../components/back/Back";

const { required } = fv;

function Wallet() {
  const [changeMode, setChangeMode] = useState(false);
  const [address, setAddress] = useState("");

  const { errors, register, onSubmit, setValue, getValue } = useForm(
    formSchema,
    (formFields) => {
      setChangeMode(false);
      setAddress(formFields.withDrawAddress);
    }
  );

  const addressRegister = register("withDrawAddress");

  return (
    <Box>
      <Back url="/profile" />
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
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              My Wallet
            </Typography>
          </Box>
          {!address && (
            <Box sx={{ mb: "20px" }}>
              <Typography
                variant="h5"
                sx={{ fontSize: "14px", textAlign: "center" }}
              >
                Bind your USDT - Tron TRC20 Address for getting to withdraw
              </Typography>
            </Box>
          )}
          {address && !changeMode && (
            <Box
              sx={{
                maxWidth: "90%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                mb: "10px",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "14px",
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                Crypto Address
              </Typography>
              <br />
              <Typography
                variant="p"
                sx={{
                  fontSize: "16px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {address}
              </Typography>
            </Box>
          )}
          {(!address || changeMode) && (
            <TextField
              label="USDT Tron TRC20 Address"
              variant="outlined"
              fullWidth
              value={getValue("withDrawAddress")}
              sx={{ mb: 4 }}
              error={!!errors["withDrawAddress"]}
              helperText={errors["withDrawAddress"]}
              {...addressRegister}
            />
          )}
          {(!address || changeMode) && (
            <Button
              onClick={onSubmit}
              variant="contained"
              color="primary"
              fullWidth
              sx={{ padding: "10px" }}
            >
              bind
            </Button>
          )}
          {address && !changeMode && (
            <Button
              onClick={() => {
                setValue("withDrawAddress", address);
                setChangeMode(true);
              }}
              variant="contained"
              color="primary"
              fullWidth
              sx={{ padding: "10px" }}
            >
              Change
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}

const formSchema = {
  initialValues: {
    withDrawAddress: "",
  },

  validators: {
    withDrawAddress: [required()],
  },
};

export default Wallet;
