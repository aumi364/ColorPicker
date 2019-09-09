import React, { Component } from 'react'
import './App.css'
import Palette from './Palette'
import SeedColors from './SeedColors'
import { Route, Switch } from 'react-router-dom'
import { generatePalette } from "./ColorHelper"


export default class App extends Component {
  render() {
    console.log(generatePalette(SeedColors[1]));
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Palette list go</h1>} />
        <Route exact path="/palette/:id" render={() => <h1>Individual palltee</h1>} />
      </Switch>

      // <div>
      //   <Palette palette={generatePalette(SeedColors[1])} />
      // </div>
    )
  }
}


