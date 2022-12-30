import React from 'react';
import styled, { css } from 'styled-components';

interface TextProps {
	children: string;
	textColor?: string;
	textType?: string;
	textBold?: boolean;
	style?: string;
}

const Text = ({
	children,
	textColor = 'white',
	textType,
	textBold,
	style,
}: TextProps): JSX.Element => {
	return (
		<StyledText
			textType={textType}
			textColor={textColor}
			textBold={textBold}
			style={style}
		>
			{children}
		</StyledText>
	);
};

export default Text;

const StyledText = styled.p<TextProps>`
	color: ${({ theme, textColor }) => {
		switch (textColor) {
			case 'white':
				return theme.white_primary;
			case 'primary':
				return theme.primary;
			case 'tertiary':
				return theme.tertiary;
		}
	}};
	font-weight: ${({ textBold }) => {
		switch (textBold) {
			case true:
				return '900';
			case false:
				return '400';
		}
	}};
	letter-spacing: 0.5px;
	font-size: ${({ textType }) => {
		switch (textType) {
			case 'title':
				return '25px';
			case 'subtitle-header':
				return '18px';
			case 'subtitle':
				return '14px';
			case 'text':
				return '12px';
		}
	}};

	${({ textType }) => {
		if (textType === 'title') {
			return css`
				@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
					font-size: 30px;
				}
			`;
		} else if (textType === 'subtitle') {
			return css`
				@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
					font-size: 15px;
				}
			`;
		}
	}}
`;
