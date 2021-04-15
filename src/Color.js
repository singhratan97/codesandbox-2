import { useState } from "react";

const InputBox = (props) => {
  const { color, setColor } = props;
  return (
    <input
      onChange={(e) => {
        setColor(e.target.value);
      }}
      type="text"
      style={{ backgroundColor: color || "red" }}
      placeholder="Choose color"
    />
  );
};

const RectBox = ({ color }) => {
  const style = {
    backgroundColor: color || "red",
    width: "177px",
    margin: "0 auto",
    height: "20px",
    border: "1px solid black"
  };
  return <div style={style}></div>;
};

export const Color = () => {
  const [color, setColor] = useState("pink");
  const [colorArr, setColorArr] = useState([]);
  const [display, setDisplay] = useState("block");
  const handler = () => {
    color ? setColorArr([...colorArr, color]) : setColorArr([...colorArr]);
  };

  console.log(colorArr);
  return (
    <div>
      <p>{color}</p>
      <InputBox color={color} setColor={setColor} />
      <button onClick={handler}>Add Color div</button>
      <br />
      <br />
      <button
        onClick={() => {
          if (display === "block") setDisplay("none");
          else setDisplay("block");
        }}
      >
        Toggle
      </button>
      <br />
      <br />
      {colorArr.join()}
      <div style={{ display: display }}>
        {colorArr.map((col) => (
          <RectBox color={col} />
        ))}
      </div>
    </div>
  );
};
