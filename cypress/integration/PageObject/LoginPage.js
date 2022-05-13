class LoginPage {
    navigate() {
        cy.visit('https://marmelab.com/react-admin-demo')
    }

    enterUsername(username) {
        cy.get('#username')
            .clear()
            .type(username);
        return this
    }

    enterPassword(password) {
        cy.get('#password')
            .clear()
            .type(password)
        return this
    }

    clickLogin() {
        cy.get('.MuiButton-root').click()
    }
}

export default LoginPage