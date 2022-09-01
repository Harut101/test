import { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Sonar from "../../components/sonar/Sonar";
import Typography from "@mui/material/Typography";

function TaskBoard() {
  const [percent, setPercent] = useState(0);
  const [mineInProcess, setMineInProcess] = useState(false);
  const timer = useRef();

  useEffect(() => {
    if (mineInProcess && percent < 100) {
      timer.current = setTimeout(() => {
        setPercent((prev) => prev + 10);
      }, 2000);
    }

    if(mineInProcess && percent === 100){
        //fetch complete
        setMineInProcess(false);
    }
    return () => clearTimeout(timer.current);
  }, [timer, mineInProcess, percent]);

  function runMine() {
    if (percent < 100) {
        setMineInProcess(true);
    }
  }

  return (
    <Box>
      <Box sx={{ mb: "20px" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Run and Mine
        </Typography>
      </Box>
      <Sonar percent={percent} process={mineInProcess} run={runMine} />
    </Box>
  );
}

export default TaskBoard;
