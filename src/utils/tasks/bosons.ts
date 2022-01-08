import { defineTasks } from './define';
import { taskMassString as m } from './mass';

export const bosons = defineTasks('boson', {
	gluon: {
		name: 'Work on TOK Essay',
		mass: '0',
		charge: '0',
		spin: '1',
	},
	photon: {
		name: 'Break',
		mass: '0',
		charge: '0',
		spin: '1',
	},
	zBoson: {
		name: 'Finish coding ICS IA',
		mass: m({ mass: 91.2, unit: 'GeV' }),
		charge: '0',
		spin: '1',
	},
	wBoson: {
		name: 'Meeting with parents',
		mass: m({ mass: 80.4, unit: 'GeV' }),
		charge: '±1',
		spin: '1',
	},
	higgsBoson: {
		name: 'Read a book',
		mass: m({ mass: 126, unit: 'GeV' }),
		charge: '0',
		spin: '0',
	},
});
