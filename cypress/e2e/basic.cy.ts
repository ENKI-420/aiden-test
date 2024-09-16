describe('Home Page Tests', () => {
  beforeEach(() => {
    // Visit the home page before each test
    cy.visit('/');
  });

  it('displays the correct header text', () => {
    // Check if the header text is displayed with case-insensitive matching
    cy.get('h1')
      .should('be.visible')
      .contains('Adaptive Intuitive Defense Engineering Nexus', { matchCase: false });
  });

  it('displays a clickable button with the correct label', () => {
    // Ensure the button with the label "Clicks" is visible and clickable
    cy.get('button')
      .should('be.visible')
      .contains('Clicks')
      .click(); // Verify that the button is clickable
  });

  it('has a working navigation bar with correct links', () => {
    // Verify the navigation bar contains expected links
    cy.get('nav').within(() => {
      cy.contains('Home').should('have.attr', 'href', '#home');
      cy.contains('Services').should('have.attr', 'href', '#services');
      cy.contains('Portfolio').should('have.attr', 'href', '#portfolio');
      cy.contains('Contact').should('have.attr', 'href', '#contact');
    });
  });

  it('navigates to the Services section when clicking the Services link', () => {
    // Click the "Services" link in the navbar and check URL hash
    cy.contains('Services').click();
    cy.url().should('include', '#services');

    // Verify that the Services section is visible
    cy.get('#services').should('be.visible');
  });

  it('shows a chatbot interface', () => {
    // Verify that the chatbot UI is present and functional
    cy.get('.chatbot').should('exist').and('be.visible');
    cy.get('.chatbot input').type('Hello AIDEN!{enter}');
    cy.get('.chatbot').should('contain', 'Hello AIDEN!');
  });

  it('displays footer with expected content', () => {
    // Check that the footer contains expected text or links
    cy.get('footer').should('be.visible')
      .within(() => {
        cy.contains('Defense Consulting');
        cy.contains('© 2024').should('be.visible'); // Example year
      });
  });

  it('has responsive layout', () => {
    // Test for mobile responsiveness
    cy.viewport('iphone-6');
    cy.get('nav').should('be.visible');
    cy.get('button').contains('Clicks').should('be.visible');
    
    // Test for desktop responsiveness
    cy.viewport('macbook-15');
    cy.get('nav').should('be.visible');
  });
});
