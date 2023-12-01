import { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchMultidataAction } from "../store/catagory/action";

export class Catagory extends PureComponent {
  componentDidMount() {
    this.props.fetchMultidata();
  }
  render() {
    const { banners, recommends } = this.props;
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
  banners: state.catagory.banners,
  recommends: state.catagory.recommends,
});
// const mapDispatch = (dispatch) => ({
//   fetchMultidata() {
//     dispatch(fetchMultidataAction());
//   }
// });
const mapDispatch = (dispatch) => ({ fetchMultidata: () => dispatch(fetchMultidataAction())});
const cCatagory = connect(mapState, mapDispatch)(Catagory);
export default cCatagory;
