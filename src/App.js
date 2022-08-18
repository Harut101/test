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
        sx={{ padding: "70px 0 50px 0" }}
      >
        <Pages />
      </Container>
    </div>
  );
}

export default App;
