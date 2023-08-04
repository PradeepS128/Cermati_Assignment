/// <reference types="Cypress" />
import 'cypress-xpath'

describe("Test Suite",()=>{

    beforeEach("SignIn flow",()=>{
        signIn()
    })

    function signIn()
    {
        //login flow or sign up flow
    }
//------------------------------------------------------------------------------------

it("Access a Product via category after applying multiple filters",()=>{
cy.uncaught_exception()  // Check for uncaught exceptions in the Cypress test to Prevent Cypress from failing the test
cy.visit("https://www.ebay.com/")        // helps to navigate to website
cy.contains(' Shop by category').click()   // Click the element with text "Shop by category" 
cy.contains('Electronics').should('have.text','Electronics') // Ensure that the element with text "Electronics" is displayed 
cy.contains('Cell phones & accessories').click()  //Click the element with text "Cell phones & accessories
cy.contains('Shop by Category').should('have.text','Shop by Category') // ensuring element has name 
cy.contains('Cell Phones & Smartphones').click() //Click the element with text "Cell Phones & Smartphones".
cy.get('.b-guidance > .b-carousel__header > .b-carousel__seeall').click()  // to perform click operation on seeall element

cy.contains('Screen Size').click()
cy.contains('5.5 - 5.9 in').click() //if the screen size contains 5.5 - 5.9, then select it,
cy.wait(3000)

cy.get('#c2-mainPanel-price > .x-overlay-aspect__label').invoke('offset').then((position)=>{
    const left=position.left
    const top=position.top
    cy.get('#c2-mainPanel-price > .x-overlay-aspect__label',{timeout:10000},{force: true}).scrollTo(left,top,{ensureScrollable:false}).click()
})    //Scroll to the element  based on its position obtained using invoke('offset'), and then click on it.
cy.get('.x-textrange__input--from').type(100) // price range 
cy.get('.x-textrange__input--to').type(500)
cy.wait(3000)

cy.contains('Item Location').click({waitForAnimations:false}) // Item location
cy.get('.x-overlay__wrapper--left').scrollIntoView() // to scroll up
cy.xpath('//input[@value="Worldwide"]').click() // wordwide radio button in item location
cy.get('.x-tray__count').should('have.text','(3) Filter(s) selected') // performing an assertion to Verify that the filter tags are applied.
cy.get('.x-overlay-footer__apply-btn').click()
cy.get('.b-pageheader__text').should('have.text','5.5 - 5.9 Inch Cell Phones & Smartphones between US $100.00 and US $500.00') // Verified that the filter tags are applied.

})

it("Access a Product via Search",()=>{
    cy.uncaught_exception() //Check for uncaught exceptions in the Cypress test.
    cy.visit("https://www.ebay.com/")       //Navigate to eBay's homepage.
    cy.xpath('//input[@placeholder="Search for anything"]').type('MacBook')  //Type 'MacBook' into the search input.
    cy.get('#gh-cat').select('Computers/Tablets & Networking',{force: true}) //Select the category 'Computers/Tablets & Networking'.
    cy.xpath('//input[@type="submit"]').click() //Click the search submit button.
    cy.wait(5000) //Wait 5 seconds for the  page to load
    cy.get('#item243d47d629 > .s-item__wrapper > .s-item__info > .s-item__link > .s-item__title > [role="heading"] > .BOLD').first().invoke('text').then((name)=>{
        expect(name).to.contains('MacBook')
    }) //Get the first item's title and verify if it contains 'MacBook' 

})// it
}) // describe
