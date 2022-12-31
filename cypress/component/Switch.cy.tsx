// type definitions for Cypress object "cy"
/// <reference types="cypress" />
import React, { useState } from 'react';
import ResidentSwitcher from '../../src/components/ResidentSwitcher/ResidentSwitcher';
import GlobalStyles, { defaultTheme } from '../../src/styles/index';
import { ThemeProvider } from 'styled-components';

describe('Switcher.cy.ts', () => {
	it('Should render correctly', () => {
		//@ts-ignore
		cy.mount(
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<ResidentSwitcher value={false} />
			</ThemeProvider>
		);
		cy.get('[data-cy="Switch"]').should('exist');
	});

	it('Should trigger on click function correctly', () => {
		const handleClick = cy.spy().as('handleClick');
		//@ts-ignore
		cy.mount(
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<ResidentSwitcher value={false} onChange={handleClick} />
			</ThemeProvider>
		);
		cy.get('[data-cy="Switch-input"]').should('exist');
		cy.get('[data-cy="Switch-input"]').click();
		cy.get('@handleClick').should('be.calledOnce');
	});
});
