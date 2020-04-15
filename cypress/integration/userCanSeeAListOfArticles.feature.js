describe('User can see a list of news articles', () => {
    
    before(() => {
        cy.visit('/')
    })
    it('when accessing the page', () => {
        cy.get('div [data-cy="list"]').should('contain', 'Latest News')
    })
})