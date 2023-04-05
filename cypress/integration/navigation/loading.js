/// <reference types="cypress" />

describe('Loading', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads on home page', () => {
    cy.get('[data-testid="ScreenPlaceholder"]').contains('Главная');
    cy.get('[data-testid="TabBar"]')
      .find('[data-testid="Typography"]')
      .should('have.length', 4);
    cy.get('[data-testid="TabButton"]')
      .should('have.length', 4)
      .and('contain', 'Главная')
      .and('contain', 'Платежи')
      .and('contain', 'Банкоматы')
      .and('contain', 'Профиль')
      .get('[data-testid="Icon"]')
      .should('have.length', 4);
    cy.matchImageSnapshot('Home Page');
  });
});
