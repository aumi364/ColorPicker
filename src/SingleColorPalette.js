import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import PaletteFooter from "./PaletteFooter";
const styles = {
  Palette: {}
};
export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = {
      format: "hex"
    };
    console.log(this._shades);
  }
  gatherShades(palette, colorToFilterBy) {
    //return all shades
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = [
        ...shades,
        ...allColors[key].filter(color => color.id === colorToFilterBy)
      ];
    }

    return shades.slice(1);
  }
  changeFormat = value => {
    this.setState({ format: value });
  };
  render() {
    let { format } = this.state;
    let { paletteName, emoji, id } = this.props.palette;
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showMore={false}
      />
    ));
    return (
      <div className="SingleColorPalette Palette">
        <Navbar changeFormat={this.changeFormat} showSlider={false} />

        <div className="Palette-colors">
          {colorBoxes}
          <div className="go-back ColorBox">
            <Link to={`/palette/${id}`} className="back-button">
              Go Back
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
