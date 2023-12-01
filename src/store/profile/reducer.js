import { CHANGE_NAME } from "./vars";
const initState = {
  name: "aa"
};
function reducer(state = initState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name };
    default:
      return state;
  }
}
export default reducer;

