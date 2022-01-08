import { defineTasks } from './define';
import { taskMassString as m } from './mass';

export const quarks = defineTasks('quark', {
	up: {
		name: 'Finish ICS Project',
		charge: '2/3',
		spin: '1/2',
		mass: m({ mass: 2.3, approx: true, unit: 'MeV' }),
	},
	down: {
		name: 'Work on Extended Essay',
		charge: '-1/3',
		spin: '1/2',
		mass: m({ mass: 4.8, unit: 'MeV', approx: true }),
	},
	charm: {
		name: 'Coding Club Meeting',
		charge: '2/3',
		spin: '1/2',
		mass: m({ mass: 1.275, unit: 'GeV', approx: true }),
	},
	strange: {
		name: 'Clean up room',
		charge: '-1/3',
		spin: '1/2',
		mass: m({ mass: 95, unit: 'MeV', approx: true }),
	},
	top: {
		name: 'Wash the dishes',
		charge: '2/3',
		spin: '1/2',
		mass: m({ mass: 137, unit: 'GeV', approx: true }),
	},
	bottom: {
		name: 'Breakfast',
		charge: '-1/3',
		spin: '1/2',
		mass: m({ mass: 4.12, unit: 'GeV', approx: true }),
	},
});
