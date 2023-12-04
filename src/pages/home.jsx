import { PureComponent } from "react";
import { connect } from "react-redux";
import { changeCounterAction } from "../store/features/home";

export class Home extends PureComponent {
  btnClick(num) {
    this.props.changeCounter(num);
  }
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h1>Home</h1>
        <p>{counter}</p>
        <div id="buttons">
          <button onClick={() => this.btnClick(1)}>+1</button>
          <button onClick={() => this.btnClick(5)}>+5</button>
          <button onClick={() => this.btnClick(10)}>+10</button>
          <button onClick={() => this.btnClick(-1)}>-1</button>
          <button onClick={() => this.btnClick(-5)}>-5</button>
          <button onClick={() => this.btnClick(-10)}>-10</button>
        </div>
      </div>
    );
  }
}
const mapState = (state) => ({
  counter: state.home.counter,
});
// const mapDispatch = (dispatch) => ({
//   changeCounterAction(num) {
//     dispatch(changeCounterAction(num));
//   },
// });
const mapDispatch = (dispatch) => ({
  changeCounter: (num) => dispatch(changeCounterAction(num)),
});
const cHome = connect(mapState, mapDispatch)(Home);
export default cHome;
