import { PureComponent } from "react";
import { connect } from "react-redux";
import store from "../store";
import { changeNameAction } from "../store/action";

export class Profile extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: store.getState().name,
      newName: "",
    };
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const name = store.getState().name;
      this.setState({ name });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  handleSubmitClick(event) {
    event.preventDefault();
  }
  handleInput(event) {
    this.newName = event.target.value;
    this.setState({ newName: event.target.value });
  }
  changeName(name) {
    this.props.changeNameAction(name);
  }
  render() {
    const { name, newName } = this.state;
    return (
      <div>
        <h1>profile: {name}</h1>
        <span>new name:</span>
        <form onSubmit={() => this.handleSubmitClick(event)}>
          <label htmlFor="newName">
            <input
              name="newName"
              type="text"
              value={newName}
              onChange={() => this.handleInput(event)}
            ></input>
          </label>
        </form>
        <button onClick={() => this.changeName(newName)}>modify</button>
      </div>
    );
  }
}

const mapState = (state) => ({
  name: state.name,
});
const mapDispatch = (dispatch) => ({
  changeNameAction(name) {
    dispatch(changeNameAction(name));
  },
});
const cHome = connect(mapState, mapDispatch)(Profile);
export default cHome;
