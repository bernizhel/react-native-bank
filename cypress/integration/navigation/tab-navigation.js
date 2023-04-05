/// <reference types="cypress" />

describe('Tab Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('opens expected pages using tab bar', () => {
    cy.get('[data-testid="TabButton"]').contains('Платежи').click();
    cy.get('[data-testid="Payments"]').contains('Платежи');
    cy.matchImageSnapshot('Payments Page');
    cy.get('[data-testid="TabButton"]').contains('Банкоматы').click();
    cy.get('[data-testid="ScreenPlaceholder"]').contains('Банкоматы');
    cy.matchImageSnapshot('ATMs Page');
    cy.get('[data-testid="TabButton"]').contains('Профиль').click();
    cy.get('[data-testid="ScreenPlaceholder"]').contains('Профиль');
    cy.matchImageSnapshot('Profile Page');
    cy.get('[data-testid="TabButton"]').contains('Главная').click();
    cy.get('[data-testid="ScreenPlaceholder"]').contains('Главная');
    cy.matchImageSnapshot('Home Page');
  });
});
