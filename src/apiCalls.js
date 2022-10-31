const getReservations = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/reservations');
    if (!response.ok) {
      console.log(response.status)
      throw new Error(response.status)
    }
    const data = await response.json();
    console.log(data)
    return data;
  }
  catch (error) {
    console.log(error.message)
  }
};

const postReservation = async (newReservation) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      body: JSON.stringify({
        id: newReservation.id,
        name: newReservation.name,
        date: newReservation.date,
        time: newReservation.time,
        number: newReservation.number
      }),
      headers: {
        'Content-Type': 'application/JSON'
      }});
    if (!response.ok) {
      console.log(response.status)
      throw new Error(response.status)
    }
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.log(error.message)
  }
};

export {getReservations, postReservation }