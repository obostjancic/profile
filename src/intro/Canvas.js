import { CanvasSpace, Circle, Const, Line } from "pts";
import React from "react";
import { PtsCanvas } from "react-pts-canvas";
import { randomPoints } from "../utils";

export class Canvas extends PtsCanvas {
  start() {
    const { size } = this.space;
    this.points = randomPoints(Math.max(size.x, size.y), 75);
  }

  animate(time, ftime) {
    const { space, form } = this;
    space.background = "#f5f7fb00";
    const max = Math.max(space.size.x, space.size.y);
    this.points.forEach(({ point, angle }) => {
      point.rotate2D(Const.one_degree / 30, space.center);
      const dot = Circle.fromCenter(point, 2);
      const line = Line.fromAngle(point, angle, 2000);
      const dist = Line.distanceFromPt(line, space.pointer);
      const opacity = Math.max((max - dist * 5) / max - 0.65, 0.075);
      form.stroke(`rgba(0, 119, 178, ${opacity})`).line(line);
      form.fillOnly(`rgba(0, 119, 178, ${opacity})`).circle(dot);
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
      <div className={this.props.name || ""} style={this.props.style}>
        <canvas
          className={this.props.name ? this.props.name + "-canvas" : ""}
          ref={c => (this.canvRef = c)}
          style={this.props.canvasStyle}
        ></canvas>
      </div>
    );
  }
}
