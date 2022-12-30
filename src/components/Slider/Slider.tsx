import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';

const Slider = ({ images, showNav }: any): JSX.Element => {
	SwiperCore.use([Autoplay, Navigation, Pagination]);

	return (
		<SliderContainer>
			<ImageGallery
				items={images}
				showFullscreenButton={false}
				showNav={showNav}
				infinite
				autoPlay={true}
			/>
		</SliderContainer>
	);
};

export default Slider;

const SliderContainer = styled.div`
	position: relative;
	width: 100%;
	height: auto;

	.image-gallery {
		width: 100%;
		height: auto;
	}

	.image-gallery-slide img {
		width: 100%;
		height: 300px;
		max-height: 80vh;
		object-fit: cover;
		object-position: center center;
		border-radius: ${({ theme }) => theme.radiusses.sm};
		@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
			height: 500px;
		}
	}

	.image-gallery-thumbnail-inner {
		height: 60px;
		cursor: pointer;

		img {
			height: 100%;
		}
	}
`;
