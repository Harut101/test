import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useForm from "../../hooks/useForm";
import fv from "../../services/fieldValidators";
import Typography from "@mui/material/Typography";
import Back from "../../components/back/Back";

const { required, number, minMax, test } = fv;

function Withdraw() {
  const [balance] = useState(100);
  const { register, errors, onSubmit } = useForm(formSchema, (formFields) => {
    console.log(formFields);
  });
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
              sx={{ fontWeight: "bold", fontSize: "px", textAlign: "center" }}
            >
              Withdrawal Form
            </Typography>
          </Box>
          <Box sx={{ mb: "20px" }}>
            <Typography
              variant="p"
              sx={{ fontWeight: "bold", fontSize: "13px" }}
            >
              Available Balance : {balance}
            </Typography>
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
            label="Password"
            variant="outlined"
            fullWidth
            sx={{ mb: 4 }}
            error={!!errors["password"]}
            helperText={errors["password"]}
            {...register("password")}
          />
          <Box sx={{ mb: "20px" }}>
            <Typography variant="h5" sx={{ fontSize: "12px", color: "gray", textAlign: "center" }}>
              The withdrawal processing time is within{" "}
              <strong style={{ fontSize: "16px", color: "black" }}>6</strong> to{" "}
              <strong style={{ fontSize: "16px", color: "black" }}>72</strong>{" "}
              hours, and the service fee for each withdrawal is charged at{" "}
              <strong style={{ fontSize: "16px", color: "black" }}>2%</strong>{" "}
              to of the cryptocurrency system
            </Typography>
          </Box>
          <Button
            onClick={onSubmit}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ padding: "10px" }}
          >
            Withdraw
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const formSchema = {
  initialValues: {
    amount: "",
    password: "",
  },

  validators: {
    amount: [required(), number(), minMax(0, 100)],
    password: [required(), test(v, "invalid ARA")],
  },
};

function v(value) {
  return value === "AAAA";
}

export default Withdraw;
