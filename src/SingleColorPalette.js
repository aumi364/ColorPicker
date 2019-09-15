import React, { Component } from "react";
import ColorBox from "./ColorBox";
export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
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
  render() {
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color.hex}
        showMore={false}
      />
    ));
    return (
      <div className="Palette">
        <h1>Single color Palette</h1>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
