import styled from 'styled-components';
import Text from '../Text/Text';

interface TitleSectionInterface {
	headerTitle?: string;
	mainTitle: string;
	text?: string;
}

const TitleSection: React.FC<TitleSectionInterface> = ({
	headerTitle,
	mainTitle,
	text,
}) => {
	return (
		<StyledTitleSection>
			{headerTitle && (
				<Text textColor='primary' textType='subtitle' textBold={true}>
					{headerTitle}
				</Text>
			)}
			<Text textColor='primary' textType='title' textBold={true}>
				{mainTitle}
			</Text>
			{text && (
				<Text textColor='primary' textType='subtitle' textBold={true}>
					{text}
				</Text>
			)}
		</StyledTitleSection>
	);
};

export default TitleSection;

const StyledTitleSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.sm};
	text-align: center;
`;
