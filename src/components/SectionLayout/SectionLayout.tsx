import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
	children: React.ReactNode;
	cardSection?: boolean;
}

const SectionLayout = ({ children }: LayoutProps): JSX.Element => {
	return <StyledLayout>{children}</StyledLayout>;
};

export default SectionLayout;

const StyledLayout = styled.section`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.xxlg};
	height: auto;
	width: 100%;
	padding-bottom: ${({ theme }) => theme.spacing.xlg};

	.card-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: ${({ theme }) => theme.spacing.lg};

		@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			justify-content: space-evenly;
		}
	}
`;
