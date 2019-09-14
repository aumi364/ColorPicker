import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Palette from './Palette'
import PaletteList from './PaletteList'
import SeedColors from './SeedColors'
import SingleColorPalette from './SingleColorPalette'

import { generatePalette } from "./ColorHelper"
import { Divider } from '@material-ui/core';


export default class App extends Component {
  findPalette(id) {

    return SeedColors.find(function (palette) {

      return palette.id === id;
    })

  }
  render() {

    return (

      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList
              palettes={SeedColors} {...routeProps}
            />
          )}
        />
        <Route exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(this.findPalette(routeProps.match.params.id)
              )} />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={() => (<SingleColorPalette />)}
        />
      </Switch>

      // <div>
      //   <Palette palette={generatePalette(SeedColors[1])} />
      // </div>
    )
  }
}


