import { Component, createRef } from "react";
import {
  AppBar,
  Toolbar,
  TextField,
  Button,
  List,
  ListItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MapIcon from "@mui/icons-material/Map";
import "../scss/Dashboard.scss";
import Service from "../services/Service";
import DisplayLocation from "./DisplayLocation";

/**
 * @description:- functional component to render the suggestions got from the backend according to the input in the search tab
 * @param {*} props :- containing list of suggestions and a function handler passed from the parent class.
 * @returns :- List of suggesstions to be rendered on the screen
 */
const Options = (props) => {
  const items = props.suggestions.map((item) => (
    <ListItem
      key={item.id}
      onClick={(event) => {
        props.handleClick(item.name);
      }}
    >
      {item.name}
    </ListItem>
  ));
  return <List style={{ color: "black" }}>{items}</List>;
};

/**
 * @description :- the class represents a page containing the tab to search the location by name and then display it on the map.
 */
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.searchRef = createRef();
    this.state = {
      data: [],
      searchName: "",
      options: [],
    };
  }

  /**
   * @description:- function to set the ref value according to the argument value and then call the handleChange function to set the search input to the
   * selected value
   * @param {*} selectedValue :- value selected by user from the suggestions
   */
  handleClick = (selectedValue) => {
    this.searchRef.value = selectedValue;
    this.handleChange();
  };
  /**
   * @description:- the function handles the state change if any in the property of the component by using set state and assigning ref value to the
   * searchName state and then calling the getSuggestions function as callback.
   */
  handleChange = () => {
    this.setState(
      {
        searchName: this.searchRef.value,
      },
      () => {
        if (this.state.searchName.length >= 1) {
          this.getSuggestions();
        }
      }
    );
  };

  /**
   * @description :- to get the suggestions from the backend according to the input given by user in the search tab
   */
  getSuggestions = () => {
    (async () => {
      let response = await new Service().getLocationByName(
        "map/name_suggestions/",
        this.state.searchName,
        "suggestions"
      );
      if (response.status === 200) {
        this.setState({ options: response.data.data });
      } else alert(response);
    })();
  };

  /**
   * @description:- to set the data with the location details fetched from the backend according to the location name given by user
   */
  handleLocation = () => {
    // this.search("map/location/", this.state.searchName);
    (async () => {
      let response = await new Service().getLocationByName(
        "map/location/",
        this.state.searchName,
        "search"
      );
      if (response.status === 200) {
        this.setState({ data: response.data.data });
      } else alert(response);
    })();
  };

  /**
   * @description :- function renders the dashboard html page
   */
  render() {
    return (
      <div className="dashboard-main-div">
        <AppBar className="dashboard-app-bar" position="static" style={{ background: "#00131c" }}>
          <Toolbar>
            <MapIcon />
            <span>
              <h3>Map Location</h3>
            </span>
            <div className="dashboard-search-div">
              <div className="dashboard-input">
                <TextField
                  className="dashboard-search-text"
                  variant="standard"
                  label="Search"
                  name="searchName"
                  value={this.state.searchName}
                  inputRef={(input) => (this.searchRef = input)}
                  onChange={this.handleChange}
                  required
                />
                <Options
                  suggestions={this.state.options}
                  handleClick={this.handleClick}
                />
              </div>
              <div className="dashboard-search-button">
                <Button onClick={this.handleLocation}>
                  <SearchIcon />
                </Button>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <div className="dashboard-location-div">
          {this.state.data.map((location) => (
            <DisplayLocation data={location} key={location.id} />
          ))}
        </div>
      </div>
    );
  }
}
