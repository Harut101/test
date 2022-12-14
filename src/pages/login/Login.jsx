import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useForm from "../../hooks/useForm";
import fv from "../../services/fieldValidators";
import { Link } from "react-router-dom";
import ImageListItem from "@mui/material/ImageListItem";

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
      <ImageListItem sx={{ height: "130px !important", mb: "30px" }}>
        <img
          style={{ borderRadius: "20px 20px 0 0" }}
          alt="A"
          src="/images/purple-logo.svg"
        />
      </ImageListItem>
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
        }}
      >
        <TextField
          label="Nick"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
          error={!!errors["nick"]}
          helperText={errors["nick"]}
          {...register("nick")}
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
        <Button
          onClick={onSubmit}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ padding: "10px" }}
        >
          sign in
        </Button>
        <Box sx={{ mt: 3, textAlign: "center" }}>
          Don’t have an account? <Link to="/registration">Create new one</Link>
        </Box>
      </Box>
    </Box>
  );
}

const formSchema = {
  initialValues: {
    nick: "",
    password: "",
  },

  validators: {
    nick: [required()],
    password: [required()],
  },
};

export default Registration;
