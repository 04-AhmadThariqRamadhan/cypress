describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.pointblank.id/login/form')
    cy.get('#userid').type('chaidir.w')
    cy.get('#password').type('Sh3z4r42001')
    cy.get('.btn_login').click()
  })
})