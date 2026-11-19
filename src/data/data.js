// "Mock data" is fake test data. We use it so we have something
// to show on the page without needing a real database or API.
//
// It is an ARRAY (a list, written with [ ]) of OBJECTS (written with { }).
// Every object is one user with two properties: username and email.
//
// "export" makes it possible to import this list in other files,
// like this: import { mockData } from "../data/data.js";
export const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];
