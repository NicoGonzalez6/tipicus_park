// type definitions for Cypress object "cy"
/// <reference types="cypress" />
import React from 'react';
import Card from '../../src/components/Card/Card';
import GlobalStyles, { defaultTheme } from '../../src/styles/index';
import { ThemeProvider } from 'styled-components';
//@ts-ignore
import exampleImage from '../../src/assets/Tipicus/no-image.png';

describe('Cards.cy.ts', () => {
	beforeEach(() => {
		//@ts-ignore
		cy.mount(
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<Card text='card' title='card title' img={exampleImage} />
			</ThemeProvider>
		);
	});
	it('Should render correctly', () => {
		cy.get('[data-cy="Card"]').should('exist');
	});

	it('Should contain a image', () => {
		cy.get('[data-cy="Card-img"]').should('exist');
	});

	it('Should contain a title', () => {
		cy.get('[data-cy="Card-title"]').should('exist');
	});

	it('Should contain a text', () => {
		cy.get('[data-cy="Card-text"]').should('exist');
	});
});
