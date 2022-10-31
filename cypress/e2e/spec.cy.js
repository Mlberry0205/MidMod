describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://localhost3000/', {
      fixture: 'reservation.json'
    }).as('reservation')
    cy.visit('http://localhost:3000/')
  })

  it('the h1 contains the correct text', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h1.app-title')
      .should('exist')
      .contains('Turing Cafe Reservations')
  })

  it('should contain all the features on the home page and make sure they are correct', () => {
    cy.visit('http://localhost:3000/')
      .get('[placeholder="Name"]')
      .get('[placeholder="Date"]')
      .get('button').contains('Make reservation')
      .get('.card').first()
      .get('h3').contains('Christie')
      .get('p').contains('12/29')
      .get('p').contains('7:00 pm')
      .get('p').contains('number of guests: 12')
      .get('button').contains('CANCEL')
  })
})