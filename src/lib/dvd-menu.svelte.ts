import type { Action } from 'svelte/action'

const dvdMenu: Action<HTMLDivElement> = (node) => {
	let x = $state(node.offsetLeft)
	let y = $state(node.offsetTop)
	let dx = $state(2)
	let dy = $state(2)
	let width = $state(node.offsetWidth)
	let height = $state(node.offsetHeight)
	let soundFx = new Audio('/bounce.wav')
	let interval: any = $state()

	function onDvdStart(ev: any) {
		dx = ev.detail.speed
		dy = ev.detail.speed
		interval = setInterval(() => {
			x += dx
			y += dy
			node.style.left = `${x}px`
			node.style.top = `${y}px`

			if (x <= 0 || x >= window.innerWidth - width) {
				dx *= -1
				soundFx.play()
			}
			if (y <= 0 || y >= window.innerHeight - height) {
				dy *= -1
				soundFx.play()
			}
		}, 16)
	}
	node.addEventListener('dvdstart', onDvdStart)
	$effect(() => {
		return () => {
			clearInterval(interval)
		}
	})
}

export default dvdMenu
