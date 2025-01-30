<script lang="ts">
	import Button from '$lib/components/button.svelte'
</script>

<form
	data-netlify="true"
	data-netlify-recaptcha="true"
	method="POST"
	name="contact"
	class="card-dark flex-y-1 w-full bg-slate-950 px-3 py-4 text-slate-100"
>
	<input type="hidden" name="form-name" value="contact" />
	<label for="name">Name</label>
	<input
		type="text"
		id="name"
		name="name"
		autocomplete="name"
		placeholder="Dennis Richie"
		required
	/>
	<label for="email">Email</label>
	<input
		type="email"
		id="email"
		name="email"
		autocomplete="email"
		placeholder="dennis@bell.labs"
		required
	/>
	<label for="message">Message</label>
	<textarea id="message" name="message" rows="4" required></textarea>
	<div data-netlify-recaptcha="true"></div>
	<Button type="submit" class="self-end">Send</Button>
</form>
