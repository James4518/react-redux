import {
  CHANGE_COUNTER,
  CHANGE_NAME,
  CHANGE_BANNERS,
  CHANGERECOMMENDS,
} from "./vars";

const changeNameAction = (name) => ({
  type: CHANGE_NAME,
  name,
});
const changeCounterAction = (counter) => ({
  type: CHANGE_COUNTER,
  counter,
});
const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners,
});
const changeRecommendsAction = (recommends) => ({
  type: CHANGERECOMMENDS,
  recommends,
});
export {
  changeNameAction,
  changeCounterAction,
  changeBannersAction,
  changeRecommendsAction,
};
