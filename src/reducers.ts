import { reducer as vehiclesReducer } from './containers/vehicles/reducer';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  vehiclesReducer
});

export default rootReducers;