import { PureComponent } from "react";
import { connect } from "react-redux";
import axios from "axios";
import store from "../store";
import { changeBannersAction, changeRecommendsAction } from "../store/action";

export class Catagory extends PureComponent {
  constructor() {
    super();
    this.state = {
      banners: [],
      recommends: [],
    };
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const banners = store.getState().banners;
      const recommends = store.getState().recommends;
      this.setState({ banners });
      this.setState({ recommends });
    });
    axios.get("").then((res) => {
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      this.props.changeBanners(banners);
      this.props.changeRecommends(recommends);
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { banners, recommends } = this.state;
    return (
      <div>
        <h1>catagory</h1>
        <p>banners:</p>
        <ul>
          {banners.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
        <p>recommends:</p>
        <ul>
          {recommends.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => ({
  banners: state.banners,
  recommends: state.recommends,
});
const mapDispatch = (dispatch) => ({
  changeBanners(banners) {
    dispatch(changeBannersAction(banners));
  },
  changeRecommends(recommends) {
    dispatch(changeRecommendsAction(recommends));
  },
});
const cCatagory = connect(mapState, mapDispatch)(Catagory);
export default cCatagory;
