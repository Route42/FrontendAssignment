# Frontend Assignment
This repo is a 'barebones' project set-up for you to show off your epic programming skills.
Provided is a React component in the form of _VehiclesList_ and an accompanying redux-store; with Epic middleware applied.

## The assignment
The file _Api.ts_ has data loaded in from a local file using require. The JSON it loads contains information of about 30 fake vehicles.

It's your job to fetch this data using _redux-observable_ in combination with _RxJS_ (simulating a webservice); displaying the vehicles' names and ids in a 'list' afterwards.
The important part of this assignment is not the JSX. Fancy JSX might get you bonus points but is really not the focus.

We'd like to assess what you can achieve in `60 minutes`, specifically: 
- RxJS
- Redux
- Selectors ('reselect' is the name of the library)
- Redux-observable
- Typescript

In order to start please make a fork of this repository.


Once you are done, please send us the link to the fork.   
_(if this is not possible please create an _archive_ and send it to tech@route42.nl using WeTransfer)_


## Usefull stuff
VSCode is recommended for it's Typescript integration although not mandatory by any means.
IF you have any questions don't hesitate to ask; we haven't bitten anyone yet (as the Dutch saying goes)
Don't forget to `yarn` or `npm i`   
Using `yarn start` or `npm run start` the server will spawn on `localhost:3000`.
