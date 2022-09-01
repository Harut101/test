import ImageListItem from "@mui/material/ImageListItem";

function Sonar({ percent, process, run }) {
  return (
    <div className="sonar-wrapper" onClick={run}>
      <div
        className="sonar-emitter"
        style={{
          backgroundColor: `hsl(${percent},100%,50%)`,
          position: "relative",
        }}
      >
        <ImageListItem
          sx={{
            mb: "30px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            style={{ borderRadius: "20px 20px 0 0" }}
            alt="A"
            src="/images/white-logo.svg"
          />
        </ImageListItem>
        {process && (
          <div
            className="sonar-wave"
            style={{ backgroundColor: `hsl(${percent},100%,50%)` }}
          ></div>
        )}
      </div>
    </div>
  );
}

export default Sonar;
