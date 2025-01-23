import type { Action } from 'svelte/action'

const draggable: Action<HTMLDivElement> = (node) => {
	let dragging = $state(false)
	let x = $state(node.offsetLeft)
	let y = $state(node.offsetTop)

	function handleMouseMove(ev: MouseEvent) {
		if (dragging) {
			x += ev.movementX
			y += ev.movementY
			node.style.left = `${x}px`
			node.style.top = `${y}px`
		}
	}

	function handleMouseDown() {
		dragging = true
	}

	function handleMouseUp() {
		dragging = false
	}

	node.addEventListener('mousedown', handleMouseDown)
	window.addEventListener('mousemove', handleMouseMove)
	window.addEventListener('mouseup', handleMouseUp)

	return {
		destroy() {
			node.removeEventListener('mousedown', handleMouseDown)
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('mouseup', handleMouseUp)
		}
	}
}

export default draggable
