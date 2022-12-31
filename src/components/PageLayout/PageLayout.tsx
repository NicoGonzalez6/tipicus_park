import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface PageLayoutInterface {
	children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutInterface): JSX.Element => {
	return (
		<>
			<Header />
			<StyledHome>{children}</StyledHome>
			<Footer />
		</>
	);
};

export default PageLayout;

const StyledHome = styled.section`
	min-height: 80vh;
	height: auto;
	padding: ${({ theme }) => theme.container_spacing.home_container};
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${({ theme }) => theme.spacing.xlg};

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: ${({ theme }) => theme.container_widths.sm};
		margin: 0 auto;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: ${({ theme }) => theme.container_widths.md};
		margin: 0 auto;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: ${({ theme }) => theme.container_widths.lg};
		margin: 0 auto;
	}
`;
