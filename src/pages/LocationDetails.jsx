import { Card, CardContent } from "@mui/material";
import { Component } from "react";
import "../scss/LocationDetails.scss";

/**
 * @description:- class represents a particular location details which is to be shown on the map
 */
export default class LocationDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: this.props.icon,
      lat: this.props.lat,
      long: this.props.long,
      text: this.props.text,
      description: this.props.description,
      state: this.props.state,
      population: this.props.population,
      display: "none",
    };
  }

  /**
   * @description:- to handle the mouse hover event and then setting the display state to block so to show the other details about
   * the location on the map.
   */
  handleMouseEntry = () => {
    this.setState({
      display: "block",
    });
  };

  /**
   * @description:- to handle the mouse leaving event and then setting the display state to none so to hide the other details about
   * the location
   */
  handleMouseLeave = () => {
    this.setState({
      display: "none",
    });
  };

  /**
   * @description :- details about the location which are to be renderd on the map
   */
  render() {
    return (
      <div
        className="location-main"
        onMouseEnter={this.handleMouseEntry}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.state.icon}
        {this.state.text}
        <div
          style={{
            display: this.state.display,
          }}
        >
          <Card
            className="location-card"
            style={{ backgroundColor: "lightyellow" }}
          >
            <CardContent>
              <b>
                <u>Description:-</u>
              </b>{" "}
              {this.state.description}
              <br />
              <b>
                <u>State:-</u>
              </b>{" "}
              {this.state.state}
              <br />
              <b>
                <u>Population:-</u>
              </b>{" "}
              {this.state.population}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
