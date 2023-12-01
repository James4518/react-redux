import { CHANGE_COUNTER } from "./vars";
const changeCounterAction = (counter) => ({
  type: CHANGE_COUNTER,
  counter,
});
export {
  changeCounterAction,
};
