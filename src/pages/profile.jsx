import { PureComponent } from "react";
import { connect } from "react-redux";
import { changeNameAction } from "../store/features/profile";

export class Profile extends PureComponent {
  constructor() {
    super();
    this.state = {
      newName: ""
    }
  }
  handleSubmitClick(event) {
    event.preventDefault();
  }
  handleInput(event) {
    this.newName = event.target.value;
    this.setState({ newName: event.target.value });
  }
  changeName(name) {
    this.props.changeName(name);
  }
  render() {
    const { newName } = this.state;
    const { name } = this.props;
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
  name: state.profile.name,
});
// const mapDispatch = (dispatch) => ({
//   changeNameAction(name) {
//     dispatch(changeNameAction(name));
//   },
// });
const mapDispatch = (dispatch) => ({changeName: (name) => dispatch(changeNameAction(name))});
const cHome = connect(mapState, mapDispatch)(Profile);
export default cHome;
