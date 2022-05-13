import LoginPage from "../PageObject/LoginPage"
import PostersPage from "../PageObject/PostersPage"
import DashboardPage from "../PageObject/DashboardPage"
import CustomersPage from "../PageObject/CustomersPage"

const loginPage = new LoginPage()
const postersPage = new PostersPage()
const dashboardPage = new DashboardPage()
const customersPage = new CustomersPage()
let usernameStorage = ""

Given("I navigate to the login page", () => {
    loginPage.navigate()
})

When("I enter username {string} and password {string} and click Sign In button", (username, password) => {
    loginPage.enterUsername(username)
    loginPage.enterPassword(password)

    loginPage.clickLogin()
    usernameStorage = window.localStorage.getItem('usesrname')
})

Then("I should be logged in as {string}", (username) => {
    dashboardPage.verifyUsername(username)
})

Given("I already logged in", () => {
    window.localStorage.setItem('username', usernameStorage)
})


When("I navigate to the posters page and search for {string}", (name) => {
    postersPage.navigateFromFrontPage()
    postersPage.search(name)
})

Then("I verify the 1st image name {string}", (name) => {
    postersPage.verifyFirstImageName(name)
})

When("I navigate to the customers page and click create button", () => {
    customersPage.navigateFromFrontPage()
    customersPage.clickCreateButton()
})

And("I enter customer information then click save", (datatable) => {
    datatable.hashes().forEach(element => {
        customersPage.createNewCustomer(
            element.firstname,
            element.lastname,
            element.email,
            element.birthday,
            element.address,
            element.city,
            element.state,
            element.zipcode,
            element.password)
    })
})

Then("I navigate back to customers page and verify new customer name {string}", (name) => {
    customersPage.verifyAddedCustomerName(name)
})