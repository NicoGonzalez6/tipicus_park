import image2 from '../assets/Tipicus/tipicus-parque-acuatico-en-las-toninas-3.jpg';
import image3 from '../assets/Tipicus/tipicus-parque-acuatico-en-las-toninas-4.jpg';
import image4 from '../assets/Tipicus/tipicus-parque-acuatico-en-las-toninas-5.jpg';
import image1 from '../assets/Tipicus/tipicus-parque-acuatico-en-las-toninas-11.jpg';
import image7 from '../assets/Tipicus/tipicus-parque-acuatico-en-las-toninas-13.jpg';
import image8 from '../assets/Tipicus/tipicus-parque-acuatico-en-las-toninas-14.jpg';
import image9 from '../assets/Tipicus/tipicus-parque-acuatico-en-las-toninas-17.jpg';
import image10 from '../assets/Tipicus/tipicus-parque-acuatico-en-las-toninas-16.jpg';
import heroImage from '../assets/Tipicus/Web_Photo_Editor.jpg';

interface ImageInterface {
	original: string;
	thumbnail?: string;
}

export const heroImg: ImageInterface[] = [
	{
		original: heroImage,
	},
	{
		original: image1,
	},
	{
		original: image10,
	},
	{
		original: image7,
	},
];
export const images: ImageInterface[] = [
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

export default images;
