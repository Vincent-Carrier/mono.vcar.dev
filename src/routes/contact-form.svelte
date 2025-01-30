<script lang="ts">
	import Button from '$lib/components/button.svelte'
	import type { FocusEventHandler } from 'svelte/elements'

	let showCaptcha = $state(false)
	const onfocus: FocusEventHandler<any> = () => {
		showCaptcha = true
	}
</script>

<form
	data-netlify="true"
	data-netlify-recaptcha="true"
	method="POST"
	name="contact"
	class="card-dark flex-y-1 w-full bg-slate-950 px-3 py-4 text-slate-100"
>
	<input {onfocus} type="hidden" name="form-name" value="contact" />
	<label for="name">Name</label>
	<input
		{onfocus}
		type="text"
		id="name"
		name="name"
		autocomplete="name"
		placeholder="Dennis Richie"
		required
	/>
	<label for="email">Email</label>
	<input
		{onfocus}
		type="email"
		id="email"
		name="email"
		autocomplete="email"
		placeholder="dennis@bell.labs"
		required
	/>
	<label for="message">Message</label>
	<textarea {onfocus} id="message" name="message" rows="4" required></textarea>
	<div hidden={!showCaptcha} data-netlify-recaptcha="true"></div>
	<Button type="submit" class="self-end">Send</Button>
</form>
