import Header from "./components/header/Header";
import Container from "@mui/material/Container";
import useStyles from "./styles/main";
import Pages from "./pages";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Header />
      <Container
        maxWidth="lg"
        sx={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <Pages />
      </Container>
    </div>
  );
}

export default App;
