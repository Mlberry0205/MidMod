import React from 'react'
import Card from '../Card/Card'
import './Reservations.css'

const Reservations = (props) => {
  const reservationCard = reservation.map(reservation => {
    return (
      <div className='reservation-container'>
      <Card />
      </div>
    )
  })
  return (
    <div>
      {reservationCard}
    </div>
  )
}

export default Reservations