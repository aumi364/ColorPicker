import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Palette from './Palette'
import SeedColors from './SeedColors'

import { generatePalette } from "./ColorHelper"
import { Divider } from '@material-ui/core';


export default class App extends Component {
  findPalette(id) {

    return SeedColors.find(function (palette) {

      return palette.id === id;
    })

  }
  render() {
    console.log(this.findPalette(2));
    return (

      <Switch>
        <Route exact path="/" render={() => <h1>Palette list go</h1>} />
        <Route exact path="/palette/:id"
          render={(routeProps) => (


            <Palette
              palette={generatePalette(this.findPalette(routeProps.match.params.id)
              )}


            />


          )}
        />
      </Switch>

      // <div>
      //   <Palette palette={generatePalette(SeedColors[1])} />
      // </div>
    )
  }
}


