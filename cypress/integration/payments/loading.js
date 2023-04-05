/// <reference types="cypress" />

describe('Cypress Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('opens payments page correctly', () => {
    cy.get('[data-testid="TabButton"]')
      .contains('Платежи')
      .click()
      .matchImageSnapshot('Payments Page - Loading');
    cy.intercept('GET', '', (req) => {
      req.reply(async (res) => {
        res.send({
          delay: 4000,
          fixture: 'payments/categories.json',
        });
      });
    }).as('categories');
    cy.wait('@categories').its('response').its('delay').should('equal', 4000);
    cy.get('[data-testid="Payments"]')
      .and('contain', 'Платежи')
      .and('contain', 'Тест Мобильная связь')
      .and('contain', 'Тест ЖКХ')
      .and('contain', 'Тест Интернет');
    cy.get('[data-testid="Payments"] [data-testid="Icon"]').should(
      'have.length',
      3,
    );
    cy.matchImageSnapshot('Payments Page - Loaded');
  });
});
