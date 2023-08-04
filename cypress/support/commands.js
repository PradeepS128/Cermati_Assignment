// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('uncaught_exception',function(){
    cy.on('uncaught:exception', (err) => {
        // Handle the uncaught exception here
        console.error('Uncaught Exception:', err.message);
        // Prevent Cypress from failing the test
        return false;
    })
})


Cypress.Commands.add('disableAnimations', () => {
    cy.document().then((doc) => {
      const styleTag = doc.createElement('style');
      styleTag.innerHTML = `
        * {
          animation: none !important;
          transition: none !important;
        }
      `;
      doc.head.appendChild(styleTag);
    });
  });
  
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })