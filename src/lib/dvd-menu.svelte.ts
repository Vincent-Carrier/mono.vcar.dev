import type { Action } from 'svelte/action'

const dvdMenu: Action<HTMLDivElement> = (node) => {
	let x = $state(node.offsetLeft)
	let y = $state(node.offsetTop)
	let dx = $state(0)
	let dy = $state(0)
	let width = $state(node.offsetWidth)
	let height = $state(node.offsetHeight)
	let interval: any = $state()
	let xSoundFx = new Audio('/bounce.wav')
	let ySoundFx = new Audio('/bounce.wav')

	function onDvdStart(ev: any) {
		dx = ev.detail.speed
		dy = ev.detail.speed
		interval = setInterval(() => {
			x += dx
			y += dy
			node.style.left = `${x}px`
			node.style.top = `${y}px`

			if (x <= -2 || x >= window.innerWidth + 2 - width) {
				dx *= -1
				xSoundFx.play()
			}
			if (y <= -2 || y >= window.innerHeight + 2 - height) {
				dy *= -1
				ySoundFx.play()
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
