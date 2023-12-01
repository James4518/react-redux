import { CHANGE_COUNTER } from "./vars";
const initState = {
  counter: 100
};
function reducer(state = initState, action) {
  switch (action.type) {
    case CHANGE_COUNTER:
      return { ...state, counter: state.counter + action.counter };
    default:
      return state;
  }
}
export default reducer;

