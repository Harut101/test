function Sonar({ percent }) {
  return (
    <div className="sonar-wrapper">
      <div
        className="sonar-emitter"
        style={{ backgroundColor: `hsl(${percent},100%,50%)` }}
      >
        <div
          className="sonar-wave"
          style={{ backgroundColor: `hsl(${percent},100%,50%)` }}
        ></div>
      </div>
    </div>
  );
}

export default Sonar;
