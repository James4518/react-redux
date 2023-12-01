import { CHANGE_BANNERS, CHANGERECOMMENDS } from "./vars";
import axios from "axios";

const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners,
});
const changeRecommendsAction = (recommends) => ({
  type: CHANGERECOMMENDS,
  recommends,
});

export const fetchMultidataAction = () => {
  return (dispatch) => {
    axios.get("").then((res) => {
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      dispatch(changeBannersAction(banners));
      dispatch(changeRecommendsAction(recommends));
    });
  };
};
export { changeBannersAction, changeRecommendsAction };
