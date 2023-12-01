import { PureComponent } from "react";
import { connect } from "react-redux";
import store from "../store";
import { changeCounterAction } from "../store/action";

export class Home extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: store.getState().counter,
    };
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const counter = store.getState().counter;
      this.setState({ counter });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  btnClick(num) {
    this.props.changeCounterAction(num);
  }
  render() {
    const { counter } = this.state;
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
    counter: state.counter,
  });
  const mapDispatch = (dispatch) => ({
    changeCounterAction(num) {
      dispatch(changeCounterAction(num));
    },
  });
  const cHome = connect(mapState, mapDispatch)(Home);
  export default cHome;
