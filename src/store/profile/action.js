import { CHANGE_NAME } from "./vars";

const changeNameAction = (name) => ({
  type: CHANGE_NAME,
  name,
});
export {
  changeNameAction
};
