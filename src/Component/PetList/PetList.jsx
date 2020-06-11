import React, { Component } from "react";
import { connect } from "react-redux";

class PetList extends Component {

  
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_PETS" });
  }

  render() {
    console.log(this.props.pets);
    return (
      <div>
        <h3>Add Pet</h3>
        <input type="text" placeholder="Pet Name"></input>
        <input type="text" placeholder="Pet Color"></input>
        <input type="text" placeholder="Pet Breed"></input>
        <select>
          <option>Natalie</option>
          <option>Tan</option>
          <option>Mike</option>
          <option>Chinmaya</option>
        </select>
        <button>Submit</button>
        <h3>History</h3>
        <table>
          <thead>
            <tr>
              <td>Owner</td>
              <td>Pet</td>
              <td>Breed</td>
              <td>Color</td>
              <td>Checked in</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {this.props.pets.map((pet) => {
              return (
                <tr key={pet[0]}>
                  <td>{pet[7]}</td>
                  <td>{pet[1]}</td>
                  <td>{pet[2]}</td>
                  <td>{pet[3]}</td>
                  <td>{pet[5] ? "yes" : "no"}</td>
                  <td>
                    <button>Delete</button>
                    <button>{pet[5] ? "Check Out" : "Check In"}</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pets: state.getPets,
});

export default connect(mapStateToProps)(PetList);
