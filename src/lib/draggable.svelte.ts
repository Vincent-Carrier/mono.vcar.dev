import type { Action } from 'svelte/action'

const draggable: Action<HTMLDivElement, { handle: HTMLElement }> = (node, { handle }) => {
	let dragging = $state(false)
	let x = $state(node.offsetLeft)
	let y = $state(node.offsetTop)

	handle.classList.add('active:cursor-grabbing', 'cursor-grab')

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

	handle.addEventListener('mousedown', handleMouseDown)
	window.addEventListener('mousemove', handleMouseMove)
	window.addEventListener('mouseup', handleMouseUp)

	node.addEventListener('draggableoff', destroy)

	function destroy() {
		handle.classList.remove('active:cursor-grabbing', 'cursor-grab')
		handle.removeEventListener('mousedown', handleMouseDown)
		window.removeEventListener('mousemove', handleMouseMove)
		window.removeEventListener('mouseup', handleMouseUp)
	}
}

export default draggable
