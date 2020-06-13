import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import PaletteFooter from "./PaletteFooter";
import Navbar from "./Navbar";
import { withStyles } from "@material-ui/styles";
const styles = {};
class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
  }
  changeLevel = level => {
    this.setState({ level });
  };
  changeFormat = value => {
    this.setState({ format: value });
  };
  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        moreUrl={`/palette/${id}/${color.id}`}
        showMore={true}
      />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
          showSlider={true}
        />
        {/* navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer */}
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
export default withStyles(styles)(Palette);
