import confetti from 'canvas-confetti';

export async function createConfetti() {
	await confetti({
		taskCount: 100,
		spread: 160,
	});
}
