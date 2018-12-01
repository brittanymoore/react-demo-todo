describe('Integration', () => {
  it('should present a list of tasks', () => {
    cy.visit('/')

    cy.get('[data-test=task-list]')
  })
})
