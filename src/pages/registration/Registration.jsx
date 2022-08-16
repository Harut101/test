import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useForm from "../../hooks/useForm";
import fv from "../../services/fieldValidators";

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
        >
          register
        </Button>
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
