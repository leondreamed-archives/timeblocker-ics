import { defineParticles } from './define';
import { particleMassString as m } from './mass';

export const leptons = defineParticles('lepton', {
	electron: {
		name: 'Lunch',
		mass: m({ mass: 0.511, unit: 'MeV' }),
		charge: '-1',
		spin: '1/2',
	},
	muon: {
		name: 'Dinner',
		mass: m({ mass: 0.511, unit: 'MeV' }),
		charge: '-1',
		spin: '1/2',
	},
	tau: {
		name: 'Finish English Homework',
		mass: m({ mass: 1.777, unit: 'GeV' }),
		charge: '-1',
		spin: '1/2',
	},
	electronNeutrino: {
		name: 'Finish math homework',
		mass: m({ mass: 2.2, unit: 'eV', lessThan: true }),
		charge: '0',
		spin: '1/2',
	},
	muonNeutrino: {
		name: 'Finish Physics Homework',
		mass: m({ mass: 0.17, unit: 'MeV', lessThan: true }),
		charge: '0',
		spin: '1/2',
	},
	tauNeutrino: {
		name: 'Work on Physics IA',
		mass: m({ mass: 15.5, unit: 'MeV', lessThan: true }),
		charge: '0',
		spin: '1/2',
	},
});
