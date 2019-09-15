import React, { Component } from "react";
import Slider, { Range } from "rc-slider";
import { Link } from "react-router-dom";
import "rc-slider/assets/index.css";
import SelectInput from "./SelectInput";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "./Navbar.css";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      format: ""
    };
  }
  closeSnackbar = () => {
    this.setState({
      open: false
    });
  };
  checkSnackbar = status => {
    this.setState({
      open: status
    });
  };
  getFormat = format => {
    this.setState({ format });
  };
  render() {
    const { level, changeLevel, showSlider } = this.props;
    const { open, format } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to={"/"}> Colorey</Link>
        </div>
        {showSlider && (
          <div className="slider-container">
            <span>Level: {level}</span>

            <div className="slider">
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}
        <SelectInput
          changeFormat={this.props.changeFormat}
          checkSnackbar={this.checkSnackbar}
          getFormat={this.getFormat}
        />
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={open}
          autoHideDuration={3000}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={
            <span id="message-id">
              Format Changed to {format.toUpperCase()}
            </span>
          }
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}
