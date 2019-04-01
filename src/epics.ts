
import { combineEpics } from 'redux-observable';
import { epics as vehicleEpics } from './containers/vehicles/epics';

export default combineEpics(
  vehicleEpics
)