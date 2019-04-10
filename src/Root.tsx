import React, { Component } from "react";
import VehicleList from "./containers/vehicles/VehicleList";
import {Provider} from "react-redux";
import {configureStore} from "./configureStore";

const store = configureStore();

class Root extends Component<any, any> {

  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <div>Good Luck! Don't forget to read the readme :)</div>
          <VehicleList />
        </React.Fragment>
      </Provider>
    );
  }
}
export default Root;
