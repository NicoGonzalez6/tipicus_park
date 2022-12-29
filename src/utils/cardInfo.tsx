import card1img from '../assets/Tipicus/tipicus-parque-acuatico-en-las-toninas-7.jpg';
import card2img from '../assets/Tipicus/tipicus-parque-acuatico-en-las-toninas-21.jpg';
import card3img from '../assets/Tipicus/tipicus-parque-acuatico-en-las-toninas-11.jpg';
import card4img from '../assets/Tipicus/tipicus-parque-acuatico-en-las-toninas-20.jpg';
import noimage from '../assets/Tipicus/no-image.png';

export interface cardInfoInterface {
	title: string;
	text: string;
	img: string;
}

export const cardInfo: cardInfoInterface[] = [
	{
		title: 'Parque Acuático',
		text: 'Estamos en RP 11 km. 319 1/2.Las toninas, costa atlántica',
		img: card1img,
	},
	{
		title: 'Toboganes',
		text: 'Variados toboganes para deslizarte tranquilamente o para diversion mas extrema!',
		img: card2img,
	},
	{
		title: 'Piscinas',
		text: 'De distintos tamaños para que disfrute toda la familia,niños y adultos',
		img: card3img,
	},
	{
		title: 'Salón de eventos',
		text: 'Abierto todo el año',
		img: card4img,
	},
	{
		title: 'Primeros auxilios',
		text: 'Sala de primeros auxilios para atender cualquier empergencia inmediata',
		img: noimage,
	},
	{
		title: 'Restaurantes',
		text: 'Tenemos restaurantes, puestos de licuados y café',
		img: noimage,
	},
	{
		title: 'Estacionamiento',
		text: 'Dentro del predio',
		img: noimage,
	},
	{
		title: 'Mesas familiares',
		text: 'Parrillas individuales, mesas al aire para disfrutar con amigos o en familia',
		img: noimage,
	},
	{
		title: 'Juegos',
		text: 'Entretenimiento para niños y adultos, inflables, canchas de futbol/tenís, vóley, tejos',
		img: noimage,
	},
];
