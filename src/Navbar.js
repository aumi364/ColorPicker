import React, { Component } from 'react'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import SelectInput from './SelectInput'
import "./Navbar.css"

export default class extends Component {
       render() {
              const { level, changeLevel } = this.props;
              return (
                     <header className="Navbar">
                            <div className="logo">
                                   <a href='#'>colorey </a>

                            </div>
                            <div className="slider-container">
                                   <div className="slider">
                                          <Slider defaultValue={level}
                                                 min={100}
                                                 max={900}
                                                 step={100}
                                                 onAfterChange={changeLevel}
                                          />
                                   </div>
                            </div>
                            <SelectInput changeFormat={this.props.changeFormat} />
                     </header>
              )
       }
}
