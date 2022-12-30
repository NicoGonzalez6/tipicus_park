export interface pricesInterface {
	name: string;
	not_residents: {
		key: string;
		full_time: string;
		half_time: string;
	};
	residents: {
		key: string;
		full_time: string;
		half_time: string;
	};
}

export const pricesInfo: pricesInterface[] = [
	{
		name: 'Mayores',

		not_residents: {
			key: 'No residentes',
			full_time: '$2600',
			half_time: '$1700',
		},
		residents: {
			key: 'Residentes',
			full_time: '$1500',
			half_time: '$1100',
		},
	},
	{
		name: 'Menores (de 12 años)',

		not_residents: {
			key: 'No residentes',
			full_time: '$2000',
			half_time: '$1300',
		},
		residents: {
			key: 'Residentes',
			full_time: '$1200',
			half_time: '$900',
		},
	},
	{
		name: 'Jubilados',
		not_residents: {
			key: 'No residentes',
			full_time: '$2000',
			half_time: '$1300',
		},
		residents: {
			key: 'Residentes',
			full_time: '$1200',
			half_time: '$900',
		},
	},
];
