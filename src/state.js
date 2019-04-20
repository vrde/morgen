import { observe } from "./morgen";

const state = observe({
  items: [
    { id: 1, value: "Create new JavaScript framework" },
    { id: 2, value: "Make omelette" },
    { id: 3, value: "Celebrate April 20th." }
  ]
});

window.state = state;
export default state;
