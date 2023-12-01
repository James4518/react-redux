import { CHANGE_BANNERS, CHANGERECOMMENDS} from "./vars"
const initState = {
  banners: [],
  recommends: [],
};
function reducer(state = initState, action) {
  switch (action.type) {
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    case CHANGERECOMMENDS:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}
export default reducer;

