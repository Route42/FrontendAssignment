import React, {FunctionComponent} from 'react';
import {Provider} from "react-redux";
import VehicleList from "./containers/vehicles/VehicleList";
import {configureStore} from "./configureStore";

const store = configureStore();

const Root: FunctionComponent = () => {
  return (
    <div>
      <Provider store={store}>
        <React.Fragment>
          <div>Good Luck! Don't forget to read the readme :)</div>
          <VehicleList />
        </React.Fragment>
      </Provider>
    </div>
  );
};

export default Root;