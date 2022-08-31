import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useForm from "../../hooks/useForm";
import fv from "../../services/fieldValidators";
import { Link } from "react-router-dom";
import ImageListItem from "@mui/material/ImageListItem";
//import Typography from "@mui/material/Typography";

const { required } = fv;

function Registration() {
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mb: "30px",
        }}
      >
        <ImageListItem sx={{ height: "130px !important", mb: "10px" }}>
          <img
            style={{ borderRadius: "20px 20px 0 0" }}
            alt="A"
            src="/images/purple-logo.svg"
          />
        </ImageListItem>
        {/* <Typography
          variant="p"
          color={"secondary"}
          sx={{
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Join To Test
        </Typography> */}
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
        }}
      >
        <TextField
          label="First Name"
          variant="outlined"
          error={!!errors["name"]}
          helperText={errors["name"]}
          fullWidth
          sx={{ mb: 4 }}
          {...register("name")}
        />

        <TextField
          label="Last Name"
          variant="outlined"
          error={!!errors["lastName"]}
          helperText={errors["lastName"]}
          fullWidth
          sx={{ mb: 4 }}
          {...register("lastName")}
        />

        <TextField
          label="Nick"
          variant="outlined"
          error={!!errors["nick"]}
          helperText={errors["nick"]}
          fullWidth
          sx={{ mb: 4 }}
          {...register("nick")}
        />

        <TextField
          label="Password"
          variant="outlined"
          error={!!errors["password"]}
          helperText={errors["password"]}
          fullWidth
          sx={{ mb: 4 }}
          {...register("password")}
        />

        <TextField
          label="Phone"
          variant="outlined"
          fullWidth
          error={!!errors["phone"]}
          helperText={errors["phone"]}
          sx={{ mb: 4 }}
          {...register("phone")}
        />

        <TextField
          label="WhatsApp"
          variant="outlined"
          fullWidth
          error={!!errors["whatsApp"]}
          helperText={errors["whatsApp"]}
          sx={{ mb: 4 }}
          {...register("whatsApp")}
        />

        <TextField
          label="Referral Id"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
          error={!!errors["referralId"]}
          helperText={errors["referralId"]}
          {...register("referralId")}
        />
        <Button
          onClick={onSubmit}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ padding: "10px" }}
        >
          sign up
        </Button>
        <Box sx={{ mt: 3, textAlign: "center" }}>
          Already have an account? <Link to="/login">Login</Link>
        </Box>
      </Box>
    </Box>
  );
}

const formSchema = {
  initialValues: {
    name: "",
    lastName: "",
    nick: "",
    password: "",
    phone: "",
    whatsApp: "",
    referralId: "",
  },

  validators: {
    name: [required()],
    lastName: [required()],
    nick: [required()],
    password: [required()],
    phone: [required()],
    whatsApp: [required()],
    referralId: [required()],
  },
};

export default Registration;
