import React, { Component } from 'react';
import { getReservations, postReservation } from '../../apiCalls'
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form'
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      error: ''
    }
  }

    componentDidMount = () => {
      getReservations() 
        .then(data => this.setState({ reservations: data }))
        .catch(error => this.setState({ error: error }))
  }

  //  addReservation = (newReservation) => {
  //   this.setState({ reservation: [...this.state.reservations, newReservation]})
  // }

  addReservation = (newReservation) => {
    postReservation(newReservation)
      .then(data => this.setState({ Reservations: [...this.state.reservations, data]}))
  }

  render() {
    return (
      <main className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation}/>
        <Reservations reservations={this.state.reservations}/>
         {/* <div className='resy-form'></div>
         <div className='resy-container'></div> */}
      </main>
    )
  }
}

export default App;
