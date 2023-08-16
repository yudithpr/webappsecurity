import SearchboxPage from './searchbox.page.js';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('user visit the website', () => {
   SearchboxPage.visit()
})

When('user type "free" on searchbox', () => {
   SearchboxPage.search('free{enter}');
})


Then('user will see the result page', () => {
   cy.get('h2').should('be.visible')
})


