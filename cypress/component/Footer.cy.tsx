// type definitions for Cypress object "cy"
/// <reference types="cypress" />
import React from 'react';
import Footer from '../../src/components/Footer/Footer';
import GlobalStyles, { defaultTheme } from '../../src/styles/index';
import { ThemeProvider } from 'styled-components';

describe('Footer.cy.ts', () => {
	beforeEach(() => {
		//@ts-ignore
		cy.mount(
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<Footer />
			</ThemeProvider>
		);
	});
	it('Should render correctly', () => {
		cy.get('[data-cy="Footer"]').should('exist');
	});
});
