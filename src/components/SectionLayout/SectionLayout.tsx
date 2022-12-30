import React from 'react';
import styled, { css } from 'styled-components';

interface LayoutProps {
	children: React.ReactNode;
	id?: string;
	cardSection?: boolean;
	center?: boolean;
}

const SectionLayout = ({ children, id, center }: LayoutProps): JSX.Element => {
	return (
		<StyledLayout id={id} center={center}>
			{children}
		</StyledLayout>
	);
};

export default SectionLayout;

const StyledLayout = styled.section<LayoutProps>`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.xxlg};
	height: auto;
	width: 100%;
	padding-bottom: ${({ theme }) => theme.spacing.xlg};
	${({ center }) => {
		if (center) {
			return css`
				align-items: center;
			`;
		}
	}};

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
