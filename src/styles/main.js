import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  app: {
    width: "100%",
    minHeight: "100vh",
    position: "relative",
    boxSizing: "border-box",
    margin: "0 auto",
    backgroundColor: "#e5e5e5"
  },
}));

export default useStyles;
