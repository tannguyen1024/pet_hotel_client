import React, { Component } from "react";
import { connect } from "react-redux";

class PetList extends Component {

  state = {
    newPet: {
      name: '',
      color: '',
      breed: '',
      owner_id: 1

    }
  }

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_PETS" });
    this.props.dispatch({ type: "FETCH_OWNERS" });
  }

  handleChange = (event, property) => {
    this.setState({
      newPet: {
        ...this.state.newPet,
        [property]: event.target.value
      }
    })
  }

  submitClick = () => {
    this.props.dispatch({
      type: 'ADD_PET',
      payload: this.state.newPet
    })
  }

  deleteClick = (event, pet) => {
    this.props.dispatch({
      type: 'DELETE_PET',
      payload: pet
    })
  }

  handleClick = (event, pet) => {
    console.log('in handleClick')
    this.props.dispatch({
      type: 'FETCH_CHECKIN',
      payload: pet
    })
  }

  render() {
    return (
      <div>
        <h3>Add Pet</h3>
        <input type="text" placeholder="Pet Name" onChange={(event) => this.handleChange(event, "name")}></input>
        <input type="text" placeholder="Pet Color" onChange={(event) => this.handleChange(event, "color")}></input>
        <input type="text" placeholder="Pet Breed" onChange={(event) => this.handleChange(event, "breed")}></input>
        <select onChange={(event) => this.handleChange(event, "owner_id")}>
          {this.props.owners.map((owner) => {
            return (
              <option value={owner[0]}>{owner[1]}</option>
            )
          })}
        </select>
        <button onClick={this.submitClick}>Submit</button>
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
                  <td>{pet[5] ? pet[6] : "No"}</td>
                  <td>
                    <button onClick={(event) => this.deleteClick(event, pet[0])}>Delete</button>
                    <button onClick={(event) => this.handleClick(event, pet)}>{pet[5] ? "Check Out" : "Check In"}</button>
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
  owners: state.getOwners
});

export default connect(mapStateToProps)(PetList);
