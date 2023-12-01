import {
  CHANGE_NAME,
  CHANGE_COUNTER,
  CHANGE_BANNERS,
  CHANGERECOMMENDS,
} from "./vars";
const initState = {
  name: "aa",
  counter: 100,
  banners: [],
  recommends: [],
};
function reducer(state = initState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name };
    case CHANGE_COUNTER:
      return { ...state, counter: state.counter + action.counter };
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    case CHANGERECOMMENDS:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}
export default reducer;

