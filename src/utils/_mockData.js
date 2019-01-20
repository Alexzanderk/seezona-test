export const formdata = {
	city: {
		element: 'input',
		value: '',
		config: {
			name: 'city',
			type: 'text',
			placeholder: 'Find your city'
		}
	},
	units: {
		element: 'select',
		value: '',
		config: {
			name: 'units',
			placeholder: 'Units format',
			options: [
				['Select units format'],
				['Kelvin', 'default'],
				['Celsius', 'metric'],
				['Fahrenheit', 'imperial']
			]
		}
	}
};

export const initialState = {
	weather: null,
	alert: false,
	loading: false,
	unit: undefined
};

export const weather = {
	coord: {
		lon: -0.13,
		lat: 51.51
	},
	weather: [
		{
			id: 721,
			main: 'Haze',
			description: 'haze',
			icon: '50n'
		}
	],
	base: 'stations',
	main: {
		temp: 274.42,
		pressure: 1021,
		humidity: 69,
		temp_min: 272.15,
		temp_max: 276.15
	},
	visibility: 10000,
	wind: {
		speed: 1.5
	},
	clouds: {
		all: 0
	},
	dt: 1548006600,
	sys: {
		type: 1,
		id: 1414,
		message: 0.1477,
		country: 'GB',
		sunrise: 1547970851,
		sunset: 1548001780
	},
	id: 2643743,
	name: 'London',
	cod: 200
};
