import GoogleMapReact from "google-map-react";
import { Component } from "react";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import LocationDetails from "./LocationDetails";

/**
 * @description:- class is used to display the map and to spot the location selected by the user
 */
export default class DisplayLocation extends Component {
  static coordinates = {
    center: { lat: 20.5937, lng: 78.9629 },
    zoom: 6,
  };
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  /**
   * @returns :- rendering of map on the page
   */
  render() {
    return (
      <div style={{ width: "100%", height: "1100px" }}>
        <GoogleMapReact
          className="display-map"
          defaultCenter={DisplayLocation.coordinates.center}
          defaultZoom={DisplayLocation.coordinates.zoom}
        >
          <LocationDetails
            icon={
              <LocationOnRoundedIcon
                style={{ fontSize: "large", color: "red" }}
              />
            }
            lat={this.state.data.latitude}
            lng={this.state.data.longitude}
            text={this.state.data.name}
            description={this.state.data.description}
            state={this.state.data.state}
            population={this.state.data.population}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
