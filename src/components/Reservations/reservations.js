import React from 'react'
import Card from '../Card/Card'
import './Reservations.css'

const Reservations = ({reservations}) => {
  const reservationCard = reservations.map(reservation => {
    return (
      <Card 
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        id={reservation.id}
        key={reservation.id}
      />
   
    )
  })
  return (
    <div className='reservation-container'>
      {reservationCard}
    </div>
  )
}

export default Reservations