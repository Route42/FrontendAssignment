import { combineEpics, ActionsObservable } from "redux-observable";

const myFirstEpic = (action$: ActionsObservable<any>) => action$

const combinedEpics = combineEpics(
  myFirstEpic
);

export { combinedEpics as epics };