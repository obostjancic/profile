import { CanvasSpace, Circle, Const, Line } from "pts";
import React from "react";
import { PtsCanvas } from "react-pts-canvas";
import styled from "styled-components";
import { theme } from "../../components";
import { randomPoints } from "../../utils";

const CanvasWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  background-color: ${theme.backgroundOverlay};
  z-index: -1;
  box-shadow: inset 0px 0px 10px #a6c3cf;
`;

export class Canvas extends PtsCanvas {
  start() {
    const { size } = this.space;
    this.points = randomPoints(Math.max(size.x, size.y), 75);
  }

  animate(time, ftime) {
    const { space, form } = this;
    space.background = theme.backgroundCanvas;
    const max = Math.max(space.size.x, space.size.y);
    this.points.forEach(({ point, angle }) => {
      point.rotate2D(Const.one_degree / 30, space.center);
      const dot = Circle.fromCenter(point, 2);
      const line = Line.fromAngle(point, angle, 2000);
      const dist = Line.distanceFromPt(line, space.pointer);
      const opacity = Math.max((max - dist * 5) / max - 0.65, 0.075);
      const opacityHex = (opacity * 256).toString(16).substring(0, 2);
      form.stroke(`${theme.primary}${opacityHex}`).line(line);
      form.fillOnly(`${theme.primary}${opacityHex}`).circle(dot);
    });
  }

  init() {
    this.space = new CanvasSpace(this.canvRef).setup({
      bgcolor: this.props.background,
      resize: true,
      retina: true,
    });

    this.form = this.space.getForm();
    this.space.add(this);
  }

  render() {
    return (
      <CanvasWrapper className={this.props.name || ""} style={this.props.style}>
        <canvas
          className={this.props.name ? this.props.name + "-canvas" : ""}
          ref={c => (this.canvRef = c)}
          style={this.props.canvasStyle}
        ></canvas>
      </CanvasWrapper>
    );
  }
}
