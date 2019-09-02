import React, { Component } from 'react'
import './App.css'
import Palette from './Palette'
import SeedColors from './SeedColors'

import { generatePalette } from "./ColorHelper"


export default class App extends Component {
  render() {
    console.log(generatePalette(SeedColors[4]));
    return (
      <div>
        <Palette palette={generatePalette(SeedColors[4])} />
      </div>
    )
  }
}


