import React from "react";
import "./tree.css";
import VisibilitySensor from "react-visibility-sensor";
import data from "./tree.json";

const animation = (min, max) => {
  const rand = Math.random() * (max - min) + min;
  return `${rand}s ease 0s normal forwards 1 fadein`;
};

const styles = (active, { top, left }) => ({
  visibility: active ? "visible" : "hidden",
  position: "absolute",
  top,
  left,
  animation: active ? animation(1.5, 2) : "",
});

const TreeCircle = ({ id, position, size, active }) => {
  return <div id={id} className={`tree-circle-${size}`} style={styles(active, position)} />;
};

const TreeCircleText = ({ children, position, size, active }) => (
  <div className={`tree-circle-${size}-text`} style={styles(active, position)}>
    {children}
  </div>
);

const TreeCircleWrapper = ({ active, data }) => (
  <>
    <TreeCircle active={active} id={data.id} size={data.size} position={data.position} />
    <TreeCircleText active={active} size={data.text.size} position={data.text.position}>
      {data.text.name}
    </TreeCircleText>
  </>
);
export default class Tree extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  render() {
    const { active } = this.state;
    return (
      <VisibilitySensor
        partialVisibility={true}
        minTopValue={100}
        onChange={isVisible => {
          this.setState({ active: isVisible === true ? true : active });
        }}
      >
        <div
          className={active ? "tree" : ""}
          style={{
            textAlign: "center",
            position: "relative",
            margin: "0 12.5% ",
            background: "url(tree3.svg) no-repeat center",
            backgroundSize: "contain",
            visibility: active ? "visible" : "hidden",
          }}
        >
          <img src="tree.svg" alt="" style={{ visibility: "hidden" }} />
          {data.map(el => (
            <TreeCircleWrapper key={el.id} data={el} active={active} />
          ))}
        </div>
      </VisibilitySensor>
    );
  }
}
