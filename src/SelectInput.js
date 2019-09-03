import React, { Component } from 'react'
import Select from "@material-ui/core/Select"
import MenuItem from '@material-ui/core/MenuItem';
export default class SelectInput extends Component {
       constructor(props) {
              super(props)
              this.state = {
                     format: "hex", open: true
              }
       }
       handleChange = (e) => {
              this.setState({ format: e.target.value, open: true },
                     this.props.checkSnackbar(this.state.open),
              )
              this.props.changeFormat(e.target.value)
              this.props.getFormat(e.target.value)
       }

       render() {
              const { format } = this.state;
              const { handleChange } = this.props
              return (
                     <div className="select-container">
                            <Select value={format} onChange={this.handleChange}>
                                   <MenuItem value="hex">Hex-#ffffff</MenuItem>
                                   <MenuItem value="rgb">RGB- rgb(255,255,255)</MenuItem>
                                   <MenuItem value="rgba">RGBA- rgba(255,255,255,1.0)</MenuItem>
                            </Select>

                     </div >
              )
       }
}
