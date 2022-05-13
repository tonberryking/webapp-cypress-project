class PostersPage {
    navigateFromFrontPage() {
        cy.get('[href="#/products"]').click()
    }

    search(name) {
        cy.get('#q').type(name)
        cy.wait(3000)
    }

    verifyFirstImageName(name) {
        cy.get('.MuiImageListItemBar-title').should('contain', name)
    }
}

export default PostersPage