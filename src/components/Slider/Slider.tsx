import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import styled from 'styled-components';
import image2 from '../../assets/Tipicus/tipicus-parque-acuatico-en-las-toninas-3.jpg';
import image3 from '../../assets/Tipicus/tipicus-parque-acuatico-en-las-toninas-4.jpg';
import image4 from '../../assets/Tipicus/tipicus-parque-acuatico-en-las-toninas-5.jpg';
import image6 from '../../assets/Tipicus/tipicus-parque-acuatico-en-las-toninas-7.jpg';
import image1 from '../../assets/Tipicus/tipicus-parque-acuatico-en-las-toninas-11.jpg';
import image7 from '../../assets/Tipicus/tipicus-parque-acuatico-en-las-toninas-13.jpg';
import image8 from '../../assets/Tipicus/tipicus-parque-acuatico-en-las-toninas-14.jpg';
import image9 from '../../assets/Tipicus/tipicus-parque-acuatico-en-las-toninas-17.jpg';
import image10 from '../../assets/Tipicus/tipicus-parque-acuatico-en-las-toninas-16.jpg';
import ImageGallery from 'react-image-gallery';

const images = [
	{
		original: image1,
		thumbnail: image1,
	},
	{
		original: image2,
		thumbnail: image2,
	},
	{
		original: image3,
		thumbnail: image3,
	},
	{
		original: image4,
		thumbnail: image4,
	},

	{
		original: image6,
		thumbnail: image6,
	},

	{
		original: image7,
		thumbnail: image7,
	},
	{
		original: image8,
		thumbnail: image8,
	},
	{
		original: image9,
		thumbnail: image9,
	},
	{
		original: image10,
		thumbnail: image10,
	},
];

const Slider = () => {
	SwiperCore.use([Autoplay, Navigation, Pagination]);

	return (
		<SliderContainer>
			<ImageGallery
				items={images}
				showFullscreenButton={false}
				infinite
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
		border-radius: 5px;
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
