class CustomersPage {
    navigate() {
        cy.visit('https://marmelab.com/react-admin-demo/#/customers')
    }

    navigateFromFrontPage() {
        cy.get('[href="#/customers"]').click()
    }

    clickCreateButton(name) {
        cy.get('[href="#/customers/create"]').click()
    }

    verifyFirstImageName(name) {
        cy.get('.MuiImageListItemBar-title').should('contain', name)
    }

    createNewCustomer(firstname, lastname, email, birthday, address, city, state, zipcode, password) {
        cy.get('#first_name').type(firstname)
        cy.get('#last_name').type(lastname)
        cy.get('#email').type(email)
        cy.get('#birthday').type(birthday)
        cy.get('#address').type(address)
        cy.get('#city').type(city)
        cy.get('#stateAbbr').type(state)
        cy.get('#zipcode').type(zipcode)
        cy.get('#password').type(password)
        cy.get('#confirm_password').type(password)

        cy.get('button[type="submit"]').click()
        cy.wait(3000)
    }

    verifyAddedCustomerName(name) {
        cy.get('#react-admin-title > .MuiTypography-root').should('contain', name)
    }
}

export default CustomersPage