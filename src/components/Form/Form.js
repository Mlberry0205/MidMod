import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: ''
    }
  }

submitReservation = event => {
  event.preventDefault()
  const newReservation = {
    id: Date.now(),
    ...this.state
  }
  this.props.addReservation(newReservation)
  this.clearInputs()
}
clearInputs = () => {
  this.setState({ name: '', date: '', time: '', guests: '' });
}

handleChange = event => {
  this.setState({[event.target.name]: event.target.value})
}
  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='Name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='Date'
          name='Date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='Time'
          name='Time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />
          <input
          type='text'
          placeholder='Number of Guests'
          name='Guests'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />

        <button onClick={event => this.submitReservation(event)}>Make reservation</button>
      </form>
    )
  }
}

export default Form;