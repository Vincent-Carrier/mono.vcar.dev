import type { Action } from 'svelte/action';

const draggable: Action<Element> = (node) => {
	let x = 0;
	let y = 0;
	let isDown = false;

	const handleMouseDown = (event: MouseEvent) => {
		isDown = true;
		x = event.clientX - node.getBoundingClientRect().left;
		y = event.clientY - node.getBoundingClientRect().top;
	};

	const handleMouseMove = (event: MouseEvent) => {
		if (isDown) {
			node.style.left = `${event.clientX - x}px`;
			node.style.top = `${event.clientY - y}px`;
		}
	};

	const handleMouseUp = () => {
		isDown = false;
	};

	node.addEventListener('mousedown', handleMouseDown);
	node.addEventListener('mousemove', handleMouseMove);
	node.addEventListener('mouseup', handleMouseUp);

	return {
		destroy() {
			node.removeEventListener('mousedown', handleMouseDown);
			node.removeEventListener('mousemove', handleMouseMove);
			node.removeEventListener('mouseup', handleMouseUp);
		}
	};
};
