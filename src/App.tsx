import styled from 'styled-components';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './Page/Home/Home';

const App = () => {
	return (
		<StyledApp>
			<Header />
			<Home />
			<Footer />
		</StyledApp>
	);
};

export default App;

const StyledApp = styled.div`
	height: 100%;
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
