type TaskMassStringOptions = {
	mass: number;
	approx?: boolean;
	lessThan?: boolean;
	unit: 'eV' | 'MeV' | 'GeV';
};
export const taskMassString = ({
	mass,
	lessThan,
	approx,
	unit,
}: TaskMassStringOptions) => {
	let massString = '';
	if (approx) {
		massString += '≈';
	} else if (lessThan) {
		massString += '<';
	}

	massString += `${mass} ${unit}/c<sup>2</sup>`;
	return massString;
};
