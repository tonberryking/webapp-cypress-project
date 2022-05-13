class DashboardPage {
    navigate() {
        cy.visit('https://marmelab.com/react-admin-demo/#/')
    }

    verifyUsername(username) {
        cy.get('.MuiButton-root').should('contain', username)
    }
}

export default DashboardPage